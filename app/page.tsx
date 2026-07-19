import Brand from "../components/Brand";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import Services from "../components/Services";
import WhyCalanor from "../components/WhyCalanor";
import PerspectiveSection from "../components/PerspectiveSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="bg-background">
      

      <div className="pt-16 text-center">

        <h1 className="text-[8rem] font-light tracking-[0.20em] text-surface-dark">
          CALANOR
        </h1>

        <p className="mt-2 text-6xl font-extralight tracking-[0.10em] text-accent">
          ADVISORY
        </p>

     

      </div>

      {/* Hero */}
      <section className="pt-15">
        <Hero />
      </section>

      {/* Problem */}
      <ProblemSection />

      {/* Solution */}
      <SolutionSection />

      {/* Services */}
      <Services />

      {/* WhyCalanor */}
      <WhyCalanor />

      {/* PerspectiveSection */}
      <PerspectiveSection />

      {/* ContactSection */}
      <ContactSection />

    </main>
  );
}