"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const stats = [
  { value: 13, label: "Ventures built" },
  { value: 2011, label: "Where it started" },
  { value: 1000, label: "Businesses supported" },
];

const timeline = [
  {
    eyebrow: "2011",
    title: "The First Company",
    body: "Founded from a coffee shop in Mumbai, the first software company grew steadily into a 7-figure business built on hands-on client work.",
  },
  {
    eyebrow: "2010s",
    title: "The Portfolio Takes Shape",
    body: "What began as one company expanded into a 13-venture portfolio spanning tech, events, hospitality, and professional services.",
  },
  {
    eyebrow: "Ongoing",
    title: "Backing Other Founders",
    body: "Thousands of businesses supported through expos, accelerator programs, and digital transformation work along the way.",
  },
  {
    eyebrow: "Now",
    title: "Reading Law",
    body: "An LLB (Hons) is complete and an LLM (Hons) is underway, bridging commercial acumen with legal expertise, case by case.",
  },
];

const principles = [
  {
    num: "01",
    title: "Build First, Theorise Later",
    body: "Every venture started as a real problem worth solving, not a plan on paper.",
  },
  {
    num: "02",
    title: "Depth Over Breadth",
    body: "Thirteen ventures, one standard of care applied to each of them.",
  },
  {
    num: "03",
    title: "Commerce Needs Counsel",
    body: "Understanding the law makes the businesses it protects stronger.",
  },
  {
    num: "04",
    title: "Support Compounds",
    body: "Helping other founders through accelerators pays back more than it costs.",
  },
  {
    num: "05",
    title: "Stay a Student",
    body: "An LLM at this stage is a choice to keep learning, not a requirement.",
  },
  {
    num: "06",
    title: "One Case, One Venture",
    body: "Progress is made a step at a time, not in leaps.",
  },
];

const missionBars = [
  { label: "Commercial Strategy", value: 95 },
  { label: "Legal Practice", value: 80 },
  { label: "Mentorship & Advisory", value: 90 },
];

