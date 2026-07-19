export default function PerspectiveSection() {
  return (
    <section className="bg-surface py-32">
      <div className="mx-auto max-w-6xl px-8">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-text-secondary">
            WAS ZEICHNET CALANOR AUS?
          </p>

          <h2 className="text-5xl font-light leading-tight text-surface-dark">
            Erfahrung schafft Vertrauen.
            <br />
            Perspektive schafft Lösungen.
          </h2>

        </div>

        {/* Content */}

        <div className="mt-24 grid grid-cols-[1.2fr_0.8fr] gap-24">

          {/* Left */}

          <div>

            <p className="text-3xl font-light leading-relaxed text-surface-dark">

              Gute Entscheidungen entstehen dort,
              wo <span className="text-accent-secondary">Strategie</span>,
              <span className="text-text-secondary"> Steuerung</span> und
              <span className="text-accent"> IT</span>{" "}
              dieselbe Sprache sprechen.

            </p>

            <div className="mt-12 space-y-8 text-xl leading-9 text-text-secondary">


              <p className="text-surface-dark">

                Wir haben in allen drei Bereichen bereits Verantwortung übernommen.

              </p>

            </div>

            <p className="mt-10 text-xl leading-9 text-text-secondary">

                Deshalb entwickeln wir Informationslogik,
                die fachlich überzeugt,
                organisatorisch funktioniert
                und technisch umgesetzt werden kann.

            </p>

          </div>

          {/* Right */}
        


          <div className="border-l border-border pl-12">


            
            <div className="mt-20">

              <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">
                VOLKSWAGEN
              </p>

              <div className="mt-5 space-y-2">

                <p className="text-lg text-accent-secondary">
                  Strategische Neuausrichtung
                </p>

                <p className="text-lg text-accent">
                  IT-Projektleitung
                </p>
                
            <div className="mt-12">

              <p className="text-sm uppercase tracking-[0.25em] text-text-secondary">
                AUDI
              </p>

              <div className="mt-5 space-y-2">

                <p className="text-lg text-text-secondary">
                  Projektcontrolling
                </p>

                <p className="text-lg text-accent-secondary">
                  Transformationsprojekt
                </p>

              </div>

            </div>


              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}