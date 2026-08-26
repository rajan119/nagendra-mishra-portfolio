// pages/speaking-engagements.tsx (or app/speaking-engagements/page.tsx)
'use client'; // Add this for Next.js 13+ App Router

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Framer Motion variants for staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function SpeakingEngagementsPage() {
  return (
    <>
      <Head>
        <title>Mayke Schuurs · Speaking Engagements</title>
        <meta name="description" content="Speaking engagements by Mayke Schuurs" />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-[#0f2a2a] font-sans antialiased py-10 md:py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* ===== HERO SECTION ===== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#b5a06b]/10 pb-8"
          >
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-light text-[#b5a06b] tracking-wide flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <i className="fas fa-microphone-alt text-3xl text-[#b5a06b]/60" />
                Speaking Engagements
              </motion.h1>
              <motion.p
                className="text-[rgba(245,235,220,0.6)] text-lg mt-3 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-[#b5a06b] font-medium">“Follow the principles”</span> — 
                insightful keynotes, virtual congresses, and transformative dialogues.
              </motion.p>
            </div>
            <motion.div
              className="mt-4 md:mt-0 flex items-center gap-4 text-sm text-[rgba(245,235,220,0.5)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-[#b5a06b]/10 px-4 py-1.5 rounded-full border border-[#b5a06b]/20">
                <i className="far fa-calendar-alt mr-2 text-[#b5a06b]/70" /> 2026 season
              </span>
              <span className="bg-[#b5a06b]/10 px-4 py-1.5 rounded-full border border-[#b5a06b]/20">
                <i className="far fa-clock mr-2 text-[#b5a06b]/70" /> virtual &amp; live
              </span>
            </motion.div>
          </motion.div>

          {/* ===== MORE ABOUT MAYKE SCHUURS + CREATING JOBS ===== */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Left: more about Mayke + principles */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <motion.div
                className="bg-[rgba(255,248,235,0.03)] backdrop-blur-sm border border-[#b5a06b]/10 rounded-2xl p-7 hover:bg-[rgba(255,248,235,0.07)] hover:border-[#b5a06b]/30 transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#b5a06b]/30">
                    <Image
                      src="/images/mayke-schuurs.jpg"
                      alt="Mayke Schuurs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-[#b5a06b] text-2xl font-light">More about Mayke</h2>
                </div>
                <p className="mt-4 text-[rgba(245,235,220,0.6)] leading-relaxed">
                  Integer vitae justo eget magna. Rhoncus dolor purus non enim praesent 
                  elementum facilisis leo vel. Tempor id eu nisl nunc mi faucibus.
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {['Molestie ac feugiat sed', 'Vestibulum ullamcorper', 'Pulvnar pellentesque habitant'].map(
                    (item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      >
                        <i className="fas fa-check-circle text-[#b5a06b] mt-0.5" />
                        <span className="text-[rgba(245,235,220,0.7)]">{item}</span>
                      </motion.li>
                    )
                  )}
                </ul>
                <motion.div
                  className="mt-6 pt-5 border-t border-[#b5a06b]/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="inline-block bg-[#b5a06b]/10 text-[#b5a06b] px-4 py-1.5 rounded-full text-xs tracking-wider">
                    <i className="fas fa-bullhorn mr-2" /> Social sciences · 21st century
                  </span>
                </motion.div>
              </motion.div>

              {/* Social sciences card */}
              <motion.div
                className="bg-[rgba(255,248,235,0.03)] backdrop-blur-sm border border-[#b5a06b]/10 rounded-2xl p-7 hover:bg-[rgba(255,248,235,0.07)] hover:border-[#b5a06b]/30 transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3">
                  <i className="fas fa-globe-americas text-2xl text-[#b5a06b]/60" />
                  <h3 className="text-[#b5a06b] text-xl font-light">Social Sciences<br /><span className="text-sm text-[rgba(245,235,220,0.5)]">in the 21st century</span></h3>
                </div>
                <p className="mt-3 text-[rgba(245,235,220,0.6)] text-sm leading-relaxed">
                  Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
                </p>
              </motion.div>
            </motion.div>

            {/* ===== SPEAKING ENGAGEMENTS (3 cards) ===== */}
            <motion.div variants={containerVariants} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* card 1: World Congress virtual */}
              <motion.div
                variants={itemVariants}
                className="bg-[rgba(255,248,235,0.03)] backdrop-blur-sm border border-[#b5a06b]/10 rounded-2xl p-6 flex flex-col hover:bg-[rgba(255,248,235,0.07)] hover:border-[#b5a06b]/30 transition-all duration-300"
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  },
                }}
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/world-congress.jpg"
                    alt="World Congress Virtual"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <span className="bg-[#b5a06b]/10 text-[#b5a06b] text-[10px] tracking-widest px-3 py-1 rounded-full border border-[#b5a06b]/20">
                    <i className="fas fa-video mr-1" /> VIRTUAL
                  </span>
                  <i className="far fa-calendar-alt text-[#b5a06b]/40 text-sm" />
                </div>
                <h3 className="text-[#b5a06b] text-xl font-light mt-3">World Congress – Virtual</h3>
                <p className="text-[rgba(245,235,220,0.6)] text-sm mt-2 leading-relaxed flex-1">
                  Welcome to Our Event. Cursus metus aliquam eleifend mi in nulla posuere 
                  sollicitudin aliquam. Dolor...
                </p>
                <div className="mt-4 flex items-center text-xs text-[rgba(245,235,220,0.4)]">
                  <i className="fas fa-map-pin mr-2 text-[#b5a06b]/40" /> online · 2026
                </div>
              </motion.div>

              {/* card 2: World Congress virtual (second) */}
              <motion.div
                variants={itemVariants}
                className="bg-[rgba(255,248,235,0.03)] backdrop-blur-sm border border-[#b5a06b]/10 rounded-2xl p-6 flex flex-col hover:bg-[rgba(255,248,235,0.07)] hover:border-[#b5a06b]/30 transition-all duration-300"
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  },
                }}
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/virtual-summit.jpg"
                    alt="Virtual Summit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <span className="bg-[#b5a06b]/10 text-[#b5a06b] text-[10px] tracking-widest px-3 py-1 rounded-full border border-[#b5a06b]/20">
                    <i className="fas fa-video mr-1" /> VIRTUAL
                  </span>
                  <i className="far fa-calendar-alt text-[#b5a06b]/40 text-sm" />
                </div>
                <h3 className="text-[#b5a06b] text-xl font-light mt-3">World Congress – Virtual</h3>
                <p className="text-[rgba(245,235,220,0.6)] text-sm mt-2 leading-relaxed flex-1">
                  Welcome to Our Event. Cursus metus aliquam eleifend mi in nulla posuere 
                  sollicitudin aliquam. Dolor...
                </p>
                <div className="mt-4 flex items-center text-xs text-[rgba(245,235,220,0.4)]">
                  <i className="fas fa-map-pin mr-2 text-[#b5a06b]/40" /> online · 2026
                </div>
              </motion.div>

              {/* card 3: Election day is coming */}
              <motion.div
                variants={itemVariants}
                className="bg-[rgba(255,248,235,0.03)] backdrop-blur-sm border border-[#b5a06b]/10 rounded-2xl p-6 flex flex-col sm:col-span-2 hover:bg-[rgba(255,248,235,0.07)] hover:border-[#b5a06b]/30 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  y: -6,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  },
                }}
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/election-day.jpg"
                    alt="Election Day"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <span className="bg-[#b5a06b]/10 text-[#b5a06b] text-[10px] tracking-widest px-3 py-1 rounded-full border border-[#b5a06b]/20">
                    <i className="fas fa-flag mr-1" /> FEATURED
                  </span>
                  <i className="far fa-calendar-alt text-[#b5a06b]/40 text-sm" />
                </div>
                <h3 className="text-[#b5a06b] text-xl font-light mt-3">Election Day is Coming</h3>
                <p className="text-[rgba(245,235,220,0.6)] text-sm mt-2 leading-relaxed">
                  Welcome to Our Event. Cursus metus aliquam eleifend mi in nulla posuere 
                  sollicitudin aliquam. Dolor...
                </p>
                <div className="mt-4 flex items-center text-xs text-[rgba(245,235,220,0.4)]">
                  <i className="fas fa-map-pin mr-2 text-[#b5a06b]/40" /> Washington D.C. · 2026
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ===== LATEST NEWS (3 columns) ===== */}
          <motion.div
            variants={containerVariants}
            className="mt-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-light text-[#b5a06b] relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-[#b5a06b] after:mt-2 after:rounded">
                Latest News
              </h2>
              <span className="h-px flex-1 bg-[#b5a06b]/10" />
              <motion.a
                href="#"
                className="text-xs uppercase tracking-widest text-[#b5a06b]/60 hover:text-[#b5a06b] transition-colors"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                Read more <i className="fas fa-arrow-right ml-1" />
              </motion.a>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* news cards with staggered animation */}
              {[
                {
                  title: 'Coronavirus disease 2019',
                  description: 'COVID-19 is a contagious disease caused by the coronavirus SARS-CoV-2. In January...',
                  image: '/images/covid-news-1.jpg',
                },
                {
                  title: 'Coronavirus disease 2019',
                  description: 'COVID-19 is a contagious disease caused by the coronavirus SARS-CoV-2. In January...',
                  image: '/images/covid-news-2.jpg',
                },
                {
                  title: 'Coronavirus disease 2019',
                  description: 'COVID-19 is a contagious disease caused by the coronavirus SARS-CoV-2. In January...',
                  image: '/images/covid-news-3.jpg',
                },
              ].map((news, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="bg-[rgba(255,248,235,0.03)] backdrop-blur-sm border border-[#b5a06b]/10 rounded-2xl p-6 hover:bg-[rgba(255,248,235,0.07)] hover:border-[#b5a06b]/30 transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { type: 'spring', stiffness: 400, damping: 20 },
                  }}
                >
                  <div className="relative w-full h-36 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-start gap-2 text-[#b5a06b]/70 text-sm">
                    <i className="fas fa-newspaper mt-1" />
                    <span className="text-[10px] tracking-widest uppercase bg-[#b5a06b]/5 px-2 py-0.5 rounded-full">covid-19</span>
                  </div>
                  <h4 className="text-[#b5a06b] text-lg font-light mt-3">{news.title}</h4>
                  <p className="text-[rgba(245,235,220,0.6)] text-sm mt-2 leading-relaxed">{news.description}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-[rgba(245,235,220,0.4)]">
                    <span><i className="far fa-calendar mr-1" /> 2026</span>
                    <motion.a
                      href="#"
                      className="text-[#b5a06b]/60 hover:text-[#b5a06b] transition"
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    >
                      Read more <i className="fas fa-arrow-right ml-1 text-[10px]" />
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* bottom read more link */}
            <motion.div variants={itemVariants} className="flex justify-end mt-8">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-[#b5a06b]/70 hover:text-[#b5a06b] text-sm tracking-wider border-b border-[#b5a06b]/20 pb-1 transition-all"
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <span>Read more...</span>
                <i className="fas fa-arrow-right text-xs" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}