const faqs = [
  {
    title: "What does the portfolio cover?",
    body: [
      "The thirteen ventures span technology, events, hospitality, and professional services, built up gradually since the first company launched in 2011.",
      "Each business was started to solve a specific, practical problem rather than to fit a theme, which is part of why the portfolio spans such different industries.",
    ],
  },
  {
    title: "Why study law after building businesses?",
    body: [
      "Years of running ventures surfaced the same question again and again: how does the law actually govern the commercial decisions being made day to day?",
      "The LLB (Hons) answered enough of that to be dangerous, and the LLM (Hons) now underway is about qualifying as a barrister and closing that gap properly.",
    ],
  },
  {
    title: "How are founders supported through accelerators?",
    body: [
      "Support runs through expos, accelerator programs, and hands-on digital transformation work, aimed at founders earlier in the journey.",
      "Thousands of businesses have been through one of these programs, drawing directly on lessons learned building the original portfolio.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  HELPERS                                                                   */
/* -------------------------------------------------------------------------- */

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="font-display text-4xl text-paper sm:text-5xl tabular-nums"
      >
        {display.toLocaleString()}
      </motion.div>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-paper/70">
        {label}
      </p>
    </div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-brass/30">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className={`font-display text-[17px] sm:text-lg ${
            isOpen ? "text-brass" : "text-[#0f2a2a]"
          }`}
        >
          {item.title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex h-6 w-6 flex-none items-center justify-center text-xl font-light ${
            isOpen ? "text-brass" : "text-[#0f2a2a]"
          }`}
        >
          +
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="space-y-4 pb-6 pr-8 text-[15px] leading-relaxed text-[#0f2a2a]/80">
          {item.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                     */
/* -------------------------------------------------------------------------- */

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="about" className="bg-paper">
      {/* -------------------------------------------------------------- */}
      {/* INTRO / BIO                                                    */}
      {/* -------------------------------------------------------------- */}
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-brass/40 bg-ink2 sm:h-72 sm:w-72"
        >
          <Image
            src="/images/246.png"
            alt="Nagendra Mishra - Profile"
            width={288}
            height={288}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.14em] text-[#0f2a2a]">
            About
          </span>
          <h2 className="max-w-[22ch] font-display text-[28px] leading-[1.2] text-[#0f2a2a] sm:text-[34px]">
            Building ventures, then learning the law that governs them
          </h2>
          <p className="mt-5 max-w-[58ch] text-[15.5px] text-[#0f2a2a]">
            The entrepreneurial journey began in 2011 from a coffee shop in
            Mumbai, founding a first software company that grew into a
            7-figure business. That grew into a 13-venture portfolio spanning
            tech, events, hospitality, and professional services — with
            thousands of businesses supported through expos, accelerator
            programs, and digital transformation work along the way.
          </p>
          <p className="mt-4 max-w-[58ch] text-[15.5px] text-[#0f2a2a]">
            Alongside the business pursuits, an LLB (Hons) is now complete and
            an LLM (Hons) is underway, with the ambition of qualifying as a
            barrister — bridging commercial acumen with legal expertise, one
            case and one venture at a time.
          </p>
        </motion.div>
      </div>

      {/* -------------------------------------------------------------- */}
      {/* STATS                                                          */}
      {/* -------------------------------------------------------------- */}
      <div className="bg-ink2">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      {/* JOURNEY / TIMELINE                                             */}
      {/* -------------------------------------------------------------- */}
      <div className="mx-auto max-w-[1080px] px-5 py-20 sm:px-8 sm:py-24">
        <motion.h3
          {...fadeUp(0)}
          className="max-w-2xl font-display text-[26px] leading-[1.2] text-[#0f2a2a] sm:text-[32px]"
        >
          The Journey So Far
        </motion.h3>

        <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2">
          {timeline.map((t, i) => (
            <motion.div key={t.title} {...fadeUp(i * 0.1)} className="flex gap-6">
              <div className="mt-2 h-px w-10 flex-none bg-brass" />
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#0f2a2a]/50">
                  {t.eyebrow}
                </span>
                <h4 className="mt-2 font-display text-lg text-[#0f2a2a]">
                  {t.title}
                </h4>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#0f2a2a]/75">
                  {t.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      {/* PRINCIPLES                                                     */}
      {/* -------------------------------------------------------------- */}
      <div className="mx-auto max-w-[1080px] px-5 py-20 sm:px-8 sm:py-24">
        <motion.span
          {...fadeUp(0)}
          className="mb-4 block font-mono text-xs uppercase tracking-[0.14em] text-[#0f2a2a]"
        >
          How the Work Gets Done
        </motion.span>
        <motion.h3
          {...fadeUp(0.05)}
          className="max-w-2xl font-display text-[26px] leading-[1.2] text-[#0f2a2a] sm:text-[32px]"
        >
          Principles Behind the Portfolio
        </motion.h3>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div key={p.num} {...fadeUp((i % 3) * 0.08)}>
              <span className="font-display text-2xl text-brass/50">
                {p.num}
              </span>
              <h4 className="mt-3 font-display text-base text-[#0f2a2a]">
                {p.title}
              </h4>
              <p className="mt-2 text-[15px] leading-relaxed text-[#0f2a2a]/75">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      {/* FOCUS AREAS                                                    */}
      {/* -------------------------------------------------------------- */}
      <div className="mx-auto max-w-[1080px] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            {...fadeUp(0)}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink2"
          >
            <Image
              src="/images/246.png"
              alt="At work"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-col justify-center rounded-lg border border-brass/30 bg-white/40 p-8 sm:p-10"
          >
            <h4 className="font-display text-2xl text-[#0f2a2a]">
              Where Time Goes
            </h4>
            <p className="mt-4 text-[15px] leading-relaxed text-[#0f2a2a]/75">
              Roughly how focus is split across the portfolio, the mentorship
              work, and the return to studying law.
            </p>

            <div className="mt-8 space-y-6">
              {missionBars.map((b, i) => (
                <div key={b.label}>
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.1em] text-brass">
                    <span>{b.label}</span>
                    <span className="text-[#0f2a2a]/60">{b.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-brass/15">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full bg-brass"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      {/* FAQ                                                            */}
      {/* -------------------------------------------------------------- */}
      <div className="mx-auto max-w-[760px] px-5 pb-24 sm:px-8 sm:pb-28">
        <motion.h3
          {...fadeUp(0)}
          className="font-display text-[26px] leading-[1.2] text-[#0f2a2a] sm:text-[32px]"
        >
          Common Questions
        </motion.h3>

        <div className="mt-10 border-t border-brass/30">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.title}
              item={f}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}