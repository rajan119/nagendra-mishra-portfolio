import Image from "next/image";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const issues = [
  {
    number: "01",
    title: "Affordable Housing",
    copy:
      "Nisl rhoncus mattis rhoncus urna. In mollis nunc sed id semper risus in hendrerit gravida. Ut venenatis tellus in metus vulputate eu scelerisque. Dolor morbi non arcu risus quis varius quam",
  },
  {
    number: "02",
    title: "Public Safety",
    copy:
      "Libero justsit amet cursus sit amet. Gravida cum sociis natoque penatibus et magnis dis parturient. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Sed cras ornare arcu",
  },
  {
    number: "03",
    title: "Health Care",
    copy:
      "Tempor nec feugiat nisl pretium fusce id velit ut. In est ante in nibh. Rhoncus dolor purus non enim praesent elementum facilis leo vel. Tincidunt lobortis feugiat vivamus at augue eget arcu",
  },
  {
    number: "04",
    title: "Jobs and Workers",
    copy:
      "Sed lectus vestibulum mattis ullamcorper velit. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi",
  },
  {
    number: "05",
    title: "Transportation",
    copy:
      "Nisl rhoncus mattis rhoncus urna. In mollis nunc sed id semper risus in hendrerit gravida. Ut venenatis tellus in metus vulputate eu scelerisque. Dolor morbi non arcu risus quis varius quam",
  },
  {
    number: "06",
    title: "Environmental Justice",
    copy:
      "Libero justsit amet cursus sit amet. Gravida cum sociis natoque penatibus et magnis dis parturient. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Sed cras ornare arcu",
  },
];

const volunteerSteps = [
  {
    number: "01",
    title: "Time for Change",
    copy:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    number: "02",
    title: "Power to the People",
    copy:
      "Amet cursus sit amet dictum. Odio facilisis mauris met vitae. Tristique senectus et netus",
  },
  {
    number: "03",
    title: "Let Us Vote for Democracy",
    copy:
      "In cursus turpis massa tincidunt ut ornare lectus. Aliquam bibendum vitae elementum",
  },
];

const donationCards = [
  {
    title: "Time for Change",
    copy: "Nec ullamcorper sit amet risus nullam eget felis. Ac odio tempor orci dapibus ultrices",
    image: "/images/time-for-change.jpg",
  },
  {
    title: "Power to the Peoople",
    copy: "Eget mauris pharetra et ultrices neque ornare. Feugiat premium nibh ipsum consequat",
    image: "/images/power-to-the-people.jpg",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function BusinessesVentures() {
  return (
    <section className="bg-[#0f2a2a] overflow-hidden py-16 sm:py-24">
      {/* ------------------------------------------------------------- */}
      {/* Issues grid                                                    */}
      {/* ------------------------------------------------------------- */}
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <span className="mb-5 block font-mono text-xs uppercase tracking-[0.14em] text-brass">
          Ref. NM / Where I Stand
        </span>
        <h2 className="max-w-[20ch] font-display text-[32px] leading-[1.1] tracking-tight sm:text-[40px]">
          The issues that <em className="text-brass italic">matter.</em>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          {issues.map((issue) => (
            <article key={issue.title} className="group">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-brass">
                  {issue.number}
                </span>
                <h3 className="font-display text-2xl tracking-tight text-paper">
                  {issue.title}
                </h3>
              </div>
              <hr className="mt-4 border-paper/15" />
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/60">
                {issue.copy}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12.5px] uppercase tracking-[0.06em] text-brass transition-colors group-hover:text-[#ddbf7f]"
              >
                More details
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Become a volunteer                                             */}
      {/* ------------------------------------------------------------- */}
      <div className="mx-auto mt-24 max-w-[1080px] px-5 sm:px-8 sm:mt-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <span className="mb-5 block font-mono text-xs uppercase tracking-[0.14em] text-brass">
              Get Involved
            </span>
            <h2 className="max-w-[14ch] font-display text-[34px] leading-[1.08] tracking-tight sm:text-[42px]">
              Become a <em className="text-brass italic">Volunteer.</em>
            </h2>

            <div className="mt-6 flex items-start gap-6">
              <span className="mt-3 h-px w-10 shrink-0 bg-paper/25" aria-hidden />
              <p className="max-w-xs text-[15px] leading-relaxed text-paper/60">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur
              </p>
            </div>

            <a
              href="#volunteer"
              className="mt-9 inline-block rounded-sm bg-brass px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-ink transition-colors hover:bg-[#ddbf7f]"
            >
              Read more
            </a>

            <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-sm ring-1 ring-paper/15">
              <Image
                 src="/images/volunteer-canvassing1.jpg"
                alt="Volunteer canvassing and speaking with a resident at her front door"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm ring-1 ring-paper/15">
              <Image
               src="/images/volunteer-canvassing.jpg"
                alt="A voter holding a ballot card wearing an 'I Voted' sticker"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <ul className="mt-10 space-y-8">
              {volunteerSteps.map((step) => (
                
                <li key={step.number} className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-paper/15 bg-paper/5 font-mono text-sm text-brass">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-display text-lg tracking-tight text-paper">
                      {step.title}
                    </h4>
                    <p className="mt-1 max-w-sm text-[15px] leading-relaxed text-paper/60">
                      {step.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Promotion / donation band                                      */}
      {/* ------------------------------------------------------------- */}
      <div className="mx-auto mt-24 max-w-[1080px] px-5 sm:px-8 sm:mt-32">
        <div className="rounded-sm border border-paper/15 bg-paper/[0.03] px-6 py-12 sm:px-12 sm:py-16">
          <span className="mb-5 block font-mono text-xs uppercase tracking-[0.14em] text-brass">
            Our Mission
          </span>
          <h2 className="max-w-[26ch] font-display text-[30px] leading-[1.15] tracking-tight sm:text-[38px]">
            We promote the exchange of <em className="text-brass italic">knowledge</em> to enable
            innovation.
          </h2>

          <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden rounded-sm ring-1 ring-paper/15 sm:aspect-[16/7]">
            <Image
              src="/images/volunteer-canvassing2.jpg"
              alt="A man in a suit reading papers at a desk with a small American flag beside him"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1080px, 100vw"
            />
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-paper/15 pt-10 sm:flex-row sm:items-center">
            <h3 className="font-display text-2xl leading-snug tracking-tight text-paper sm:text-[28px]">
              Your contribution is important for us.
            </h3>

            <a
              href="#donate"
              className="rounded-sm bg-brass px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-ink transition-colors hover:bg-[#ddbf7f]"
            >
              Donate here
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {donationCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-4 rounded-sm border border-paper/15 bg-paper/[0.03] p-4"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-paper/10">
                  <Image src={card.image} alt="" fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <h4 className="font-display text-base tracking-tight text-paper">
                    {card.title}
                  </h4>
                  <p className="mt-1 text-sm leading-snug text-paper/60">{card.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}