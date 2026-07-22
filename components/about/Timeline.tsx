const timeline = [
  {
    company: "HSBC INKA",
    period: "Der Anfang",
    title: "Etablierte Prozesse hinterfragen.",
    text: "Bei HSBC INKA mussten händisch Verträge mit Rechnungen abgeglichen werden. Ich habe hinterfragt, ob es keinen effizienteren Weg gibt. Einige Telefonate mit unseren Partnerbanken und ein Excel-Tool später konnte ich diesen Prozess automatisieren. Mir wurde klar: Der größte Hebel für Prozesseffizienz liegt darin, Informationen intelligenter verfügbar zu machen.",
  },
  {
    company: "Audi",
    period: "Echter Impact",
    title: "Die meisten Daten lassen sich auf der richtigen Ebene venetzen.",
    text: "Bei Audi gab es bereits viele Daten. Dabei hat jedoch jeder Bereich die Daten in leicht unterschiedlicher Form verarbeitet. Ich habe die Beweggründe verstanden und mit kleinen Anpassungen dafür gesorgt, dass jeder weiterhin die benötigten Informationen erhält, die Daten aber miteinander vernetzt werden. Dies hat nicht nur Prozesse verschlankt, sondern auch neue Möglichkeiten für Berichtswesen eröffnet.",
  },
  {
    company: "Volkswagen",
    period: "Der Wendepunkt",
    title: "Nicht Software verbessert die Steuerung. Informationsflüsse tun es.",
    text: "Mit dem Wechsel zu Volkswagen verschob sich mein Fokus von einzelnen Reportings auf die Unternehmenssteuerung selbst. Ich entwickelte ein neues Steuerungsmodell, leitete dessen Umsetzung in einem konzernübergreifenden IT-Projekt. Durch die Harmonisierung von Daten und die Automatisierung von Informationsflüssen wurde die Entscheidungsgrundlage verbessert und gleichzeitig IT-Tools reduziert,.",
  },
  {
    company: "Heute",
    period: "CALANOR Advisory",
    title: "Aus Erfahrungen wurde eine Methode.",
    text: "Heute verbinde ich genau die drei Welten, die Unternehmen häufig getrennt betrachten: Strategie, Controlling und IT. Mein Ziel ist nicht, möglichst viele Dashboards oder neue Software zu entwickeln. Mein Ziel ist es, Informationsflüsse so zu gestalten, dass bessere Entscheidungen möglich werden. Adressatengerecht und automatisiert.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-6xl px-6 py-28">

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
            Mein Weg
          </p>

          <h2 className="mt-6 text-3xl font-light leading-tight text-surface-dark lg:text-5xl">
            Vier Stationen.
            <br />
            <span className="text-accent">Eine Denkweise.</span> 
          </h2>

          <p className="mt-8 text-lg font-light leading-9 text-text-secondary">
            Rückblickend war jede Station meiner Laufbahn weniger ein Karriereschritt
            als vielmehr eine neue Erkenntnis darüber, wie Unternehmenssteuerung
            wirklich funktioniert.
          </p>

        </div>

        <div className="mt-10 space-y-10">

          {timeline.map((item, index) => (
            <div
              key={item.company}
              className="grid gap-10 lg:grid-cols-[220px_1fr]"
            >

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-accent">
                  {item.period}
                </p>

                <h3 className="mt-3 text-2xl font-light text-surface-dark">
                  {item.company}
                </h3>

              </div>

              <div className="relative border-l border-[#D7D9DC] pl-10">

                <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent"></div>

                <h4 className="text-2xl font-light leading-tight text-surface-dark">
                  {item.title}
                </h4>

                <p className="mt-6 text-lg font-light leading-9 text-text-secondary">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}