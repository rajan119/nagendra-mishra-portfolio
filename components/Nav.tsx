// components/Nav.tsx
"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#skills" },        // NEW
  { label: "Speaking Engagements", href: "/SpeakingEngagements" },        // NEW
  { label: "Ventures", href: "/BusinessesVentures" },
  { label: "Track Record", href: "#track-record" },
  { label: "Mediation", href: "#mediation" },
  { label: "Coaching", href: "#coaching" },      // NEW
  { label: "Community", href: "#community" },
  { label: "Credentials", href: "#credentials" },
  { label: "Publications", href: "#books" },     // NEW
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-[#0f2a2a] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1297px] items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-brass">Nagendra Mishra</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-3 lg:flex">
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
          open ? "max-h-[600px]" : "max-h-0"
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