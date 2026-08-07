import StampBadge from "./StampBadge";

const TAGS = [
  "Interest-Based Mediation",
  "Land Title Dispute Mediation",
  "Title Mediation",
];

export default function Mediation() {
  return (
    <section id="mediation" className="bg-paper py-20 text-ink sm:py-24">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="mb-12 max-w-[620px]">
          <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-forest">
            Legal & Mediation Practice
          </span>
          <h2 className="font-display text-[28px] leading-[1.15] sm:text-[38px]">
            Reading the room, reading the law
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="mb-4 max-w-[56ch] text-[15.5px] text-ink/60">
              After more than a decade building businesses, formal legal
              training followed: an LLB (Hons) completed in 2025, and now an
              LLM (Hons) in Professional Legal Practice underway, with the
              ambition of qualifying as a barrister.
            </p>
            <p className="mb-4 max-w-[56ch] text-[15.5px] text-ink/60">
              Accredited by the Civil Mediation Council, the mediation
              practice focuses on resolving commercial and property disputes
              through structured, interest-based negotiation rather than the
              courtroom.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/15 px-3.5 py-2 font-mono text-xs text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-ink px-7 py-8 text-center text-paper">
            <div className="mx-auto mb-4 h-[140px] w-[140px]">
              <StampBadge
                id="ring-mediation"
                ringText="CIVIL MEDIATION COUNCIL · ACCREDITED · "
                className="h-[140px] w-[140px]"
              />
            </div>
            <div className="font-display text-lg">Accredited Mediator</div>
            <div className="mt-2 text-[12.5px] text-paper/60">
              Civil Mediation Council
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
