"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-text-secondary bg-background/90 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/Logo.svg"
            alt="CALANOR"
            width={40}
            height={40}
            priority
          />

          <div className="h-10 w-px bg-accent/40" />

          <div className="leading-none">
            <p className="text-base font-light tracking-[0.20em] text-surface-dark lg:text-[18px]">
              CALANOR
            </p>

            <p className="mt-1 text-[11px] font-light tracking-[0.30em] text-accent lg:text-[13px]">
              ADVISORY
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-14 lg:flex">
          <nav className="flex items-center gap-12">


            <Link
              href="/about"
              className="text-[17px] font-light text-surface-dark transition-colors hover:text-accent"
            >
              Über uns
            </Link>


          </nav>

          <Link
            href="/#kontakt"
            className="rounded-md bg-accent px-6 py-3 text-[16px] font-light text-white transition-opacity hover:opacity-90"
          >
            Erstgespräch vereinbaren
          </Link>
        </div>

        {/* Hamburger */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Menü öffnen"
        >
          <span
            className={`h-0.5 w-6 bg-surface-dark transition-all ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-surface-dark transition-all ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-surface-dark transition-all ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-text-secondary" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">

          <Link
            href="/about"
            onClick={closeMenu}
            className="py-4 text-lg font-light text-surface-dark"
          >
            Über uns
          </Link>

          <Link
            href="/#kontakt"
            onClick={closeMenu}
            className="mt-6 rounded-md bg-accent px-6 py-4 text-center text-base font-light text-white"
          >
            Erstgespräch vereinbaren
          </Link>

        </nav>
      </div>
    </header>
  );
}