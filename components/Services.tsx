import Image from "next/image";

const services = [
  {
    color: "gold",
    duration: "1–2 Wochen",
    title: "Entscheidungsanalyse",
    description:
      "Wir analysieren, welche Entscheidungen getroffen werden müssen und welche Informationen dafür tatsächlich benötigt werden.",
    deliverables: [
      "Entscheidungsanalyse",
      "Informationsbedarf",
      "Priorisierung",
    ],
    line: "/Goldline.svg",
    border: "border-l-accent-secondary",
    titleColor: "text-accent-secondary",
    lineTop: "top-[210px]",
    numberColor: "text-accent-secondary",
  },
  {
    color: "grey",
    duration: "2–4 Wochen",
    title: "Steuerungslogik & Informationsmodell",
    description:
      "Wir entwickeln eine durchgängige Steuerungslogik und zeigen, wie Ihre Daten und Prozesse miteinander verbunden werden sollten.",
    deliverables: [
      "Informationsmodell",
      "KPI- & Steuerungslogik",
      "Daten- und Prozessmodell",
    ],
    line: "/Greyline.svg",
    border: "border-l-text-secondary",
    titleColor: "text-surface-dark",
    lineTop: "top-[470px]",
    numberColor: "text-text-secondary",
  },
  {
    color: "petrol",
    duration: "4–8 Wochen",
    title: "Proof of Concept",
    description:
      "Wir validieren das Steuerungsmodell mit einem interaktiven Prototyp und erstellen eine Roadmap für die technische Umsetzung.",
    deliverables: [
      "Interaktiver Prototyp",
      "Umsetzungsroadmap",
      "Übergabedokumentation",
    ],
    line: "/Petrolline.svg",
    border: "border-l-accent",
    titleColor: "text-accent",
    lineTop: "top-[735px]",
    numberColor: "text-accent",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-screen-2xl px-8 py-32">

        {/* Heading */}

        <div className="text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-text-secondary">
            Unsere Leistungen
          </p>

          <h2 className="text-4xl font-light leading-tight text-surface-dark">
            Drei Ausbaustufen.
          </h2>

        </div>

        {/* Content */}

        <div className="relative mt-16">

          {/* Großes C */}

          <div className="pointer-events-none absolute -right-[1200px] top-[54.5%] z-0 -translate-y-1/2  opacity-100">

            <Image
              src="/Logo.svg"
              alt=""
              width={1700}
              height={1700}
            />

          </div>

          {/* Karten */}

          <div className="relative z-20 space-y-6">

            {services.map((service) => (
              <div
                key={service.title}
                className="grid grid-cols-[130px_900px] items-center"
              >

                {/* Dauer */}

                <div className="pr-10">

                  <div className="text-center">

                    <p className={`text-5xl font-light ${service.numberColor}`}>
                    {service.duration.split(" ")[0]}
                    </p>

                    <p className="mt-2 text-xl font-light text-text-secondary">
                      Wochen
                    </p>

                  </div>

                </div>

                {/* Karte */}

                <div
                  className={`relative border border-text-secondary/20 border-l-8 bg-white p-5 ${service.border}`}
                >

                  {/* Linie */}

                  <div className="pointer-events-none absolute left-full top-1/2 z-10 -translate-y-1/2">

                    <Image
                      src={service.line}
                      alt=""
                      width={820}
                      height={120}
                    />

                  </div>

                  <div className="grid grid-cols-[1.3fr_0.7fr] gap-12">

                    <div>

                      <h3
                        className={`text-3xl font-light ${service.titleColor}`}
                      >
                        {service.title}
                      </h3>

                      <p className="mt-5 text-lg font-light leading-relaxed text-text-secondary">
                        {service.description}
                      </p>

                    </div>

                    <div>

                      <p className="mb-3 text-sm uppercase tracking-[0.18em] text-surface-dark">
                        Liefergegenstände
                      </p>

                      <ul className="space-y-2">

                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="border-b border-text-secondary/20 pb-2 text-base font-light text-surface-dark"
                          >
                            {item}
                          </li>
                        ))}

                      </ul>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}