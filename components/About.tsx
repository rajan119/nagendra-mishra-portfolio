export default function About() {
  return (
    <section id="about" className="bg-ink py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Monogram placeholder — swap for a real headshot in /public */}
        <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-brass/40 bg-ink2 sm:h-72 sm:w-72">
          <span className="font-display text-6xl text-brass">NM</span>
        </div>

        <div>
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.14em] text-brass">
            About
          </span>
          <h2 className="max-w-[22ch] font-display text-[28px] leading-[1.2] sm:text-[34px]">
            Building ventures, then learning the law that governs them
          </h2>
          <p className="mt-5 max-w-[58ch] text-[15.5px] text-paper/60">
            The entrepreneurial journey began in 2011 from a coffee shop in
            Mumbai, founding a first software company that grew into a
            7-figure business. That grew into a 13-venture portfolio spanning
            tech, events, hospitality, and professional services — with
            thousands of businesses supported through expos, accelerator
            programs, and digital transformation work along the way.
          </p>
          <p className="mt-4 max-w-[58ch] text-[15.5px] text-paper/60">
            Alongside the business pursuits, an LLB (Hons) is now complete and
            an LLM (Hons) is underway, with the ambition of qualifying as a
            barrister — bridging commercial acumen with legal expertise, one
            case and one venture at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
