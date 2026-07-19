import Link from "next/link";
import Brand from "../components/Brand";

export default function ImpressumPage() {
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
          Impressum
        </h1>

        <div className="mt-16 h-px bg-border" />

        <div className="mt-16 space-y-16">

          {/* Angaben */}

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Angaben gemäß § 5 TMG
            </p>

            <div className="space-y-2 text-lg font-light leading-relaxed text-surface-dark">
              <p>Niklas Hofeditz</p>
              <p>Calanor Advisory</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Kontakt
            </p>

            <div className="space-y-2 text-lg font-light leading-relaxed text-surface-dark">
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4916096263583"
                  className="transition-colors hover:text-accent"
                >
                  +49 160 96263583
                </a>
              </p>

              <p>
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

          {/* Umsatzsteuer */}

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Umsatzsteuer
            </p>

            <p className="text-lg font-light leading-relaxed text-surface-dark">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a
              Umsatzsteuergesetz:
              <br />
              DEXXXXXXXXX
            </p>
          </section>

          {/* Verantwortlich */}

          <section>
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </p>

            <div className="space-y-2 text-lg font-light leading-relaxed text-surface-dark">
              <p>Niklas Hofeditz</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
            </div>
          </section>

        </div>

        <div className="mt-20 border-t border-border pt-8">

          <div className="flex items-center justify-between">

            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} CALANOR ADVISORY
            </p>

            <Link
              href="/datenschutz"
              className="text-sm text-text-secondary transition-colors hover:text-surface-dark"
            >
              Datenschutz
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}