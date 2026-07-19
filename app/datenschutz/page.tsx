import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-8 py-20">

        <Link
          href="/"
          className="text-text-secondary transition-colors hover:text-surface-dark"
        >
          ← Zur Startseite
        </Link>

        <div className="pt-16 text-center">

          <h1 className="text-[8rem] font-light tracking-[0.20em] text-surface-dark">
            CALANOR
          </h1>

          <p className="mt-2 text-6xl font-extralight tracking-[0.10em] text-accent">
            ADVISORY
          </p>

        </div>

        <h1 className="mt-20 text-5xl font-light text-surface-dark">
          Datenschutzerklärung
        </h1>

        <div className="mt-16 h-px bg-border" />

        <div className="mt-16 space-y-16">

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Allgemeine Hinweise
            </p>

            <p className="text-lg font-light leading-relaxed text-surface-dark">
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig.
              Nachfolgend informieren wir Sie darüber, welche Daten beim Besuch
              dieser Website verarbeitet werden und zu welchem Zweck dies erfolgt.
            </p>
          </section>

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Verantwortlicher
            </p>

            <div className="space-y-2 text-lg font-light leading-relaxed text-surface-dark">
              <p>Niklas Hofeditz</p>
              <p>Calanor Advisory</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>

              <p className="pt-4">
                E-Mail:{" "}
                <a
                  href="mailto:niklas.hofeditz@calanor-advisory.com"
                  className="transition-colors hover:text-accent"
                >
                  niklas.hofeditz@calanor-advisory.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Erhebung und Speicherung personenbezogener Daten
            </p>

            <p className="text-lg font-light leading-relaxed text-surface-dark">
              Beim Besuch dieser Website werden durch den Hosting-Anbieter
              technisch notwendige Informationen verarbeitet. Hierzu können
              insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
              Browsertyp, Betriebssystem sowie weitere technische Informationen
              gehören. Die Verarbeitung erfolgt zur Gewährleistung eines
              störungsfreien Betriebs der Website.
            </p>
          </section>

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Kontaktaufnahme
            </p>

            <p className="text-lg font-light leading-relaxed text-surface-dark">
              Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre Angaben
              ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.
            </p>
          </section>

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Ihre Rechte
            </p>

            <p className="text-lg font-light leading-relaxed text-surface-dark">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das
              Recht auf Widerspruch gegen die Verarbeitung Ihrer
              personenbezogenen Daten. Darüber hinaus besteht ein
              Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.
            </p>
          </section>

        </div>

        <div className="mt-20 border-t border-border pt-8">

          <div className="flex items-center justify-between">

            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} CALANOR ADVISORY
            </p>

            <Link
              href="/impressum"
              className="text-sm text-text-secondary transition-colors hover:text-surface-dark"
            >
              Impressum
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}