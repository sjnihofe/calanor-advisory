export default function WhyCalanor() {
  return (
    <section className="bg-background pt-32 pb-54">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-text-secondary">
            WARUM CALANOR?
          </p>

          <h2 className="text-5xl font-light leading-tight text-surface-dark">
                   <span className="text-accent-secondary">Strategien</span> {" "}scheitern nicht an Ideen, sondern an der{" "}
            <span className="text-accent">Umsetzung</span>
            {" "}in der Praxis.
          </h2>

        </div>

        {/* Graphic */}

        <div className="mt-48 grid grid-cols-[240px_1fr_240px] items-center">

          {/* -------------------------------- */}
          {/* Strategie                        */}
          {/* -------------------------------- */}

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

          {/* -------------------------------- */}
          {/* Mittelpunkt                      */}
          {/* -------------------------------- */}

          <div className="relative flex h-[300px] items-center justify-center">

            {/* Logo */}

            <img
              src="/Logo.svg"
              alt=""
             className="absolute left-[40%] absolute top-[55.5%] w-[700px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-60 select-none pointer-events-none"
            />

            {/* linke Abdeckung */}

            <div
            className="
                absolute
                left-[-70px]
                top-1/2
                -translate-y-1/2
                w-[140px]
                h-[300px]
                bg-background   
                z-[5]
            "
            />

            {/* Box */}

            <div className="relative z-10 -translate-x-3 w-[460px] border border-border bg-background/98 px-16 py-6 text-center">

            <div className="text-center">

            <h3 className="text-3xl font-light tracking-[0.20em] text-surface-dark">
                CALANOR
            </h3>

            <p className="mt-1 text-lg font-extralight tracking-[0.10em] text-accent">
                ADVISORY
            </p>

            </div>

            <div className="mx-auto my-8 h-px w-20 bg-surface-dark" />

              <p className="text-3xl font-light leading-relaxed text-surface-dark">
                Wir übersetzen <span className="text-accent-secondary">Strategie</span> in <span className="text-text-secondary">Informationslogik</span>.
                <br />
                <br />
                <span className="text-accent">Proof of Concept</span>.
              </p>

            </div>

          </div>

          {/* -------------------------------- */}
          {/* Umsetzung                        */}
          {/* -------------------------------- */}

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

      </div>
    </section>
  );
}