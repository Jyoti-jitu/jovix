import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BusinessValue from "@/components/BusinessValue";
import RevenueFlow from "@/components/RevenueFlow";
import SelectedWork from "@/components/SelectedWork";
import BusinessSolutions from "@/components/BusinessSolutions";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fcf7e3] text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <BusinessValue />
      <RevenueFlow />
      <SelectedWork />
      <BusinessSolutions />
      <TechStack />
      <Process />
      <About />
      <ContactCTA />
      <Footer />
    </main>
  );
}
