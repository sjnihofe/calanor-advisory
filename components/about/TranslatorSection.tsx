export default function TranslatorSection() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-7xl px-6 py-28 lg:py-36">

        {/* Einleitung */}

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
            Was meine Arbeit auszeichnet
          </p>

          <h2 className="mt-6 text-3xl font-light leading-tight text-surface-dark lg:text-5xl">
            Ich entwickle keine Lösungen
            für Daten.
          </h2>

          <h2 className="mt-2 text-3xl font-light leading-tight text-accent lg:text-5xl">
            Ich entwickle Lösungen für Menschen.
          </h2>

          <p className="mt-10 max-w-4xl text-lg font-light leading-9 text-text-secondary">
            Jede Rolle im Unternehmen trifft andere Entscheidungen.
            Deshalb benötigt auch jede Rolle andere Informationen.
            Gute Unternehmenssteuerung bedeutet nicht,
            dass jeder alle Daten benötigt –
            sondern dass jeder exakt die Informationen bekommt,
            die für seine Entscheidungen relevant sind.
          </p>

        </div>

        {/* Karten */}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Management */}

          <div className="rounded-sm border border-[#D8DADD] bg-background p-10">

            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              Geschäftsführung
            </p>

            <h3 className="mt-6 text-[1.35rem] font-light leading-tight text-surface-dark">
              Orientierung statt Details.
            </h3>

            <p className="mt-6 text-lg font-light leading-8 text-text-secondary">
              Strategische Entscheidungen entstehen nicht durch tausende
              Datensätze.
              Sie entstehen durch wenige,
              verständliche Informationen,
              die Zusammenhänge sichtbar machen.
            </p>

          </div>

          {/* Fachbereiche */}

          <div className="rounded-sm border border-[#D8DADD] bg-background p-10">

            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              Fachbereiche
            </p>

            <h3 className="mt-6 text-[1.35rem] font-light leading-tight text-surface-dark">
              Vernetzung statt Insellösungen.
            </h3>

            <p className="mt-6 text-lg font-light leading-8 text-text-secondary">
              Entwicklung,
              Controlling,
              Produktion oder Vertrieb
              benötigen unterschiedliche Perspektiven
              auf dieselben Informationen.
              Erst wenn diese zusammenpassen,
              entstehen funktionierende Prozesse.
            </p>

          </div>

          {/* IT */}

          <div className="rounded-sm border border-[#D8DADD] bg-background p-10">

            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              IT
            </p>

            <h3 className="mt-6 text-[1.35rem] font-light leading-tight text-surface-dark">
              Klarheit statt Annahmen.
            </h3>

            <p className="mt-6 text-lg font-light leading-8 text-text-secondary">
              Gute Software beginnt nicht mit Code.
              Sie beginnt mit klar beschriebenen Prozessen,
              definierten Informationsflüssen
              und eindeutigen Anforderungen.
            </p>

          </div>

        </div>

        {/* Kernaussage */}

        <div className="mt-10 rounded-sm bg-surface-dark px-10 py-6 lg:px-20">

          <blockquote className="max-w-5xl text-2xl font-light text-white">

            Genau deshalb bewege ich mich täglich zwischen Management,
            Fachbereichen und IT. 
            Ich übersetze strategische Ziele in Prozesse,
            Prozesse in Informationsflüsse
            und Informationsflüsse in technische Lösungen.

            Das ist der Gedanke,
            auf dem CALANOR Advisory aufgebaut ist.

          </blockquote>

        </div>

      </div>

    </section>
  );
}