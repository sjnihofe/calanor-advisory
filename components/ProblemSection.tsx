    export default function ProblemSection() {
    return (
        <section className="mt-40 bg-surface">
        <div className="mx-auto max-w-screen-2xl px-8 py-24">
            <div className="-ml-20 grid grid-cols-[1.7fr_1fr] gap-12">

            {/* Linke Seite */}
            <div className="py-10">

                <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-secondary">
                Das Problem
                </p>

                <h2 className="max-w-[720px] text-5xl font-light leading-tight text-surface-dark">
                Viele Unternehmen haben nicht <span className="text-accent"> zu wenig Daten. </span>
                Sie kommen nur nicht <span className="text-accent-secondary">adressatengerecht</span> an.
                </h2>

                <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-8">

                <div>
                    <h3 className="mb-2 text-xl font-normal text-surface-dark">
                    Fehlende Transparenz
                    </h3>
                    <p className="leading-relaxed text-text-secondary">
                    Entscheider verbringen mehr Zeit mit der Suche nach
                    Informationen als mit Entscheidungen.

                    </p>
                </div>

                <div>
                    <h3 className="mb-2 text-xl font-normal text-surface-dark">
                    Unterschiedliche Kennzahlen
                    </h3>
                    <p className="leading-relaxed text-text-secondary">
                    Bereiche arbeiten mit unterschiedlichen Definitionen
                    und treffen unterschiedliche Aussagen.
                    </p>
                </div>

                <div>
                    <h3 className="mb-2 text-xl font-normal text-surface-dark">
                    Dateninseln
                    </h3>
                    <p className="leading-relaxed text-text-secondary">
                    Informationen liegen in unterschiedlichen Systemen und
                    stehen nicht im richtigen Zusammenhang.
                    </p>
                </div>

                <div>
                    <h3 className="mb-2 text-xl font-normal text-surface-dark">
                    Manuelle Reports
                    </h3>
                    <p className="leading-relaxed text-text-secondary">
                    Die Erstellung von Berichten erfolgt händisch mit Excel oder Power Point und kostet Zeit.
                    </p>
                </div>

                </div>
            </div>

            {/* Rechte Seite */}
            <div className="bg-surface-dark p-12 text-white">

                <p className="mb-6 text-sm uppercase tracking-[0.2em] opacity-80">
                Unsere Versprechen
                </p>

                <h3 className="text-4xl font-light leading-tight">
                Die richtigen Informationen,
                <br />
                <span className="text-accent-secondary"> adressatengerecht </span> und <span className="text-accent-secondary"> automatisiert.</span>
                </h3>

                <ul className="mt-12 space-y-6 text-lg font-light">
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