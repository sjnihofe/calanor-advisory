import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-background">

      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:gap-24 lg:px-8 lg:py-24">

        {/* Text */}

        <div className="max-w-2xl">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-text-secondary lg:mb-5 lg:text-sm">
            Die Geschichte hinter CALANOR
          </p>

          <h1 className="text-2xl font-light leading-tight text-surface-dark lg:text-4xl">

            Welches wiederkehrende{" "}
            <span className="text-accent-secondary">
              Muster
            </span>{" "}
            mich dazu gebracht hat,
            CALANOR{" "}
            <span className="text-accent">
              ADVISORY
            </span>{" "}
            zu gründen.

          </h1>

          <p className="mt-6 max-w-xl text-base font-light leading-7 text-text-secondary lg:mt-10 lg:text-lg lg:leading-8">

            Über viele Jahre durfte ich Unternehmen aus unterschiedlichen
            Perspektiven kennenlernen – vom operativen Tagesgeschäft bis hin
            zu strategischen Entscheidungen auf Managementebene.

            <br />
            <br />

            Dabei habe ich festgestellt, Unternehmen verfügen heute über enorme
            Datenmengen, leistungsfähige Systeme und hochqualifizierte
            Mitarbeiter. Trotzdem dauern Entscheidungen häufig länger als nötig,
            weil die vorhandenen Informationen nicht dort ankommen,
            wo sie benötigt werden.

          </p>

        </div>

        {/* Bild */}

        <div className="w-full max-w-[1200px]">

          <Image
            src="/Founder.jpg"
            alt="Gründer CALANOR Advisory"
            width={780}
            height={1050}
            className="rounded-sm object-cover shadow-xl"
            priority
          />

          <div className="mt-5 border-l-2 border-accent pl-4 lg:mt-6 lg:pl-5">

            <p className="text-base font-normal text-surface-dark lg:text-lg">
              Niklas Hofeditz
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-secondary lg:text-sm">
              Gründer · CALANOR Advisory
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}