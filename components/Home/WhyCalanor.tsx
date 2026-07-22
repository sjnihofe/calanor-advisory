export default function WhyCalanor() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-text-secondary sm:text-sm">
            WARUM CALANOR?
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-light leading-snug text-surface-dark sm:text-4xl lg:text-5xl">

            Effiziente Entscheidungen scheitern nicht an{" "}

            <span className="text-accent-secondary">
              Strategien
            </span>

            ,{" "}

            <span className="text-text-secondary">
              Controlling
            </span>

            {" "}oder{" "}

            <span className="text-accent">
              IT-Tools
            </span>

            .

          </h2>

        </div>

        {/* Intro */}

        <div className="mx-auto mt-8 max-w-2xl text-center lg:mt-10 lg:max-w-4xl">

          <p className="text-base font-light leading-8 text-text-secondary sm:text-lg lg:text-xl lg:leading-9">

            Strategien entstehen in Workshops. Software entsteht in IT-Projekten.

            <br className="hidden sm:block" />

            Dashboards entstehen im Controlling – doch nur selten greifen diese drei Welten wirklich ineinander.

          </p>

        </div>

        {/* Cards */}

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:mt-14 lg:grid-cols-3">

          {/* Strategie */}

          <div className="border border-text-secondary/20 border-l-4 border-l-accent-secondary bg-background p-5 sm:p-6 lg:border-l-8">

            <h3 className="text-lg font-light sm:text-xl">

              <span className="uppercase tracking-[0.15em] text-accent-secondary">
                Strategie
              </span>

              <span className="mx-2 text-text-secondary">|</span>

              <span className="text-surface-dark">
                Entscheidungen
              </span>

            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">

              Welche Entscheidungen müssen getroffen werden, damit sich das Unternehmen erfolgreich entwickelt?

            </p>

          </div>

          {/* Controlling */}

          <div className="border border-text-secondary/20 border-l-4 border-l-text-secondary bg-background p-5 sm:p-6 lg:border-l-8">

            <h3 className="text-lg font-light sm:text-xl">

              <span className="uppercase tracking-[0.15em] text-text-secondary">
                Controlling
              </span>

              <span className="mx-2 text-text-secondary">|</span>

              <span className="text-surface-dark">
                Informationen
              </span>

            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">

              Welche Informationen werden benötigt, um fundierte Entscheidungen treffen zu können?

            </p>

          </div>

          {/* IT */}

          <div className="border border-text-secondary/20 border-l-4 border-l-accent bg-background p-5 sm:p-6 lg:border-l-8">

            <h3 className="text-lg font-light sm:text-xl">

              <span className="uppercase tracking-[0.15em] text-accent">
                IT
              </span>

              <span className="mx-2 text-text-secondary">|</span>

              <span className="text-surface-dark">
                Umsetzung
              </span>

            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">

              Wie entstehen diese Informationen automatisiert durch Prozesse, Datenmodelle und IT?

            </p>

          </div>

        </div>
        {/* Funnel */}

        <div className="relative mx-auto mt-10 hidden h-40 max-w-6xl lg:block">

          {/* Gold */}

          <div
            className="absolute left-[16.5%] top-0 h-32 w-[2px] origin-top bg-accent-secondary"
            style={{ transform: "rotate(-28deg)" }}
          />

          {/* Grau */}

          <div className="absolute left-1/2 top-0 h-32 w-[2px] -translate-x-1/2 bg-text-secondary" />

          {/* Petrol */}

          <div
            className="absolute right-[16.5%] top-0 h-32 w-[2px] origin-top bg-accent"
            style={{ transform: "rotate(28deg)" }}
          />

        </div>

        {/* Calanor */}

        <div className="mx-auto mt-10 max-w-4xl border border-border bg-white px-6 py-10 text-center sm:px-8 sm:py-12 lg:-mt-2 lg:px-20 lg:py-14">

          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary sm:text-sm">
            CALANOR ADVISORY
          </p>

          <h3 className="mt-5 text-xl font-light leading-snug text-surface-dark sm:text-2xl lg:text-3xl">

            Wir verbinden{" "}

            <span className="text-accent-secondary">
              Strategie
            </span>

            ,{" "}

            <span className="text-text-secondary">
              Controlling
            </span>

            {" "}und{" "}

            <span className="text-accent">
              IT
            </span>

            .

          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-secondary lg:text-lg">

            Durch unsere praktische Erfahrung in allen drei Bereichen wissen
            wir, worauf es ankommt. Anders als klassische Strategieberater
            hören wir nicht mit Handlungsempfehlungen auf und anders als
            IT-Berater fangen wir nicht mit der Technik an.

          </p>

          <p className="mx-auto mt-8 max-w-2xl text-xl font-light leading-8 text-surface-dark sm:text-2xl lg:text-3xl">

            Wir beginnen mit Ihren Entscheidungen.

            <br />

            Und wir hören erst mit einem funktionierenden Proof of Concept auf.

          </p>

        </div>

      </div>
    </section>
  );
}