"use client";

import { useState } from "react";

const cards = [
  {
    role: "Geschäftsführung",
    title: "Orientierung statt Details.",
    text: "Strategische Entscheidungen entstehen nicht durch tausende Datensätze. Sie entstehen durch wenige, verständliche Informationen, die Zusammenhänge sichtbar machen.",
  },
  {
    role: "Fachbereiche",
    title: "Vernetzung statt Insellösungen.",
    text: "Entwicklung, Controlling, Produktion oder Vertrieb benötigen unterschiedliche Perspektiven auf dieselben Informationen. Erst wenn diese zusammenpassen, entstehen funktionierende Prozesse.",
  },
  {
    role: "IT",
    title: "Klarheit statt Annahmen.",
    text: "Gute Software beginnt nicht mit Code. Sie beginnt mit klar beschriebenen Prozessen, definierten Informationsflüssen und eindeutigen Anforderungen.",
  },
];

export default function TranslatorSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-36">

        {/* Einleitung */}

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
            Was meine Arbeit auszeichnet
          </p>

          <h2 className="mt-5 text-2xl font-light leading-tight text-surface-dark lg:mt-6 lg:text-5xl">
            Ich entwickle keine Lösungen
            <br />
            für Daten.
          </h2>

          <h2 className="mt-2 text-2xl font-light leading-tight text-accent lg:text-5xl">
            Ich entwickle Lösungen für Menschen.
          </h2>

          <p className="mt-6 max-w-4xl text-base font-light leading-8 text-text-secondary lg:mt-10 lg:text-lg lg:leading-9">
            Jede Rolle im Unternehmen trifft andere Entscheidungen.
            Deshalb benötigt auch jede Rolle andere Informationen.
            Gute Unternehmenssteuerung bedeutet nicht,
            dass jeder alle Daten benötigt –
            sondern dass jeder exakt die Informationen bekommt,
            die für seine Entscheidungen relevant sind.
          </p>

        </div>

        {/* Mobile Accordion */}

        <div className="mt-10 lg:hidden">

          {cards.map((card, index) => {
            const open = openIndex === index;

            return (
              <div
                key={card.role}
                className="border-b border-[#D8DADD]"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-accent">
                      {card.role}
                    </p>

                    <h3 className="mt-2 text-xl font-light leading-tight text-surface-dark">
                      {card.title}
                    </h3>

                  </div>

                  <svg
                    className={`h-6 w-6 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>

                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open ? "max-h-64 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-base font-light leading-8 text-text-secondary">
                    {card.text}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* Desktop Karten */}

        <div className="mt-8 hidden gap-6 lg:grid lg:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.role}
              className="rounded-sm border border-[#D8DADD] bg-background p-10"
            >

              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                {card.role}
              </p>

              <h3 className="mt-6 text-[1.35rem] font-light leading-tight text-surface-dark">
                {card.title}
              </h3>

              <p className="mt-6 text-lg font-light leading-8 text-text-secondary">
                {card.text}
              </p>

            </div>
          ))}

        </div>

        {/* Kernaussage */}

        <div className="mt-10 rounded-sm bg-surface-dark px-6 py-8 lg:px-20 lg:py-10">

          <blockquote className="max-w-5xl text-base font-light leading-relaxed text-white lg:text-2xl">

            Genau deshalb bewege ich mich täglich zwischen Management,
            Fachbereichen und IT.

            <br />
            <br />

            Ich übersetze strategische Ziele in Prozesse,
            Prozesse in Informationsflüsse
            und Informationsflüsse in technische Lösungen.

            <br />
            <br />

            Das ist der Gedanke,
            auf dem CALANOR Advisory aufgebaut ist.

          </blockquote>

        </div>

      </div>
    </section>
  );
}