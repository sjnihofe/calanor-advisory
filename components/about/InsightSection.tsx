export default function InsightSection() {
  return (
    <section className="bg-background">

      <div className="mx-auto max-w-7xl px-6 py-28 lg:py-36">

        <div className="grid gap-20 lg:grid-cols-[1fr_1.2fr]">

          {/* Linke Seite */}

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
              Die wichtigste Erkenntnis
            </p>

            <h2 className="mt-6 text-3xl font-light leading-tight text-surface-dark lg:text-5xl">
              <span className="text-accent"> Software </span> ohne 
              <span className="text-accent-secondary"> Prozessverständnis </span> 
              löst keine Probleme.
              
              
            </h2>

          </div>

          {/* Rechte Seite */}

          <div className="space-y-4 text-lg font-light leading-9 text-text-secondary">

            <p>
              Ich habe immer wieder erlebt,
              dass Unternehmen enorme Summen in Software investieren –
              und sich die Steuerung trotzdem nicht verbessert.
            </p>

            <p>
              Nicht weil die Software schlecht wäre.
            </p>

            <p className="text-surface-dark">
              Sondern weil nie geklärt wurde,
              welche Entscheidungen überhaupt unterstützt werden sollen.
            </p>

            <p>
              Genau deshalb beginne ich jedes Projekt genau dort. Bei den Entscheidungen.
              Durch meine Erfahrung verstehe ich, welche Informationen für Entscheidungen nötig sind
              und kann Informationsflüsse, Prozesse und IT-Tools danach modellieren.
            </p>

          </div>

        </div>

        {/* Zitat */}

        <div className="mt-28 border-l-4 border-accent pl-8">

          <blockquote className="max-w-4xl text-3xl font-light italic leading-relaxed text-surface-dark">

            "Die meisten Unternehmen beginnen mit Software
            und hoffen auf bessere Entscheidungen.

            <br />
            <br />

            Ich beginne mit den {""} <span className="text-accent-secondary"> Entscheidungen </span>{""} –
            dann ergeben sich Prozesse, Daten und Software fast von selbst."

          </blockquote>

        </div>

      </div>

    </section>
  );
}