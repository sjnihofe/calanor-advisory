import Link from "next/link";

export default function FounderCTA() {
  return (
    <section className="bg-background py-16 lg:py-36">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-sm bg-surface-dark px-6 py-12 lg:px-20 lg:py-20">

          <p className="text-center text-xs uppercase tracking-[0.3em] text-white lg:text-sm">
            Ein persönliches Wort
          </p>

          <h2 className="mt-5 text-center text-3xl font-light leading-tight text-white lg:mt-6 lg:text-5xl">
            Gute Unternehmenssteuerung
            <br className="hidden lg:block" />
            beginnt mit einem Gespräch.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-sm font-light leading-7 text-[#D4D7DB] lg:mt-10 lg:space-y-7 lg:text-lg lg:leading-9">

            <p>
              Jedes Unternehmen ist anders. Deshalb glaube ich nicht an
              Standardlösungen.
            </p>

            <p>
              Bevor über Software, Dashboards oder künstliche Intelligenz
              gesprochen wird, möchte ich zuerst verstehen, welche
              Entscheidungen in Ihrem Unternehmen getroffen werden und welche
              Informationen dafür heute fehlen.
            </p>

            <p>
              Oft entstehen bereits aus diesem ersten Austausch neue
              Perspektiven auf bestehende Prozesse.
            </p>

            <p className="text-white">
              Vielleicht stellen wir dabei gemeinsam fest, dass Ihr Unternehmen
              gar keine neue Software benötigt.
            </p>

            <p>
              Sondern lediglich einen besseren Informationsfluss.
            </p>

          </div>

          {/* Signatur */}

          <div className="mx-auto mt-10 max-w-fit border-l-2 border-accent pl-4 text-left lg:mt-14 lg:pl-5">

            <p className="text-base font-light text-white lg:text-xl">
              Niklas Hofeditz
            </p>

            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#BFC4C8] lg:text-sm">
              Gründer · CALANOR Advisory
            </p>

          </div>

          {/* Button */}

          <div className="mt-10 flex justify-center lg:mt-14">

            <Link
              href="/#kontakt"
              className="inline-flex w-full justify-center rounded-sm bg-accent px-6 py-3 text-center text-sm font-light text-white transition duration-300 hover:bg-accent-secondary sm:w-auto lg:px-8 lg:py-4 lg:text-base"
            >
              Unverbindliches Erstgespräch vereinbaren
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}