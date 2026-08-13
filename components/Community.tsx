import Image from 'next/image';

export default function Community() {
  return (
    <section id="community" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="h-64 w-full rounded-sm overflow-hidden sm:h-80">
          <Image
            src="/images/260.png"
            alt="Assistance dog for Helpful Hounds"
            width={640}
            height={480}
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div>
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.08em] text-brass">
            Board of Trustees · 2025 — Present
          </span>
          <h2 className="font-display text-[26px] leading-[1.2] sm:text-[34px] text-brass">
            Helpful Hounds Assistance Dogs
          </h2>
          <p className="mt-4 max-w-[56ch] text-[15px] text-brass">
            Trustee at a charity training and placing Assistance and
            Community Dogs with young people, families, schools, and care
            providers across Southern England — leading the technology and
            marketing strategy behind the charity&apos;s digital
            transformation, donor engagement, and impact reporting.
          </p>
        </div>
      </div>
    </section>
  );
}