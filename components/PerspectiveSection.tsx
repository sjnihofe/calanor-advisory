export default function PerspectiveSection() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-text-secondary">
            WAS ZEICHNET CALANOR AUS?
          </p>

          <h2 className="mt-8 text-[20px] font-light leading-tight text-surface-dark sm:text-4xl md:text-5xl">
            Über <span className="text-accent-secondary">8 Jahre</span> praktische Erfahrung
            <br className="hidden md:block" />
            {" "}in der <span className="text-accent">Projektsteuerung</span> und{" "}
            <span className="text-accent">
              strategischen Transformationsprojekten.
            </span>
          </h2>

        </div>

        {/* Content */}

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-[1.2fr_0.8fr] md:gap-24">

          {/* Left */}

          <div className="text-center md:text-left">

            <p className="text-[16px] font-light leading-relaxed text-surface-dark md:text-3xl">

              Gute Entscheidungen entstehen dort,
              wo <span className="text-accent-secondary">Strategie</span>,
              <span className="text-text-secondary"> Steuerung</span> und
              <span className="text-accent"> IT</span>{" "}
              dieselbe Sprache sprechen.

            </p>

            <div className="mt-6 space-y-6 text-sm leading-8 text-text-secondary md:mt-12 md:space-y-8 md:text-xl md:leading-9">

              <p className="text-surface-dark">
                Wir kennen die Perspektiven vom Vorstand bis zur operativen Umsetzung.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="mt-0 text-center border-t border-border pt-5 md:border-l md:border-t-0 md:pl-12 md:pt-0">

            <div>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-text-secondary">
                VOLKSWAGEN
              </p>

              <div className="mt-5 space-y-2">

                <p className="text-base text-accent-secondary md:text-lg">
                  Strategische Neuausrichtung
                </p>

                <p className="text-base text-accent md:text-lg">
                  IT-Projektleitung
                </p>

              </div>

            </div>

            <div className="mt-6">

              <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">
                AUDI
              </p>

              <div className="mt-5 space-y-2">

                <p className="text-base text-text-secondary md:text-lg">
                  Projektcontrolling
                </p>

                <p className="text-base text-accent-secondary md:text-lg">
                  Transformationsprojekt
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}