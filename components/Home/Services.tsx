"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    color: "gold",
    duration: "1–2 Wochen",
    title: "Entscheidungsanalyse",
    description:
      "Wir analysieren, welche Entscheidungen getroffen werden müssen und welche Informationen dafür tatsächlich benötigt werden.",
    deliverables: [
      "Entscheidungsanalyse",
      "Informationsbedarf",
      "Priorisierung",
    ],
    line: "/Goldline.svg",
    border: "border-l-accent-secondary",
    titleColor: "text-accent-secondary",
    numberColor: "text-accent-secondary",
  },
  {
    color: "grey",
    duration: "2–4 Wochen",
    title: "Steuerungslogik & Informationsmodell",
    description:
      "Wir entwickeln eine durchgängige Steuerungslogik und zeigen, wie Ihre Daten und Prozesse miteinander verbunden werden sollten.",
    deliverables: [
      "Informationsmodell",
      "KPI- & Steuerungslogik",
      "Daten- und Prozessmodell",
    ],
    line: "/Greyline.svg",
    border: "border-l-text-secondary",
    titleColor: "text-surface-dark",
    numberColor: "text-text-secondary",
  },
  {
    color: "petrol",
    duration: "1–2 Wochen",
    title: "Proof of Concept",
    description:
      "Wir validieren das Steuerungsmodell mit einem interaktiven Prototyp und erstellen eine Roadmap für die technische Umsetzung.",
    deliverables: [
      "Interaktiver Prototyp",
      "Umsetzungsroadmap",
      "Übergabedokumentation",
    ],
    line: "/Petrolline.svg",
    border: "border-l-accent",
    titleColor: "text-accent",
    numberColor: "text-accent",
  },
];

export default function Services() {
const [open, setOpen] = useState(0);
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-8 lg:py-32">

        {/* Heading */}

        <div className="text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-text-secondary">
            Unsere Leistungen
          </p>

          <h2 className="text-2xl font-light leading-tight text-surface-dark lg:text-4xl">
            Drei Ausbaustufen.
          </h2>

        </div>

        {/* Content */}

        <div className="relative mt-12 lg:mt-16">

          {/* Großes C (nur Desktop) */}

          <div className="pointer-events-none absolute -right-[1200px] top-[54.5%] z-0 hidden -translate-y-1/2 opacity-100 lg:block">

            <Image
              src="/Logo.svg"
              alt=""
              width={1700}
              height={1700}
            />

          </div>

          {/* Karten */}

          <div className="relative z-20 space-y-8">

            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 gap-4 lg:grid-cols-[130px_900px] lg:items-center"
              >

                {/* Dauer */}

                <div className="hidden text-center lg:block lg:pr-10">

                  <p className={`text-3xl font-light md:text-5xl ${service.numberColor}`}>
                    {service.duration.split(" ")[0]}
                  </p>

                  <p className="mt-1 text-base font-light text-text-secondary lg:mt-2 lg:text-xl">
                    Wochen
                  </p>

                </div>

                {/* Karte */}

                <div
                  className={`relative border border-text-secondary/20 border-l-4 bg-background p-6 lg:border-l-8 lg:p-5 ${service.border}`}
                >

                  {/* Desktop-Verbindungslinie */}

                  <div className="pointer-events-none absolute left-full top-1/2 z-10 hidden -translate-y-1/2 lg:block">

                    <Image
                      src={service.line}
                      alt=""
                      width={820}
                      height={120}
                    />

                  </div>

                  {/* Mobile Accordion Header */}

                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="flex w-full items-center justify-between lg:hidden"
                  >

                    <h3 className={`text-left text-xl font-light ${service.titleColor}`}>
                    {service.title}

                    <span className="mt-1 block text-sm font-light text-text-secondary">
                      ({service.duration})
                    </span>
                  </h3>

                    <ChevronDown
                      className={`h-5 w-5 text-text-secondary transition-transform duration-300 ${
                        open === index ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  {/* Mobile Content */}

                  {open === index && (

                    <div className="mt-6 lg:hidden">

                      <p className="text-sm font-light leading-6 text-text-secondary">
                        {service.description}
                      </p>

                      <div className="mt-6">

                        <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-surface-dark">
                          Liefergegenstände
                        </p>

                        <ul className="space-y-2">

                          {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="border-b border-text-secondary/20 pb-2 text-sm font-light text-surface-dark"
                          >
                              {item}
                            </li>
                          ))}

                        </ul>

                      </div>

                    </div>

                  )}

                  {/* Desktop */}

                  <div className="hidden lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">

                    <div>

                      <h3
                        className={`text-3xl font-light ${service.titleColor}`}
                      >
                        {service.title}
                      </h3>

                      <p className="mt-5 text-lg font-light leading-relaxed text-text-secondary">
                        {service.description}
                      </p>

                    </div>

                    <div>

                      <p className="mb-3 text-sm uppercase tracking-[0.18em] text-surface-dark">
                        Liefergegenstände
                      </p>

                      <ul className="space-y-2">

                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="border-b border-text-secondary/20 pb-2 text-base font-light text-surface-dark"
                          >
                            {item}
                          </li>
                        ))}

                      </ul>

                      

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}