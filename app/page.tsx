import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import ProblemSection from "@/components/Home/ProblemSection";
import SolutionSection from "@/components/Home/SolutionSection";
import Services from "@/components/Home/Services";
import WhyCalanor from "@/components/Home/WhyCalanor";
import PerspectiveSection from "@/components/Home/PerspectiveSection";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-background">

        <div className="pt-1 text-center">

          <h1 className="text-[4rem] font-light tracking-[0.15em] text-surface-dark sm:text-[5rem] lg:text-[8rem] lg:tracking-[0.20em]">
            CALANOR
          </h1>

          <p className="mt-1 text-3xl font-extralight tracking-[0.10em] text-accent sm:text-4xl lg:mt-2 lg:text-6xl">
            ADVISORY
          </p>

        </div>

        {/* Hero */}
        <section className="pt-6 lg:pt-15">
          <Hero />
        </section>

        <ProblemSection />

        <SolutionSection />

        <WhyCalanor />

        <Services />

        <PerspectiveSection />

        <ContactSection />

      </main>
    </>
  );
}