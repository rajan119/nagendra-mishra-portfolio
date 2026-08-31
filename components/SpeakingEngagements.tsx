// pages/speaking-engagements.tsx (or app/speaking-engagements/page.tsx)
'use client';

import React, { useRef, useEffect, useState } from 'react';
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

// Timeline data
const timelineData = [
  {
    year: "2000",
    heading: "Creating jobs in small businesses",
    description: "Integer vitae justo eget magna. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tempor id eu nisl nunc mi faucibus.",
    points: [
      "Molestie ac feugiat sed",
      "Vestibulum ullamcorper",
      "Pulvinar pellentesque habitant"
    ]
  },
  {
    year: "2005",
    heading: "Affordable housing",
    description: "Integer vitae justo eget magna. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tempor id eu nisl nunc mi faucibus.",
    points: [
      "Molestie ac feugiat sed",
      "Vestibulum ullamcorper",
      "Pulvinar pellentesque habitant"
    ]
  },
  {
    year: "2010",
    heading: "Public safety",
    description: "Integer vitae justo eget magna. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tempor id eu nisl nunc mi faucibus.",
    points: [
      "Molestie ac feugiat sed",
      "Vestibulum ullamcorper",
      "Pulvinar pellentesque habitant"
    ]
  },
  {
    year: "2015",
    heading: "Environmental justice",
    description: "Integer vitae justo eget magna. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tempor id eu nisl nunc mi faucibus.",
    points: [
      "Molestie ac feugiat sed",
      "Vestibulum ullamcorper",
      "Pulvinar pellentesque habitant"
    ]
  },
  {
    year: "2020",
    heading: "Jobs and workers",
    description: "Integer vitae justo eget magna. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tempor id eu nisl nunc mi faucibus.",
    points: [
      "Molestie ac feugiat sed",
      "Vestibulum ullamcorper",
      "Pulvinar pellentesque habitant"
    ]
  }
];

