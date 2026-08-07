"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Track Record", href: "#track-record" },
  { label: "Mediation", href: "#mediation" },
  { label: "Community", href: "#community" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-[#0f2a2a]  backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          N<span className="text-brass">M</span> · Mishra
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-paper/60 transition-colors hover:text-brass"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Burger button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-paper transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`overflow-hidden border-t border-paper/10 bg-ink transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-paper/5 py-3 font-mono text-[13px] uppercase tracking-[0.08em] text-paper/70 transition-colors last:border-none hover:text-brass"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
