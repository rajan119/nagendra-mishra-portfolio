// components/Skills.tsx
const SERVICES = [
    "Revenue Growth Consultancy",
    "Non-Executive Director Services",
    "Business Growth Consultancy",
    "Business Automation & Transformation",
    "Corporate Dispute Mediation",
    "Themed Speaking",
    "Authorship",
    "Corporate Advisory",
    "Time Management Coaching",
    "Business Strategy Consulting",
    "Legal & Commercial Mediation",
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="bg-paper py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
          <div className="mb-12 max-w-[620px]">
            <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-forest">
              Core Expertise
            </span>
            <h2 className="font-display text-[28px] leading-[1.15] sm:text-[38px]">
              Bridging business, law & strategy
            </h2>
            <p className="mt-4 text-[15.5px] text-ink/60">
              From boardroom advisory to dispute resolution — a multidisciplinary
              practice built at the intersection of commerce and legal expertise.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="group border border-ink/15 bg-paper2 p-6 transition-all duration-300 hover:border-brass hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-2xl text-brass">◆</span>
                  <div>
                    <h3 className="font-display text-[17px] leading-tight">
                      {service}
                    </h3>
                    <p className="mt-2 text-[13px] text-ink/60">
                      Strategic advisory for growth & transformation
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }