export default function ProblemSection() {
  return (
    <section className="mt-20 bg-surface md:mt-40">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:-ml-20 md:grid-cols-[1.7fr_1fr]">

          {/* Linke Seite */}
          <div className="py-0 text-center md:py-10 md:text-left">

            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-secondary">
              Das Problem
            </p>

            <h2 className="mx-auto max-w-[720px] text-3xl font-light leading-tight text-surface-dark sm:text-4xl md:mx-0 md:text-5xl">
              Viele Unternehmen haben nicht <span className="text-accent">zu wenig Daten.</span>
              Sie kommen nur nicht <span className="text-accent-secondary">adressatengerecht</span> an.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8">

              <div>
                <h3 className="mb-2 text-lg font-normal text-surface-dark md:text-xl">
                  Fehlende Transparenz
                </h3>
                <p className="text-sm leading-7 text-text-secondary md:text-base md:leading-relaxed">
                  Entscheider verbringen mehr Zeit mit der Suche nach
                  Informationen als mit Entscheidungen.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-normal text-surface-dark md:text-xl">
                  Unterschiedliche Kennzahlen
                </h3>
                <p className="text-sm leading-7 text-text-secondary md:text-base md:leading-relaxed">
                  Bereiche arbeiten mit unterschiedlichen Definitionen
                  und treffen unterschiedliche Aussagen.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-normal text-surface-dark md:text-xl">
                  Dateninseln
                </h3>
                <p className="text-sm leading-7 text-text-secondary md:text-base md:leading-relaxed">
                  Informationen liegen in unterschiedlichen Systemen und
                  stehen nicht im richtigen Zusammenhang.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-normal text-surface-dark md:text-xl">
                  Manuelle Reports
                </h3>
                <p className="text-sm leading-7 text-text-secondary md:text-base md:leading-relaxed">
                  Die Erstellung von Berichten erfolgt händisch mit Excel oder PowerPoint und kostet Zeit.
                </p>
              </div>

            </div>
          </div>

          {/* Rechte Seite */}
          <div className="bg-surface-dark p-8 text-center text-white md:p-12 md:text-left">

            <p className="mb-6 text-sm uppercase tracking-[0.2em] opacity-80">
              Unsere Versprechen
            </p>

            <h3 className="text-3xl font-light leading-tight md:text-4xl">
              Die richtigen Informationen,
              <br className="hidden md:block" />
              <span className="text-accent-secondary"> adressatengerecht </span>
              und
              <span className="text-accent-secondary"> automatisiert.</span>
            </h3>

            <ul className="mt-10 space-y-5 text-base font-light md:mt-12 md:text-lg">
              <li>✓ Bessere Entscheidungen</li>
              <li>✓ Klarheit über das Wesentliche</li>
              <li>✓ Transparente Informationen</li>
              <li>✓ Weniger manueller Aufwand</li>
              <li>✓ Nachhaltig im Unternehmen verankert</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}