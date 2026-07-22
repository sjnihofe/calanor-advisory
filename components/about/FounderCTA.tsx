import Image from "next/image";
import Link from "next/link";

export default function FounderCTA() {
  return (
    <section className="bg-background">

      <div className="mx-auto max-w-7xl px-6 py-28 lg:py-36">

        <div className="overflow-hidden rounded-sm bg-surface-dark">

          <div className="grid lg:grid-cols-[420px_1fr]">

            {/* Bild */}

            <div className="relative min-h-[520px]">

              <Image
                src="/Founder.jpg"
                alt="Niklas Hofeditz – Gründer CALANOR Advisory"
                fill
                className="object-cover"
              />

            </div>

            {/* Inhalt */}

            <div className="flex flex-col justify-center px-10 py-16 lg:px-20">

              <p className="text-sm uppercase tracking-[0.3em] text-white">
                Ein persönliches Wort
              </p>

              <h2 className="mt-6 text-3xl font-light leading-tight text-white lg:text-5xl">

                Gute Unternehmenssteuerung
                beginnt mit einem Gespräch.

              </h2>

              <div className="mt-10 space-y-8 text-lg font-light leading-9 text-[#D4D7DB]">

                <p>
                  Jedes Unternehmen ist anders.
                  Deshalb glaube ich nicht an Standardlösungen.
                </p>

                <p>
                  Bevor über Software,
                  Dashboards oder künstliche Intelligenz gesprochen wird,
                  möchte ich zuerst verstehen,
                  welche Entscheidungen in Ihrem Unternehmen getroffen werden
                  und welche Informationen dafür heute fehlen.
                </p>

                <p>
                  Oft entstehen bereits aus diesem ersten Austausch
                  neue Perspektiven auf bestehende Prozesse.
                </p>

                <p className="text-white">
                  Vielleicht stellen wir dabei gemeinsam fest,
                  dass Ihr Unternehmen gar keine neue Software benötigt.
                </p>

                <p>
                  Sondern lediglich einen besseren Informationsfluss.
                </p>

              </div>

              {/* Signatur */}

              <div className="mt-14 border-l-2 border-accent pl-6">

                <p className="text-xl font-light text-white">
                  Niklas Hofeditz
                </p>

                <p className="mt-2 uppercase tracking-[0.2em] text-[#BFC4C8]">
                  Gründer · CALANOR Advisory
                </p>

              </div>

              {/* Button */}

              <div className="mt-14">

                <Link
                  href="/kontakt"
                  className="inline-flex items-center rounded-sm bg-accent px-8 py-4 text-base font-light text-white transition duration-300 hover:bg-accent-secondary"
                >
                  Unverbindliches Erstgespräch vereinbaren
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}