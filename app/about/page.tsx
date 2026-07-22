import Header from "@/components/Header";

import AboutHero from "@/components/about/AboutHero";
import StoryIntro from "@/components/about/StoryIntro";
import Timeline from "@/components/about/Timeline";
import InsightSection from "@/components/about/InsightSection";
import TranslatorSection from "@/components/about/TranslatorSection";
import ReasonCalanor from "@/components/about/ReasonCalanor";
import FounderCTA from "@/components/about/FounderCTA";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden">

        {/* Hero */}
        <AboutHero />

        {/* Mein Weg */}
        <Timeline />

        {/* Meine Denkweise */}
        <InsightSection />

        {/* Mein größter USP */}
        <TranslatorSection />

        {/* Abschluss */}
        <FounderCTA />

      </main>
    </>
  );
}