type Venture = {
  name: string;
  years: string;
  role: string;
  desc: string;
  stat: string;
  image: string;
};

const VENTURES: Venture[] = [
  {
    name: "B2B Growth Hub",
    years: "2018 — Present",
    role: "Managing Director",
    desc: "A global business incubator built around an annual membership program — expos, conferences, networking events, a business magazine, and growth-specific workshops for founders ready to scale.",
    stat: "Members average 300% growth in two years",
    image: "https://picsum.photos/seed/b2bgrowthhub/640/420",
  },
  {
    name: "Visualytes",
    years: "2016 — Present",
    role: "Managing Director",
    desc: "A web and marketing agency working mostly with UK clients, from early-stage startups to established enterprises, on bespoke digital solutions.",
    stat: "1,500+ projects delivered · min. 85% client revenue growth",
    image: "https://picsum.photos/seed/visualytes/640/420",
  },
  {
    name: "Geecon Global",
    years: "2014 — Present",
    role: "Director of Business Intelligence",
    desc: "Leads a team turning complex data into decisions — building BI frameworks that connect technical teams with executive stakeholders.",
    stat: "Cut operating costs 60%, lifted efficiency 45%",
    image: "https://picsum.photos/seed/geeconglobal/640/420",
  },
  {
    name: "Geecon Systems",
    years: "2011 — Present",
    role: "Managing Director",
    desc: "Where it started: the first software company, founded from a coffee shop in Mumbai and grown into a 7-figure business.",
    stat: "The origin file — still active",
    image: "https://picsum.photos/seed/geeconsystems/640/420",
  },
  {
    name: "BBX UK",
    years: "2017 — Present",
    role: "Brokerage Director",
    desc: "Trade-exchange brokerage covering Basingstoke & Surrey, the Isle of Man, and the Channel Islands.",
    stat: "Regional brokerage, South of England",
    image: "https://picsum.photos/seed/bbxuk/640/420",
  },
  {
    name: "Banner Press & Hospitality Brands",
    years: "Ongoing",
    role: "Publishing & Hospitality",
    desc: "A publishing arm alongside several hospitality brands, rounding out a portfolio built for community and reach as much as revenue.",
    stat: "Part of a 13-venture portfolio",
    image: "https://picsum.photos/seed/bannerpress/640/420",
  },
];

const CLOSED_FILES = [
  { name: "Ultric Group Ltd", date: "Partner & Director, 2021–2025" },
  { name: "Great Bot Limited", date: "Partner & Director, 2021–2024" },
  {
    name: "Scott Associates Asset Management",
    date: "Managing Partner, 2021–2024",
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="bg-paper py-20 text-ink sm:py-24">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="mb-12 max-w-[620px]">
          <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-forest">
            The Ventures
          </span>
          <h2 className="font-display text-[28px] leading-[1.15] sm:text-[38px]">
            Five open files, each from a different chapter
          </h2>
          <p className="mt-4 text-[15.5px] text-ink/60">
            From a single software company started in a Mumbai coffee shop in
            2011 to a portfolio spanning incubation, digital services, and
            brokerage today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
          {VENTURES.map((v) => (
            <div key={v.name} className="flex flex-col bg-paper2">
              <img
                src={v.image}
                alt={`${v.name} — placeholder imagery`}
                className="h-40 w-full object-cover grayscale"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-2.5 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl">{v.name}</h3>
                  <span className="whitespace-nowrap font-mono text-[11.5px] text-ink/50">
                    {v.years}
                  </span>
                </div>
                <div className="mb-3 font-mono text-[12.5px] tracking-wide text-forest">
                  {v.role}
                </div>
                <p className="mb-3.5 text-[14.5px] text-ink/60">{v.desc}</p>
                <span className="mt-auto border-t border-ink/15 pt-2.5 font-mono text-xs text-ink">
                  {v.stat.split(/(\d[\d.,]*%?\+?)/).map((part, i) =>
                    /\d/.test(part) ? (
                      <b key={i} className="text-forest">
                        {part}
                      </b>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 border-t border-ink/15 pt-7">
          <div className="mb-3.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink/50">
            Closed files — past directorships
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2.5">
            {CLOSED_FILES.map((c) => (
              <div key={c.name} className="text-[13.5px]">
                <span className="font-semibold">{c.name}</span>
                <span className="ml-1.5 font-mono text-[11.5px] text-ink/50">
                  {c.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
