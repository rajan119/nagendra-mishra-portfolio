import Image from 'next/image';
import StampBadge from "./StampBadge";

export default function Hero() {
  return (
    <section className="bg-[#0f2a2a] overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-11 px-5 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
        <div>
          <span className="mb-5 block font-mono text-xs uppercase tracking-[0.14em] text-brass">
            Ref. NM / 2007—2026 · Southampton, England
          </span>
          <h1 className="max-w-[15ch] font-display text-[38px] leading-[1.08] tracking-tight sm:text-[48px] lg:text-[60px]">
            Business built. Disputes <em className="text-brass italic">resolved.</em>{" "}
            Growth engineered.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[16.5px] text-paper/60">
            Serial entrepreneur, accredited mediator, and business strategist
            with 16+ years scaling ventures across technology, events,
            hospitality, and professional services — now reading for the Bar
            to bring legal discipline into commercial strategy.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#ventures"
              className="rounded-sm bg-brass px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-ink transition-colors hover:bg-[#ddbf7f]"
            >
              View the ventures
            </a>
            <a
              href="https://www.linkedin.com/in/nagzz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-paper/25 px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-paper transition-colors hover:border-brass hover:text-brass"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <StampBadge
            id="ring-hero"
            ringText="ACCREDITED MEDIATOR · FOUNDER SINCE 2007 · "
            className="h-[min(230px,70vw)] w-[min(230px,70vw)]"
          />
        </div>
      </div>
    </section>
  );
}