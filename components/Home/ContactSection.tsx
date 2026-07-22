export default function ContactSection() {
  return (
    <section className="bg-background pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-8">

        {/* Trennlinie */}
        <div className="h-px w-full bg-border" />

        {/* -------------------------------- */}
        {/* Desktop CTA                      */}
        {/* -------------------------------- */}

        <div className="mx-auto hidden max-w-4xl pt-12 pb-24 text-center lg:block">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-text-secondary">
            KONTAKT
          </p>

          <h2 className="text-5xl font-light leading-tight text-surface-dark">
            Lassen Sie uns über
            <br />
            bessere Entscheidungen sprechen.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-xl font-light leading-relaxed text-text-secondary">
            In einem unverbindlichen Erstgespräch analysieren wir gemeinsam,
            ob und wie{" "}
            <span className="font-light text-surface-dark">
              CALANOR
            </span>{" "}
            <span className="text-accent">
              ADVISORY
            </span>{" "}
            Sie unterstützen kann.
          </p>

        </div>

        {/* -------------------------------- */}
        {/* Mobile CTA                       */}
        {/* -------------------------------- */}

        <div className="mx-auto max-w-md pt-10 pb-16 text-center lg:hidden">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-text-secondary">
            KONTAKT
          </p>

          <h2 className="text-2xl font-light leading-tight text-surface-dark">
            Lassen Sie uns über
            <br />
            bessere Entscheidungen
            <br />
            sprechen.
          </h2>

          <p className="mt-8 text-lg font-light leading-relaxed text-text-secondary">
            In einem unverbindlichen Erstgespräch analysieren wir gemeinsam,
            ob und wie{" "}
            <span className="text-surface-dark">
              CALANOR
            </span>{" "}
            <span className="text-accent">
              ADVISORY
            </span>{" "}
            Sie unterstützen kann.
          </p>

        </div>

        {/* -------------------------------- */}
        {/* Desktop Kontakt                  */}
        {/* -------------------------------- */}

        <div className="hidden grid-cols-2 gap-12 border-t border-border py-16 lg:grid">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-text-secondary">
              E-Mail
            </p>

            <a
              href="mailto:niklas.hofeditz@calanor-advisory.com"
              className="text-2xl font-light text-surface-dark transition-colors hover:text-accent"
            >
              niklas.hofeditz@calanor-advisory.com
            </a>

          </div>

          <div className="text-right">

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-text-secondary">
              Telefon
            </p>

            <a
              href="tel:+4916096263583"
              className="text-2xl font-light text-surface-dark transition-colors hover:text-accent"
            >
              +49 160 96263583
            </a>

          </div>

        </div>

        {/* -------------------------------- */}
        {/* Mobile Kontakt                   */}
        {/* -------------------------------- */}

        <div className="border-t border-border py-10 lg:hidden">

          <div className="space-y-10 text-center">

            <div>

              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-text-secondary">
                E-Mail
              </p>

              <a
                href="mailto:niklas.hofeditz@calanor-advisory.com"
                className="text-lg font-light break-all text-surface-dark transition-colors hover:text-accent"
              >
                niklas.hofeditz@calanor-advisory.com
              </a>

            </div>

            <div>

              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-text-secondary">
                Telefon
              </p>

              <a
                href="tel:+4916096263583"
                className="text-lg font-light text-surface-dark transition-colors hover:text-accent"
              >
                +49 160 96263583
              </a>

            </div>

          </div>

        </div>

        {/* -------------------------------- */}
        {/* Desktop Footer                   */}
        {/* -------------------------------- */}

        <div className="hidden items-center justify-between border-t border-border py-8 lg:flex">

          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} CALANOR ADVISORY
          </p>

          <div className="flex gap-10">

            <a
              href="/impressum"
              className="text-sm text-text-secondary transition-colors hover:text-surface-dark"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="text-sm text-text-secondary transition-colors hover:text-surface-dark"
            >
              Datenschutz
            </a>

          </div>

        </div>

        {/* -------------------------------- */}
        {/* Mobile Footer                    */}
        {/* -------------------------------- */}

        <div className="border-t border-border py-8 text-center lg:hidden">

          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} CALANOR ADVISORY
          </p>

          <div className="mt-6 flex justify-center gap-8">

            <a
              href="/impressum"
              className="text-sm text-text-secondary transition-colors hover:text-surface-dark"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="text-sm text-text-secondary transition-colors hover:text-surface-dark"
            >
              Datenschutz
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}