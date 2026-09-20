import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Jovix // Digital Product Studio — Web, Web Apps & AI",
  description: "Jovix builds digital products that help businesses grow. Websites, web apps, AI solutions and cloud systems — designed and built end-to-end.",
  keywords: [
    "Jovix",
    "Digital Product Studio",
    "Full-Stack Development",
    "Web Apps",
    "Websites",
    "AI Solutions",
    "Next.js Development"
  ],
  authors: [{ name: "Jovix", url: "https://jovix.co.uk" }],
  openGraph: {
    title: "Jovix // Digital Product Studio — Web, Web Apps & AI",
    description: "Jovix builds digital products that help businesses grow. Websites, web apps, AI solutions and cloud systems.",
    url: "https://jovix.co.uk",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fcf7e3] text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
