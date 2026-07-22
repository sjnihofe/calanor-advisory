"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SolutionSection() {
const [open, setOpen] = useState(0);
  const steps = [
    {
      number: "01",
      title: "Entscheidungen verstehen",
      text: "Wir verstehen, welche Entscheidungen getroffen werden müssen und welche Informationen dafür wirklich relevant sind.",
    },
    {
      number: "02",
      title: "Informationen analysieren",
      text: "Wir identifizieren die benötigten Informationen und Ihre Quellen innerhalb Ihrer Prozesse.",
    },
    {
      number: "03",
      title: "Steuerungslogik entwickeln",
      text: "Wir entwickeln eine Steuerungslogik und Datenstrategien für bessere Managemententscheidungen.",
    },
    {
      number: "04",
      title: "Prototyp entwickeln",
    },
    {
      number: "05",
      title: "Umsetzungsroadmap",
      text: "Wir entwickeln eine Roadmap für die nachhaltige Verankerung im Unternehmen.",
    },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-8 lg:py-32">

        {/* Heading */}

        <div className="text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-text-secondary">
            Unser Ansatz
          </p>

          <h2 className="text-2xl font-light leading-tight text-surface-dark sm:text-4xl lg:text-5xl">
            In <span className="text-accent">fünf</span> Schritten
            <br className="hidden lg:block" />
            zu besseren Entscheidungen.
            <span className="text-accent-secondary"> Ohne Risiko.</span>
          </h2>

        </div>

        {/* Steps */}

        <div className="mt-10 space-y-2 lg:mt-24 lg:grid lg:grid-cols-5 lg:gap-12 lg:space-y-0">

          {steps.map((step, index) => (
            <div key={step.number} className="relative">

              {/* Mobile */}

              <div className="lg:hidden">

              <div className="flex items-start gap-5">

                {/* Nummer */}

                <div className="relative flex w-8 justify-center">

                  <span className="relative top-[-2px] text-[18px] font-light text-accent">
                    {step.number}
                  </span>

                </div>

                {/* Accordion */}

                <div className="flex-1 border-b border-text-secondary/20 pb-5">

                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="flex w-full items-center justify-between text-left"
                  >

                    <h3 className="text-[16px] font-normal leading-tight text-surface-dark">
                      {step.title}
                    </h3>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                        open === index ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  {open === index && (

                    <div className="mt-4">

                      {step.number === "04" ? (

                        <p className="text-sm font-light leading-7 text-text-secondary">
                          Mit einem Proof of  Concept validieren wir den Nutzen{" "}
                          <span className="text-accent-secondary">
                            bevor Geld in IT-Tools investiert wird.
                          </span>
                        </p>

                      ) : (

                        <p className="text-sm font-light leading-7 text-text-secondary">
                          {step.text}
                        </p>

                      )}

                    </div>

                  )}

                </div>

              </div>

            </div>

              {/* Desktop */}

              <div className="hidden lg:block">

                <div className="mb-8 flex items-center">

                  <span className="text-4xl font-light text-accent">
                    {step.number}
                  </span>

                  {step.number !== "05" && (
                    <div className="ml-6 h-px flex-1 bg-text-secondary/25" />
                  )}

                </div>

                <h3 className="mb-4 min-h-[72px] text-2xl font-normal leading-tight text-surface-dark">
                  {step.title}
                </h3>

                {step.number === "04" ? (
                  <p className="font-light leading-relaxed text-text-secondary">
                    Mit einem Proof of Concept validieren wir den Nutzen{" "}
                    <span className="text-accent-secondary">
                      bevor Geld in IT-Tools investiert wird.
                    </span>
                  </p>
                ) : (
                  <p className="font-light leading-relaxed text-text-secondary">
                    {step.text}
                  </p>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}