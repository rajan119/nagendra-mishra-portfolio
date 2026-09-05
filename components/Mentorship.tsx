"use client";

import { motion, cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const benefits = [
  "Personalized guidance and support",
  "Career and leadership development",
  "Practical knowledge and experience",
];

const mentorshipAreas = [
  {
    symbol: "◎",
    title: "Clear Direction",
    description:
      "Get clarity around your goals, challenges and the next steps needed to move forward.",
  },
  {
    symbol: "◉",
    title: "Personal Growth",
    description:
      "Develop confidence, leadership skills and the mindset required to create meaningful change.",
  },
  {
    symbol: "✦",
    title: "Practical Guidance",
    description:
      "Learn through real-world experience, actionable advice and focused mentorship.",
  },
];

export default function MentorshipPage() {
  return (
    <main className="overflow-hidden bg-white text-[#202020]">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* Content */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-7 h-[2px] w-12 bg-[#ff5638]" />

              <h1 className="max-w-[620px] text-5xl font-extrabold uppercase leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Together We Will
                <br />
                <span className="text-[#ff5638]">Achieve Change</span>
              </h1>

              <p className="mt-7 max-w-[500px] text-base leading-7 text-gray-600 sm:text-lg">
                Mentorship creates the opportunity to learn, grow and move
                forward with confidence. Through meaningful guidance and
                shared experience, we can turn ideas into action.
              </p>

              {/* Benefits */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-7 space-y-4"
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 text-sm font-bold text-[#ff5638]">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-gray-700 sm:text-base">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.a
                href="#mentorship-form"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-9 inline-flex items-center gap-3 bg-[#ff5638] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-shadow hover:shadow-xl"
              >
                Start Mentorship
                <span className="text-lg leading-none">→</span>
              </motion.a>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden"
              >
                <img
                  src="/images/Mentorship2.jpg"
                  alt="Mentorship and community"
                  className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[570px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Image Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-6 left-6 flex items-center gap-3 bg-white px-5 py-4 shadow-xl"
                >
                  <span className="text-xl text-[#ff5638]">✦</span>

                  <span className="text-sm font-bold uppercase">
                    Grow With Purpose
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MENTORSHIP / SUPPORT SECTION
      ====================================================== */}
      <section className="bg-[#f7f7f7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-6 h-[2px] w-12 bg-[#ff5638]" />

            <h2 className="max-w-[850px] text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[60px]">
              Your Growth Will Help Us
              <br className="hidden sm:block" />
              <span className="text-[#ff5638]">Create Greater Impact</span>
            </h2>
          </motion.div>

          {/* Video Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16"
          >
            <VideoCard
              image="/images/Mentorship2.jpg"
              videoUrl="https://youtu.be/aY_YRlS-U4Y?si=UYWr_FsXNrLxHfam"
              title="Learn From Experience"
            />

            <VideoCard
              image="/images/mentorship/mentorship-video-2.jpg"
              videoUrl="https://youtu.be/aY_YRlS-U4Y?si=Si3PTGAMzvfBWeKZ"
              title="Build Your Future"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MENTORSHIP BENEFITS
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          {/* Section Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-5 h-[2px] w-12 bg-[#ff5638]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5638]">
              Why Mentorship Matters
            </p>

            <h2 className="mt-4 text-4xl font-extrabold uppercase leading-tight tracking-[-0.03em] sm:text-5xl">
              Guidance That Creates
              <br />
              <span className="text-[#ff5638]">Real Possibilities</span>
            </h2>
          </motion.div>

          {/* Benefit Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {mentorshipAreas.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="border border-gray-200 bg-white p-8 transition-shadow hover:shadow-xl lg:p-10"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  className="flex h-14 w-14 items-center justify-center bg-[#ff5638] text-2xl font-bold text-white"
                >
                  {item.symbol}
                </motion.div>

                <h3 className="mt-7 text-xl font-extrabold uppercase">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BECOME A MENTEE / FORM
      ====================================================== */}
      <section
        id="mentorship-form"
        className="bg-white px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      >
        <div className="mx-auto max-w-[1220px]">
          {/* Form Heading */}
          <div className="mb-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-5 h-[2px] w-12 bg-[#ff5638]" />

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff5638]">
                Become A Mentee
              </p>

              <h2 className="mt-4 max-w-[600px] text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[58px]">
                Take The
                <br />
                <span className="text-[#ff5638]">Next Step</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <img
                  src="/images/Mentorship2.jpg"
                  alt="People working together"
                  className="h-[480px] w-full object-cover sm:h-[560px]"
                />
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold uppercase sm:text-3xl">
                  Let's Start A Conversation
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
                  Tell us a little about yourself, your goals and what you
                  would like to achieve through mentorship.
                </p>
              </div>

              <form className="space-y-5">
                {/* Name */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormInput
                    label="First Name"
                    placeholder="Your name"
                    required
                  />

                  <FormInput
                    label="Last Name"
                    placeholder="Your last name"
                  />
                </div>

                {/* Contact */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormInput
                    label="Phone"
                    placeholder="Phone number"
                    type="tel"
                  />

                  <FormInput
                    label="Email"
                    placeholder="Your email"
                    type="email"
                    required
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide">
                    Area of Interest
                  </label>

                  <select className="w-full border border-gray-200 bg-white px-4 py-4 text-sm outline-none transition-colors focus:border-[#ff5638]">
                    <option value="">Select an area</option>

                    <option value="career">
                      Career Development
                    </option>

                    <option value="leadership">
                      Leadership
                    </option>

                    <option value="business">
                      Business & Entrepreneurship
                    </option>

                    <option value="personal">
                      Personal Development
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide">
                    Message
                  </label>

                  <textarea
                    rows={7}
                    placeholder="Tell us about your goals..."
                    className="w-full resize-none border border-gray-200 px-4 py-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#ff5638]"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-3 bg-[#ff5638] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-shadow hover:shadow-xl"
                >
                  Send Request
                  <span className="text-lg leading-none">→</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section className="bg-[#202020] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-[1000px] text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5638]">
            Your Journey Starts Here
          </p>

          <h2 className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Learn. Grow.
            <br />
            <span className="text-[#ff5638]">Make An Impact.</span>
          </h2>

          <motion.a
            href="#mentorship-form"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-3 bg-[#ff5638] px-8 py-4 text-sm font-bold uppercase"
          >
            Become A Mentee
            <span className="text-lg leading-none">→</span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}

/* =========================================================
   VIDEO CARD
========================================================= */

function VideoCard({
  image,
  title,
  videoUrl,
}: {
  image: string;
  title: string;
  videoUrl?: string;
}) {
  const handleVideoClick = () => {
    if (videoUrl) {
      window.open(videoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={handleVideoClick}
      className={`group relative overflow-hidden ${
        videoUrl ? "cursor-pointer" : ""
      }`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1648ff] text-white shadow-xl sm:h-20 sm:w-20"
        >
          <span className="ml-1 text-2xl leading-none sm:text-3xl">
            ▶
          </span>
        </motion.div>
      </div>

      {/* Bottom Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
        <h3 className="text-xl font-bold uppercase text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide">
        {label}

        {required && (
          <span className="ml-1 text-[#ff5638]">*</span>
        )}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-200 px-4 py-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#ff5638]"
      />
    </div>
  );
}