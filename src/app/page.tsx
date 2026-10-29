import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SessionSimulator from "@/components/SessionSimulator";
import Portfolio from "@/components/Portfolio";
import Differentials from "@/components/Differentials";
import Process from "@/components/Process";
import StudioLocation from "@/components/StudioLocation";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Differentials />
        <Process />
        <SessionSimulator />
        <StudioLocation />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
