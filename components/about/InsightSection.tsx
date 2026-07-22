export default function InsightSection() {
  return (
    <section className="bg-background">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-36">

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">

          {/* Linke Seite */}

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary lg:text-sm">
              Die wichtigste Erkenntnis
            </p>

            <h2 className="mt-4 text-2xl font-light leading-tight text-surface-dark lg:mt-6 lg:text-5xl">
              <span className="text-accent">Software</span> ohne{" "}
              <span className="text-accent-secondary">
                Prozessverständnis
              </span>{" "}
              löst keine Probleme.
            </h2>

          </div>

          {/* Rechte Seite */}

          <div className="space-y-4 text-sm font-light leading-7 text-text-secondary lg:space-y-6 lg:text-lg lg:leading-9">

            <p>
              Ich habe immer wieder erlebt, dass Unternehmen enorme Summen in
              Software investieren – und sich die Steuerung trotzdem nicht
              verbessert.
            </p>

            <p>
              Nicht weil die Software schlecht wäre.
            </p>

            <p className="text-surface-dark">
              Sondern weil nie geklärt wurde, welche Entscheidungen überhaupt
              unterstützt werden sollen.
            </p>

            <p>
              Genau deshalb beginne ich jedes Projekt genau dort: bei den
              Entscheidungen. Durch meine Erfahrung verstehe ich, welche
              Informationen für Entscheidungen nötig sind und kann
              Informationsflüsse, Prozesse und IT-Tools danach modellieren.
            </p>

          </div>

        </div>

        {/* Zitat */}

        <div className="mt-12 border-l-4 border-accent pl-4 lg:mt-28 lg:pl-8">

          <blockquote className="max-w-4xl text-lg font-light italic leading-relaxed text-surface-dark lg:text-3xl">

            „Die meisten Unternehmen beginnen mit Software
            und hoffen auf bessere Entscheidungen.

            <br />
            <br />

            Ich beginne mit den{" "}
            <span className="text-accent-secondary">
              Entscheidungen
            </span>{" "}
            – dann ergeben sich Prozesse, Daten und Software fast von selbst.“

          </blockquote>

        </div>

      </div>

    </section>
  );
}