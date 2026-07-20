export default function WhyCalanor() {
  return (
    <section className="bg-surface pt-32 pb-16 md:pb-54">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

       <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-text-secondary">
          WARUM CALANOR?
        </p>

        {/* Desktop */}

        <h2 className="hidden text-5xl font-light leading-tight text-surface-dark md:block">
          <span className="text-accent-secondary">Strategien</span>{" "}
          scheitern nicht an Ideen, sondern an der{" "}
          <span className="text-accent">Umsetzung</span>{" "}
          in der Praxis.
        </h2>

        {/* Mobile */}

        <h2 className="text-2xl font-light leading-tight text-surface-dark md:hidden">
          <span className="text-accent-secondary">Strategien</span>{" "}
          scheitern nicht an Ideen,
          sondern an der{" "}
          <span className="text-accent">Umsetzung</span>
          in der Praxis.
        </h2>

      </div>
        {/* Graphic */}

        <>
          {/* ------------------------------- */}
          {/* Desktop                         */}
          {/* ------------------------------- */}

          <div className="mt-48 hidden md:grid grid-cols-[240px_1fr_240px] items-center">

            {/* Strategie */}

            <div>

              <p className="mb-10 text-sm uppercase tracking-[0.28em] text-accent-secondary">
                STRATEGIE
              </p>

              <div className="space-y-8">

                <p className="text-3xl font-light text-surface-dark">
                  Vision
                </p>

                <p className="text-3xl font-light text-surface-dark">
                  Ziele
                </p>

                <p className="text-3xl font-light text-surface-dark">
                  Organisation
                </p>

              </div>

            </div>

            {/* Mittelpunkt */}

            <div className="relative flex h-[300px] items-center justify-center">

              <img
                src="/Logo.svg"
                alt=""
                className="pointer-events-none absolute left-[40%] top-[55.5%] w-[700px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-60"
              />

              <div
                className="
                  absolute
                  left-[-70px]
                  top-1/2
                  z-[5]
                  h-[300px]
                  w-[140px]
                  -translate-y-1/2
                  bg-surface
                "
              />

              <div className="relative z-10 w-[460px] -translate-x-3 border border-border bg-surface/98 px-16 py-6 text-center">

                <h3 className="text-3xl font-light tracking-[0.20em] text-surface-dark">
                  CALANOR
                </h3>

                <p className="mt-1 text-lg font-extralight tracking-[0.10em] text-accent">
                  ADVISORY
                </p>

                <div className="mx-auto my-8 h-px w-20 bg-surface-dark" />

                <p className="text-3xl font-light leading-relaxed text-surface-dark">
                  Wir übersetzen{" "}
                  <span className="text-accent-secondary">
                    Strategie
                  </span>{" "}
                  in{" "}
                  <span className="text-text-secondary">
                    Informationslogik
                  </span>.
                  <br />
                  <br />
                  <span className="text-accent">
                    Proof of Concept.
                  </span>
                </p>

              </div>

            </div>

            {/* Umsetzung */}

            <div className="text-right">

              <p className="mb-10 text-sm uppercase tracking-[0.28em] text-accent">
                UMSETZUNG &amp; IT
              </p>

              <div className="space-y-8">

                <p className="text-3xl font-light text-surface-dark">
                  Prozesse
                </p>

                <p className="text-3xl font-light text-surface-dark">
                  Software
                </p>

                <p className="text-3xl font-light text-surface-dark">
                  Dashboards
                </p>

              </div>

            </div>

          </div>

          {/* ------------------------------- */}
          {/* Mobile                          */}
          {/* ------------------------------- */}

          <div className="mt-6 md:hidden">

            {/* Schaubild */}

            <div className="mx-auto flex w-full max-w-sm items-center justify-center">

              {/* Strategie */}

              <div className="mr-3 flex h-[220px] items-center justify-center">

                <p
                  className="
                    whitespace-nowrap
                    text-sm
                    font-light
                    uppercase
                    tracking-[0.35em]
                    text-accent-secondary
                    [writing-mode:vertical-rl]
                    rotate-180
                  "
                >
                  Strategie
                </p>

              </div>

              {/* Logo */}

              <img
                src="/Logo.svg"
                alt=""
                className="
                  w-[240px]
                  select-none
                  pointer-events-none
                "
              />

              {/* Umsetzung */}

              <div className="ml-3 flex h-[220px] items-center justify-center">

                <p
                  className="
                    whitespace-nowrap
                    text-sm
                    font-light
                    uppercase
                    tracking-[0.35em]
                    text-accent
                    [writing-mode:vertical-rl]
                    rotate-180
                  "
                >
                  Umsetzung &amp; IT
                </p>

              </div>

            </div>

            {/* Box */}

            <div className="mt-2 text-center">

              <div className="mx-auto my-6 h-px w-16 bg-surface-dark" />

              <p className="text-xl font-light leading-relaxed text-surface-dark">
                Wir übersetzen{" "}
                <span className="text-accent-secondary">
                  Strategie
                </span>{" "}
                in{" "}
                <span className="text-text-secondary">
                  Informationslogik
                </span>.
                
                <br />
                <span className="text-accent">
                  Proof of Concept.
                </span>
              </p>

            </div>

          </div>
        </>

      </div>
    </section>
  );
}