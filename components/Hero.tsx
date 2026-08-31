"use client";

import Image from 'next/image';
import StampBadge from "./StampBadge";
import { motion } from "framer-motion";

export default function Hero() {
  const text = "resolved.";
  
  return (
    <section className="bg-white overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-11 px-5 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 block font-mono text-xs uppercase tracking-[0.14em] text-red-600"
          >
            Ref. Nagendra Mishra / 2007—2026 · Southampton, England
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-[15ch] font-display text-[38px] leading-[1.08] tracking-tight text-black sm:text-[48px] lg:text-[60px]"
          >
            Business built. Disputes{" "}
            <motion.span 
              className="text-red-600 italic inline-block"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 20,
                      scale: 0.8
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 200
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>{" "}
            Growth engineered.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-[46ch] text-[16.5px] text-black/60"
          >
            Serial entrepreneur, accredited mediator, and business strategist
            with 16+ years scaling ventures across technology, events,
            hospitality, and professional services — now reading for the Bar
            to bring legal discipline into commercial strategy.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <motion.a
              href="#ventures"
              className="rounded-sm bg-red-600 px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#cc0000] cursor-pointer inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View the ventures
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nagzz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-black/25 px-6 py-3 font-mono text-[12.5px] uppercase tracking-[0.06em] text-black transition-colors hover:border-red-600 hover:text-red-600 cursor-pointer inline-block"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#dc2626"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <StampBadge
              id="ring-hero"
              ringText="ACCREDITED MEDIATOR · FOUNDER SINCE 2007 · "
              className="h-[min(230px,70vw)] w-[min(230px,70vw)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}