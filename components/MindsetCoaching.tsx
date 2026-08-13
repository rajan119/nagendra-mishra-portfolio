// components/MindsetCoaching.tsx
import Image from 'next/image';

const COACHING_AREAS = [
  {
    title: "Time Management",
    description: "Strategic frameworks for peak productivity and work-life integration.",
    icon: "⏰",
  },
  {
    title: "Mindset Transformation",
    description: "Developing resilience, clarity, and a growth-oriented mental model.",
    icon: "🧠",
  },
  {
    title: "Corporate Consultancy",
    description: "Executive coaching for leadership, strategy, and organizational growth.",
    icon: "🏢",
  },
  {
    title: "Business Automation",
    description: "Streamlining operations through technology and process optimization.",
    icon: "⚡",
  },
  {
    title: "Career Acceleration",
    description: "Strategic career development for legal and business professionals.",
    icon: "🚀",
  },
  {
    title: "Conflict Resolution",
    description: "Mediation and negotiation skills for corporate and legal settings.",
    icon: "🤝",
  },
];

export default function MindsetCoaching() {
  return (
    <section id="coaching" className="bg-paper py-20 text-ink sm:py-24">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="mb-12 max-w-[620px]">
          <span className="mb-3.5 block font-mono text-xs uppercase tracking-[0.14em] text-forest">
            Mindset & Coaching
          </span>
          <h2 className="font-display text-[28px] leading-[1.15] sm:text-[38px]">
            Transform your approach, transform your results
          </h2>
          <p className="mt-4 text-[15.5px] text-ink/60">
            Executive coaching and mindset training for entrepreneurs,
            corporate leaders, and legal professionals seeking breakthrough
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COACHING_AREAS.map((area) => (
            <div
              key={area.title}
              className="border border-ink/15 bg-paper2 p-8 transition-all duration-300 hover:border-brass hover:shadow-md"
            >
              <div className="text-4xl">{area.icon}</div>
              <h3 className="mt-4 font-display text-[18px]">{area.title}</h3>
              <p className="mt-2 text-[14px] text-ink/60">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-ink/15 bg-ink/5 p-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h3 className="font-display text-[20px]">Ready to elevate your performance?</h3>
              <p className="mt-2 text-[14px] text-ink/60">
                One-on-one coaching sessions tailored to your professional goals.
              </p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap rounded-sm bg-brass px-8 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-ink transition-colors hover:bg-[#ddbf7f]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}