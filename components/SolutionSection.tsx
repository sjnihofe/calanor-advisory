export default function SolutionSection() {
  const steps = [
    {
      number: "01",
      title: "Entscheidungen verstehen",
      text: "Wir verstehen, welche Entscheidungen getroffen werden müssen und welche Informationen dafür wirklich relevant sind.",
    },
    {
      number: "02",
      title: "Informationen analysieren",
      text: "Wir identifizieren die benötigten Informationen und ihre Quellen innerhalb Ihrer Prozesse.",
    },
    {
      number: "03",
      title: "Steuerungslogik entwickeln",
      text: "Wir entwickeln eine Steuerungslogik und verbinden Daten, Prozesse und Verantwortlichkeiten.",
    },
    {
      number: "04",
      title: "Prototyp entwickeln",
    },
    {
      number: "05",
      title: "Umsetzungsroadmap",
      text: "Wir entwickeln eine Roadmap für die nachhaltige Verankerung im Unternehmen.",
    },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-2xl px-8 py-32">

        <div className="text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-secondary">
            Unser Ansatz
          </p>

          <h2 className="text-5xl font-light leading-tight text-surface-dark">
            In <span className="text-accent">fünf</span> Schritten
            <br />
            zu besseren Entscheidungen.
            <span className="text-accent-secondary"> Ohne Risiko.</span>
          </h2>
        </div>

        <div className="mt-24 grid grid-cols-5 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">

              <div className="mb-8 flex items-center">
                <span className="text-4xl font-light text-accent">
                  {step.number}
                </span>

                {step.number !== "05" && (
                  <div className="ml-6 h-px flex-1 bg-text-secondary/25" />
                )}
              </div>

              <h3 className="mb-4 min-h-[72px] text-2xl font-normal leading-tight text-surface-dark">
                {step.title}
              </h3>

              {step.number === "04" ? (
                <p className="font-light leading-relaxed text-text-secondary">
                  Mit einem Proof of Concept validieren wir den Nutzen{" "}
                  <span className="text-accent-secondary">
                    bevor Geld in IT-Tools investiert wird.
                  </span>
                </p>
              ) : (
                <p className="font-light leading-relaxed text-text-secondary">
                  {step.text}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}