export default function SpeakingEngagementsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollInterval: NodeJS.Timeout;
    let scrollDirection = 1; // 1 for down, -1 for up

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && container) {
          const maxScroll = container.scrollHeight - container.clientHeight;
          const currentScroll = container.scrollTop;
          
          // Check if at bottom
          if (currentScroll >= maxScroll - 2) {
            setIsAtBottom(true);
            scrollDirection = -1; // Change direction to up
          }
          
          // Check if at top
          if (currentScroll <= 2) {
            setIsAtBottom(false);
            scrollDirection = 1; // Change direction to down
          }

          // Scroll in current direction
          container.scrollBy({
            top: 1 * scrollDirection,
            behavior: 'smooth'
          });
        }
      }, 50);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      setIsPaused(true);
    };
    
    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPaused]);

  // Manual scroll controls
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsAtBottom(false);
    }
  };

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
      setIsAtBottom(true);
    }
  };

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
        className="min-h-screen bg-white font-sans antialiased py-10 md:py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* ===== HERO SECTION ===== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-red-200 pb-8"
          >
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-light text-red-600 tracking-wide flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <i className="fas fa-microphone-alt text-3xl text-red-400" />
                Speaking Engagements
              </motion.h1>
              <motion.p
                className="text-gray-600 text-lg mt-3 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-red-600 font-medium">“Follow the principles”</span> — 
                insightful keynotes, virtual congresses, and transformative dialogues.
              </motion.p>
            </div>
            <motion.div
              className="mt-4 md:mt-0 flex items-center gap-4 text-sm text-gray-500"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-red-50 px-4 py-1.5 rounded-full border border-red-200">
                <i className="far fa-calendar-alt mr-2 text-red-400" /> 2026 season
              </span>
              <span className="bg-red-50 px-4 py-1.5 rounded-full border border-red-200">
                <i className="far fa-clock mr-2 text-red-400" /> virtual &amp; live
              </span>
            </motion.div>
          </motion.div>

          {/* ===== MORE ABOUT MAYKE SCHUURS + CREATING JOBS ===== */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Left: more about Mayke + Timeline Cards with Auto-Scroll */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* More about Mayke card */}
              <motion.div
                className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:bg-gray-100 hover:border-red-300 transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-300">
                    <Image
                      src="/images/SpeakingEngagements6.jpg"
                      alt="Mayke Schuurs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-red-600 text-2xl font-light">More about Mayke</h2>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">
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
                        <i className="fas fa-check-circle text-red-500 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    )
                  )}
                </ul>
                <motion.div
                  className="mt-6 pt-5 border-t border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="inline-block bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs tracking-wider">
                    <i className="fas fa-bullhorn mr-2" /> Social sciences · 21st century
                  </span>
                </motion.div>
              </motion.div>

              {/* Timeline Cards with Auto-Scroll */}
              <motion.div
                className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden"
                whileHover={{ borderColor: '#ef4444' }}
                transition={{ duration: 0.3 }}
              >
                {/* Scroll Controls */}
                <div className="absolute top-2 right-2 z-10 flex gap-1">
                  <button
                    onClick={scrollToTop}
                    className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-red-50 transition-colors text-red-400 hover:text-red-600 text-xs"
                    title="Scroll to top"
                  >
                    <i className="fas fa-chevron-up" />
                  </button>
                  <button
                    onClick={scrollToBottom}
                    className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-red-50 transition-colors text-red-400 hover:text-red-600 text-xs"
                    title="Scroll to bottom"
                  >
                    <i className="fas fa-chevron-down" />
                  </button>
                </div>

                {/* Auto-scroll container */}
                <div
                  ref={scrollContainerRef}
                  className="max-h-[400px] overflow-y-auto scroll-smooth p-4 space-y-4 custom-scrollbar"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#ef4444 #f3f4f6'
                  }}
                >
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-red-300 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: '#fef2f2',
                        transition: { duration: 0.2 }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <span className="inline-block bg-red-100 text-red-600 font-bold text-xs px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-red-600 font-medium text-sm leading-tight">
                            {item.heading}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                          <ul className="mt-2 space-y-1">
                            {item.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-gray-500">
                                <i className="fas fa-circle text-red-400 text-[6px] mt-1.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Auto-scroll indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      y: [0, 3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-[8px] uppercase tracking-widest text-gray-400 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5"
                  >
                    <i className={`fas fa-arrow-${isAtBottom ? 'up' : 'down'} mr-0.5`} />
                    Auto-scroll {isAtBottom ? '(up)' : '(down)'}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* ===== SPEAKING ENGAGEMENTS (3 cards) ===== */}
            <motion.div variants={containerVariants} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* card 1: World Congress virtual */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-red-300 hover:shadow-lg transition-all duration-300"
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
                <div className="relative w-full  h-[400px] rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <Image
                   src="/images/SpeakingEngagements2.jpg"
                    alt="World Congress Virtual"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <span className="bg-red-50 text-red-600 text-[10px] tracking-widest px-3 py-1 rounded-full border border-red-200">
                    <i className="fas fa-video mr-1" /> VIRTUAL
                  </span>
                  <i className="far fa-calendar-alt text-red-300 text-sm" />
                </div>
                <h3 className="text-red-600 text-xl font-light mt-3">World Congress – Virtual</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">
                  Welcome to Our Event. Cursus metus aliquam eleifend mi in nulla posuere 
                  sollicitudin aliquam. Dolor...
                </p>
                <div className="mt-4 flex items-center text-xs text-gray-400">
                  <i className="fas fa-map-pin mr-2 text-red-300" /> online · 2026
                </div>
              </motion.div>

              {/* card 2: World Congress virtual (second) */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-red-300 hover:shadow-lg transition-all duration-300"
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
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src="/images/SpeakingEngagements3.jpg"
                    alt="Virtual Summit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <span className="bg-red-50 text-red-600 text-[10px] tracking-widest px-3 py-1 rounded-full border border-red-200">
                    <i className="fas fa-video mr-1" /> VIRTUAL
                  </span>
                  <i className="far fa-calendar-alt text-red-300 text-sm" />
                </div>
                <h3 className="text-red-600 text-xl font-light mt-3">World Congress – Virtual</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">
                  Welcome to Our Event. Cursus metus aliquam eleifend mi in nulla posuere 
                  sollicitudin aliquam. Dolor...
                </p>
                <div className="mt-4 flex items-center text-xs text-gray-400">
                  <i className="fas fa-map-pin mr-2 text-red-300" /> online · 2026
                </div>
              </motion.div>

              {/* card 3: Election day is coming */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:col-span-2 hover:border-red-300 hover:shadow-lg transition-all duration-300"
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
                <div className="relative w-full h-[460px] rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src="/images/SpeakingEngagements6.jpg"
                    alt="Election Day"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <span className="bg-red-50 text-red-600 text-[10px] tracking-widest px-3 py-1 rounded-full border border-red-200">
                    <i className="fas fa-flag mr-1" /> FEATURED
                  </span>
                  <i className="far fa-calendar-alt text-red-300 text-sm" />
                </div>
                <h3 className="text-red-600 text-xl font-light mt-3">Election Day is Coming</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Welcome to Our Event. Cursus metus aliquam eleifend mi in nulla posuere 
                  sollicitudin aliquam. Dolor...
                </p>
                <div className="mt-4 flex items-center text-xs text-gray-400">
                  <i className="fas fa-map-pin mr-2 text-red-300" /> Washington D.C. · 2026
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
              <h2 className="text-2xl font-light text-red-600 relative after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-red-500 after:mt-2 after:rounded">
                Latest News
              </h2>
              <span className="h-px flex-1 bg-gray-200" />
              <motion.a
                href="#"
                className="text-xs uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
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
                  image: '/images/SpeakingEngagements7.jpg',
                },
                {
                  title: 'Coronavirus disease 2019',
                  description: 'COVID-19 is a contagious disease caused by the coronavirus SARS-CoV-2. In January...',
                  image: '/images/SpeakingEngagements7.jpg',
                },
                {
                  title: 'Coronavirus disease 2019',
                  description: 'COVID-19 is a contagious disease caused by the coronavirus SARS-CoV-2. In January...',
                  image: '/images/SpeakingEngagements8.jpg',
                },
              ].map((news, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { type: 'spring', stiffness: 400, damping: 20 },
                  }}
                >
                  <div className="relative w-full h-36 rounded-lg overflow-hidden mb-3 bg-gray-100">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-start gap-2 text-red-400 text-sm">
                    <i className="fas fa-newspaper mt-1" />
                    <span className="text-[10px] tracking-widest uppercase bg-red-50 px-2 py-0.5 rounded-full text-red-600">covid-19</span>
                  </div>
                  <h4 className="text-red-600 text-lg font-light mt-3">{news.title}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{news.description}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
                    <span><i className="far fa-calendar mr-1" /> 2026</span>
                    <motion.a
                      href="#"
                      className="text-red-400 hover:text-red-600 transition"
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
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-600 text-sm tracking-wider border-b border-red-200 pb-1 transition-all"
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <span>Read more...</span>
                <i className="fas fa-arrow-right text-xs" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom CSS for scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
      `}</style>
    </>
  );
}