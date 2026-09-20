import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide your name, email, and project overview." },
        { status: 400 }
      );
    }

    const recipient = "jyotiswarupparhi@gmail.com";

    // 1. If RESEND_API_KEY is present in environment variables, use Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Jovix Inquiries <onboarding@resend.dev>",
            to: [recipient],
            reply_to: email,
            subject: `New Project Inquiry: ${name} (${projectType || "Project"}) - Jovix`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
                <h2 style="color: #0f172a; margin-top: 0;">New Project Inquiry Received</h2>
                <p>You received a new inquiry from the Jovix website.</p>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Project Type:</strong> ${projectType || "Website"}</p>
                <p><strong>Project Overview:</strong></p>
                <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 12px 16px; border-radius: 4px; white-space: pre-wrap; font-size: 14px; color: #334155;">${message}</div>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p style="font-size: 12px; color: #94a3b8;">Sent from jovix.co.uk contact form.</p>
              </div>
            `
          })
        });

        if (resendRes.ok) {
          return NextResponse.json({ success: true, message: "Inquiry delivered successfully!" });
        }
      } catch (resendError) {
        console.error("Resend delivery failed, falling back to FormSubmit:", resendError);
      }
    }

    // 2. Direct delivery to jyotiswarupparhi@gmail.com via FormSubmit
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _replyto: email,
        "Looking to build": projectType || "Website",
        message: message,
        _subject: `New Project Inquiry: ${name} (${projectType || "Project"}) - Jovix`,
        _template: "table",
        _captcha: "false"
      })
    });

    const data = await formSubmitRes.json();

    if (formSubmitRes.ok) {
      return NextResponse.json({
        success: true,
        message: "Inquiry sent successfully!"
      });
    } else {
      console.error("FormSubmit response error:", data);
      return NextResponse.json(
        { success: false, message: data.message || "Failed to forward inquiry." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Contact API exception:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
