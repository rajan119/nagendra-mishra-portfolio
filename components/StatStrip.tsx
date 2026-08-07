const STATS = [
  { num: "16+", label: "Years across technology & business" },
  { num: "13", label: "Ventures founded or led" },
  { num: "1,500+", label: "Projects delivered at Visualytes" },
  { num: "300%", label: "Avg. two-year growth, B2B Growth Hub members" },
];

export default function StatStrip() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[1080px] grid-cols-2 border-l border-ink/15 sm:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="border-b border-r border-t border-ink/15 px-6 py-8"
          >
            <span className="block font-mono text-3xl text-forest">
              {s.num}
            </span>
            <span className="mt-2 block text-[12.5px] leading-snug text-ink/60">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
