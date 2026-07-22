"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-text-secondary bg-background/90 backdrop-blur-md">

      <div className="flex h-15 items-center px-8">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-5 transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/Logo.svg"
            alt="CALANOR"
            width={42}
            height={42}
            priority
          />

          <div className="h-11 w-px bg-accent/40" />

          <div className="leading-none">

            <p className="text-[18px] font-light tracking-[0.22em] text-surface-dark">
              CALANOR
            </p>

            <p className="mt-2 text-[13px] font-light tracking-[0.30em] text-accent">
              ADVISORY
            </p>

          </div>

        </Link>

        {/* Rechte Seite */}

        <div className="ml-auto flex items-center gap-14">

          <nav className="hidden items-center gap-12 lg:flex">

            <Link
              href="/"
              className="text-[17px] font-light text-surface-dark transition-colors hover:text-accent"
            >
              Leistungen
            </Link>

            <Link
              href="/about"
              className="text-[17px] font-light text-surface-dark transition-colors hover:text-accent"
            >
              Die Geschichte hinter CALANOR
            </Link>

            <Link
              href="/projects"
              className="text-[17px] font-light text-surface-dark transition-colors hover:text-accent"
            >
              Projekte
            </Link>

          </nav>

          <Link
            href="/#kontakt"
            className="hidden rounded-md bg-accent px-6 py-3 text-[16px] font-light text-white transition-all duration-300 hover:opacity-90 lg:inline-flex"
          >
            Erstgespräch vereinbaren
          </Link>

        </div>

      </div>

    </header>
  );
}