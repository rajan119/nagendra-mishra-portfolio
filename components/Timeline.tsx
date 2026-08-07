const TIMELINE = [
  {
    date: "2007 — 2008",
    role: "Trainee Software Tester",
    co: "Geecon · Mumbai",
    desc: "Product development and testing on Gems Management Systems.",
  },
  {
    date: "2008 — 2010",
    role: "Software Test Engineer",
    co: "TCS Eserve · Mumbai",
    desc: "Quality assurance on banking and financial systems for Citibank.",
  },
  {
    date: "2010 — 2011",
    role: "Senior Software Test Engineer",
    co: "BNP Paribas · Mumbai",
    desc: "Quality assurance across various banking and financial systems used by BNP.",
  },
  {
    date: "2011 — 2016",
    role: "Consultant",
    co: "GoldenSource · Mumbai",
    desc: "Business analysis and quality assurance, alongside founding Geecon Systems the same year.",
  },
  {
    date: "2025 — Present",
    role: "Trainee Legal Consultant",
    co: "Larkman Lodh Solicitors · Southampton",
    desc: "Legal research, drafting, and case preparation across practice areas, working toward qualification as a solicitor or barrister.",
  },
];

export default function Timeline() {
  return (
    <section id="track-record" className="bg-[#0f2a2a] py-20 sm:py-24">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="mb-12 max-w-[620px]">
          <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-brass">
            Track Record
          </span>
          <h2 className="font-display text-[28px] leading-[1.15] sm:text-[38px]">
            From trainee tester to managing director
          </h2>
          <p className="mt-4 text-[15.5px] text-paper/60">
            The tech career that funded the first venture, and the roles
            running alongside the portfolio since.
          </p>
        </div>

        <div>
          {TIMELINE.map((t, i) => (
            <div
              key={t.date + t.role}
              className={`grid grid-cols-[90px_1fr] gap-4 border-t border-paper/10 py-6 sm:grid-cols-[130px_1fr] sm:gap-6 ${
                i === TIMELINE.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="pt-1 font-mono text-[12.5px] text-brass">
                {t.date}
              </div>
              <div>
                <div className="font-display text-[17px]">{t.role}</div>
                <div className="mt-1 text-[13px] text-paper/60">{t.co}</div>
                <div className="mt-2 max-w-[60ch] text-sm text-paper/60">
                  {t.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
