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

        <h1 className="text-[4rem] font-light tracking-[0.15em] text-surface-dark sm:text-[5rem] md:text-[8rem] md:tracking-[0.20em]">
          CALANOR
        </h1>

        <p className="mt-1 text-3xl font-extralight tracking-[0.10em] text-accent sm:text-4xl md:mt-2 md:text-6xl">
          ADVISORY
        </p>

     

      </div>

      {/* Hero */}
      <section className="pt-6 md:pt-15">
        <Hero />
      </section>

      {/* Problem */}
      <ProblemSection />

      {/* Solution */}
      <SolutionSection />

      {/* WhyCalanor */}
      <WhyCalanor />

      {/* Services */}
      <Services />


      {/* PerspectiveSection */}
      <PerspectiveSection />

      {/* ContactSection */}
      <ContactSection />

    </main>
  );
}