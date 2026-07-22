"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

const timeline = [
  {
    company: "HSBC INKA",
    period: "Der Anfang",
    title: "Etablierte Prozesse hinterfragen.",
    text: "Bei HSBC INKA mussten händisch Verträge mit Rechnungen abgeglichen werden. Ich habe hinterfragt, ob es keinen effizienteren Weg gibt. Einige Telefonate mit unseren Partnerbanken und ein Excel-Tool später konnte ich diesen Prozess automatisieren. Mir wurde klar: Der größte Hebel für Prozesseffizienz liegt darin, Informationen intelligenter verfügbar zu machen.",
  },
  {
    company: "Audi",
    period: "Echter Impact",
    title: "Die meisten Daten lassen sich auf der richtigen Ebene vernetzen.",
    text: "Bei Audi gab es bereits viele Daten. Dabei hat jedoch jeder Bereich die Daten in leicht unterschiedlicher Form verarbeitet. Ich habe die Beweggründe verstanden und mit kleinen Anpassungen dafür gesorgt, dass jeder weiterhin die benötigten Informationen erhält, die Daten aber miteinander vernetzt werden. Dies hat nicht nur Prozesse verschlankt, sondern auch neue Möglichkeiten für das Berichtswesen eröffnet.",
  },
  {
    company: "Volkswagen",
    period: "Der Wendepunkt",
    title: "Nicht Software verbessert die Steuerung. Informationsflüsse tun es.",
    text: "Mit dem Wechsel zu Volkswagen verschob sich mein Fokus von einzelnen Reportings auf die Unternehmenssteuerung selbst. Ich entwickelte ein neues Steuerungsmodell und leitete dessen Umsetzung in einem konzernübergreifenden IT-Projekt. Durch die Harmonisierung von Daten und die Automatisierung von Informationsflüssen wurde die Entscheidungsgrundlage verbessert und gleichzeitig IT-Tools reduziert.",
  },
  {
    company: "CALANOR ADVISORY",
    period: "Heute",
    title: "Aus Erfahrungen wurde eine Methode.",
    text: "Heute verbinde ich genau die drei Welten, die Unternehmen häufig getrennt betrachten: Strategie, Controlling und IT. Mein Ziel ist nicht, möglichst viele Dashboards oder neue Software zu entwickeln. Mein Ziel ist es, Informationsflüsse so zu gestalten, dass bessere Entscheidungen möglich werden – adressatengerecht und automatisiert.",
  },
];

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">

        {/* Intro */}

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
            Mein Weg
          </p>

          <h2 className="mt-5 text-2xl font-light leading-tight text-surface-dark lg:mt-6 lg:text-5xl">
            Vier Stationen.
            <br />
            <span className="text-accent">Eine Denkweise.</span>
          </h2>

          <p className="mt-6 text-base font-light leading-8 text-text-secondary lg:mt-8 lg:text-lg lg:leading-9">
            Rückblickend war jede Station meiner Laufbahn weniger ein
            Karriereschritt als vielmehr eine neue Erkenntnis darüber, wie
            Unternehmenssteuerung wirklich funktioniert.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-10 border-l border-[#D7D9DC]">

          {timeline.map((item, index) => {
            const open = openIndex === index;

            return (
              <div key={item.company} className="relative pl-8">

                {/* Punkt */}

                <div className="absolute -left-[7px] top-8 h-3 w-3 rounded-full bg-accent" />

                {/* Header */}

                <button
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="flex w-full items-center justify-between py-8 text-left"
                >
                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-accent lg:text-sm">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-xl font-light text-surface-dark lg:text-2xl">
                      {item.company}
                    </h3>

                  </div>

                    <ChevronDownIcon
                        className={`h-6 w-6 text-surface-dark transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                        }`}
                    />

                </button>

                {/* Inhalt */}

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open ? "max-h-[600px] pb-8" : "max-h-0"
                  }`}
                >

                  <h4 className="text-xl font-light leading-tight text-surface-dark lg:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-5 text-base font-light leading-8 text-text-secondary lg:text-lg lg:leading-9">
                    {item.text}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}