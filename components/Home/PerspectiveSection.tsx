export default function PerspectiveSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-40">  

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

            {/* Heading */}

            <div className="mx-auto max-w-4xl text-center">

                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-text-secondary sm:text-sm">
                    WARUM CALANOR?
                </p>

                <h2 className="text-3xl font-light leading-snug text-surface-dark sm:text-4xl lg:text-5xl">

                    Ein Beratungsansatz,

                    <br />

                    <span className="text-accent">
                        entstanden aus der Praxis.
                    </span>

                </h2>

            </div>

            {/* Content */}

            <div className="mt-4 grid gap-8 lg:mt-24 lg:gap-20 lg:grid-cols-[1.2fr_0.8fr]">

                {/* Left */}

                <div>

                    <p className="text-xl font-light leading-relaxed text-surface-dark sm:text-2xl">

                        Calanor entstand nicht am Reißbrett.

                    </p>

                    <div className="mt-4 space-y-6 text-[14px] leading-8 text-text-secondary lg:mt-10 lg:space-y-8 lg:text-lg lg:leading-9">

                        <p>

                            Der Beratungsansatz basiert auf mehr als acht Jahren
                            Erfahrung in strategischen Transformationsprojekten,
                            Entwicklungskostensteuerung und markenübergreifenden
                            IT-Projekten innerhalb der Automobilindustrie.

                        </p>

                        <p>

                            In dieser Zeit zeigte sich immer wieder dieselbe
                            Herausforderung:
                            Strategie, Controlling und IT arbeiteten häufig
                            nacheinander – obwohl sie dieselbe Sprache sprechen
                            müssten.

                        </p>

                        <p>

                            Aus dieser Erfahrung entstand eine Methodik,
                            die genau diese Welten miteinander verbindet
                            und Informationsflüsse konsequent
                            von der Entscheidung bis zur technischen Umsetzung denkt.
                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">

                    <p className="text-xs uppercase tracking-[0.3em] text-text-secondary sm:text-sm">
                        ERFAHRUNG
                    </p>

                    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-10 lg:block lg:space-y-10">

                        <div>

                            <p className="text-xl lg:text-4xl   font-light text-accent">
                                8+
                            </p>

                            <p className="mt-2 text-[14px] lg:text-lg text-surface-dark">
                                Jahre Erfahrung
                            </p>

                        </div>

                        <div>

                            <p className="text-[14px] lg:text-lg text-surface-dark">
                                Volkswagen
                            </p>

                            <p className="mt-2 text-[12px] lg:text-lg text-text-secondary">
                                Strategische Steuerungsmodelle
                                <br />
                                IT-Projektleitung
                            </p>

                        </div>

                        <div>

                            <p className="text-[14px] lg:text-lg text-surface-dark">
                                Audi
                            </p>

                            <p className="mt-2 text-[12px] lg:text-lg text-text-secondary">
                                Entwicklungskostencontrolling
                                <br />
                                Berichtswesen & Transformation
                            </p>

                        </div>

                        <div>

                            <p className="[14px] lg:text-lg text-surface-dark">
                                Schwerpunkte
                            </p>

                            <p className="mt-2 text-[12px] lg:text-lg text-text-secondary">
                                Strategie
                                <br />
                                Controlling
                                <br />
                                IT
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
  );
}