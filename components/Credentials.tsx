const EDUCATION = [
  {
    deg: "LLM (Hons), Professional Legal Practice",
    school: "Solent University",
    yr: "2025",
  },
  {
    deg: "LLB (Hons), Legal Studies",
    school: "Solent University",
    yr: "2022–25",
  },
  {
    deg: "MBA, Business & Marketing",
    school: "University of Mumbai",
    yr: "2010–12",
  },
  {
    deg: "BSc, Information Technology",
    school: "University of Mumbai",
    yr: "2004–08",
  },
  {
    deg: "HSC, Physics, Chemistry, Maths, Biology",
    school: "Divine Image Jr. College",
    yr: "2003–04",
  },
];

const LANGUAGES = [
  { label: "Native / Bilingual", langs: ["Hindi", "Marathi"] },
  { label: "Full Professional", langs: ["English"] },
  {
    label: "Limited Working",
    langs: ["Gujarati", "Bengali", "Punjabi", "Marwari", "Sanskrit"],
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="bg-paper py-20 text-ink sm:py-24">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="mb-12 max-w-[620px]">
          <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-forest">
            Credentials
          </span>
          <h2 className="font-display text-[28px] leading-[1.15] sm:text-[38px]">
            Education & languages
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-11 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            {EDUCATION.map((e, i) => (
              <div
                key={e.deg}
                className={`flex items-start justify-between gap-4 border-t border-ink/15 py-4 ${
                  i === EDUCATION.length - 1 ? "border-b" : ""
                }`}
              >
                <div>
                  <div className="font-display text-[16.5px]">{e.deg}</div>
                  <div className="mt-1 text-[12.5px] text-ink/60">
                    {e.school}
                  </div>
                </div>
                <div className="whitespace-nowrap pt-0.5 font-mono text-xs text-forest">
                  {e.yr}
                </div>
              </div>
            ))}
          </div>

          <div>
            {LANGUAGES.map((g) => (
              <div key={g.label} className="mb-6 last:mb-0">
                <div className="mb-2.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink/60">
                  {g.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.langs.map((l) => (
                    <span
                      key={l}
                      className="rounded-sm border border-ink/15 bg-paper2 px-3 py-1.5 text-[13px]"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
