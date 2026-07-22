export default function ReasonCalanor() {
  return (
    <section className="bg-surface-dark">

      <div className="mx-auto max-w-7xl px-6 py-28 lg:py-36">

        {/* Überschrift */}

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Warum CALANOR Advisory?
          </p>

          <h2 className="mt-6 text-3xl font-light leading-tight text-white lg:text-5xl">
            Weil Unternehmenssteuerung dort scheitert,
            wo Strategie, Controlling und IT getrennt gedacht werden.
          </h2>

        </div>

        {/* Einleitung */}

        <div className="mt-16 max-w-4xl space-y-8 text-lg font-light leading-9 text-[#D4D7DB]">

          <p>
            In vielen Unternehmen arbeiten diese drei Disziplinen hervorragend.
            Allerdings häufig nebeneinander statt miteinander.
          </p>

          <p>
            Strategien entstehen.
            Reportings werden aufgebaut.
            Software wird entwickelt.
          </p>

          <p>
            Trotzdem fehlen am Ende genau die Informationen,
            die für gute Entscheidungen notwendig wären.
          </p>

          <p className="text-white">
            Nicht weil einzelne Bereiche ihre Arbeit schlecht machen –
            sondern weil niemand die gesamte Kette betrachtet.
          </p>

        </div>

        {/* Vergleich */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {/* Strategie */}

          <div className="rounded-sm border border-[#4A525A] bg-[#252B31] p-10">

            <h3 className="text-2xl font-light text-white">
              Strategie
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#C8CDD2]">
              Entwickelt Ziele, Steuerungsmodelle und Handlungsempfehlungen.
            </p>

            <div className="mt-10 border-t border-[#495159] pt-8">

              <p className="text-base leading-7 text-[#9FA7AF]">
                Häufig endet die Arbeit dort,
                wo die eigentliche Umsetzung beginnt.
              </p>

            </div>

          </div>

          {/* Controlling */}

          <div className="rounded-sm border border-[#4A525A] bg-[#252B31] p-10">

            <h3 className="text-2xl font-light text-white">
              Controlling
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#C8CDD2]">
              Liefert Transparenz und unterstützt Entscheidungen mit Zahlen.
            </p>

            <div className="mt-10 border-t border-[#495159] pt-8">

              <p className="text-base leading-7 text-[#9FA7AF]">
                Muss häufig mit den vorhandenen Daten arbeiten,
                auch wenn diese den eigentlichen Prozess nicht optimal abbilden.
              </p>

            </div>

          </div>

          {/* IT */}

          <div className="rounded-sm border border-accent bg-[#252B31] p-10">

            <h3 className="text-2xl font-light text-white">
              CALANOR Advisory
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#E3E6E8]">

              Beginnt nicht mit Software,
              sondern mit den Entscheidungen,
              die ein Unternehmen treffen muss.

            </p>

            <div className="mt-10 border-t border-[#495159] pt-8">

              <p className="text-base leading-7 text-white">

                Daraus entstehen Informationsflüsse,
                Prozesse und erst anschließend
                die passende technische Lösung.

              </p>

            </div>

          </div>

        </div>

        {/* Kernaussage */}

        <div className="mt-28 grid gap-16 lg:grid-cols-[1fr_1.2fr]">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-accent">
              Mein Anspruch
            </p>

          </div>

          <div>

            <blockquote className="text-3xl font-light leading-relaxed text-white">

              Ich entwickle keine Software,
              um Prozesse zu digitalisieren.

              <br />
              <br />

              Ich entwickle Prozesse,
              damit Unternehmen bessere Entscheidungen treffen können.

            </blockquote>

            <p className="mt-10 text-lg font-light leading-9 text-[#D4D7DB]">

              Software ist dabei kein Selbstzweck.
              Sie ist das Ergebnis einer klaren Struktur aus
              Entscheidungen, Informationen und Prozessen.

              Genau deshalb beginnt jedes Projekt bei CALANOR
              an einem anderen Punkt als klassische Beratungsprojekte.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}