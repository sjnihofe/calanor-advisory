import {
  Search,
  BarChart3,
  Database,
  FileText,
} from "lucide-react";


export default function ProblemSection() {
  return (
    <section className="mt-20 bg-surface lg:mt-40"> 
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:-ml-20 lg:grid-cols-[1.7fr_1fr]">

          {/* Linke Seite */}
        <div className="py-0 lg:py-10">

        {/* ---------- Mobile ---------- */}

        <div className="lg:hidden text-center">

            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-secondary">
            Das Problem
            </p>

            <h2 className="mx-auto max-w-[720px] text-2xl font-light leading-tight text-surface-dark">
            Viele Unternehmen haben nicht {""}<span className="text-accent">zu wenig Daten. </span>
            Sie kommen nur nicht <span className="text-accent-secondary">adressatengerecht</span> an.
            </h2>

           <div className="mx-auto mt-8 max-w-xs">

            <div className="space-y-4 text-left">

                <div className="flex items-center gap-3">
                <Search className="h-4 w-4 shrink-0 text-accent-secondary" />
                <span className="text-base font-light text-surface-dark">
                    Fehlende Transparenz
                </span>
                </div>

                <div className="flex items-center gap-3">
                <BarChart3 className="h-4 w-4 shrink-0 text-accent-secondary" />
                <span className="text-base font-light text-surface-dark">
                    Unterschiedliche Kennzahlen
                </span>
                </div>

                <div className="flex items-center gap-3">
                <Database className="h-4 w-4 shrink-0 text-accent-secondary" />
                <span className="text-base font-light text-surface-dark">
                    Dateninseln
                </span>
                </div>

                <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 shrink-0 text-accent-secondary" />
                <span className="text-base font-light text-surface-dark">
                    Manuelle Reports
                </span>
                </div>

            </div>

            </div>

        </div>

        {/* ---------- Desktop ---------- */}

        <div className="hidden lg:block">

            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-secondary">
            Das Problem
            </p>

            <h2 className="max-w-[720px] text-5xl font-light leading-tight text-surface-dark">
            Viele Unternehmen haben nicht <span className="text-accent">zu wenig Daten.</span>
            Sie kommen nur nicht <span className="text-accent-secondary">adressatengerecht</span> an.
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-8">

            <div>
            <div className="mb-3 flex items-center gap-3">
                <Search className="h-5 w-5 shrink-0 text-accent-secondary" />
                <h3 className="text-xl font-normal text-surface-dark">
                Fehlende Transparenz
                </h3>
            </div>

            <p className="leading-relaxed text-text-secondary">
                Entscheider verbringen mehr Zeit mit der Suche nach Informationen als mit Entscheidungen.
            </p>
            </div>

            <div>
            <div className="mb-3 flex items-center gap-3">
                <BarChart3 className="h-5 w-5 shrink-0 text-accent-secondary" />
                <h3 className="text-xl font-normal text-surface-dark">
                Unterschiedliche Kennzahlen
                </h3>
            </div>

            <p className="leading-relaxed text-text-secondary">
                Bereiche arbeiten mit unterschiedlichen Definitionen und treffen unterschiedliche Aussagen.
            </p>
            </div>

            <div>
            <div className="mb-3 flex items-center gap-3">
                <Database className="h-5 w-5 shrink-0 text-accent-secondary" />
                <h3 className="text-xl font-normal text-surface-dark">
                Dateninseln
                </h3>
            </div>

            <p className="leading-relaxed text-text-secondary">
                Informationen liegen in unterschiedlichen Systemen und stehen nicht im richtigen Zusammenhang.
            </p>
            </div>

            <div>
            <div className="mb-3 flex items-center gap-3">
                <FileText className="h-5 w-5 shrink-0 text-accent-secondary" />
                <h3 className="text-xl font-normal text-surface-dark">
                Manuelle Reports
                </h3>
            </div>

            <p className="leading-relaxed text-text-secondary">
                Die Erstellung von Berichten erfolgt händisch mit Excel oder PowerPoint und kostet Zeit.
            </p>
            </div>

            </div>

        </div>

        </div>

          {/* Rechte Seite */}
          <div className="bg-surface-dark p-8 text-center text-white lg:p-12 lg:text-left">

            <p className="mb-6 text-sm uppercase tracking-[0.2em] opacity-80">
              Unsere Versprechen
            </p>

            <h3 className="text-[20px] font-light leading-tight lg:text-4xl">
              Die richtigen Informationen,
              <br className="hidden lg:block" />
              <span className="text-accent-secondary"> adressatengerecht </span>
              und
              <span className="text-accent-secondary"> automatisiert.</span>
            </h3>

            <ul className="mt-5 space-y-5 text-[14px] font-light lg:mt-12 lg:text-lg">
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