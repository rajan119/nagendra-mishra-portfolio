// app/contact/page.tsx
"use client";

import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight
} from "react-icons/fa";

// ============================================================
// ANIMATION VARIANTS
// ============================================================

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

// Text reveal animation
const textReveal = {
  hidden: { 
    opacity: 0, 
    y: 30,
    clipPath: "inset(0 0 100% 0)"
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

// Scale and fade
const scaleFade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

// Floating animation for icons
const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// ============================================================
// DATA
// ============================================================

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@example.com",
    link: "mailto:hello@example.com",
    color: "hover:bg-blue-500",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "hover:bg-green-500",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value: "123 Main Street, New York, NY 10001",
    link: "https://maps.google.com",
    color: "hover:bg-red-500",
  },
];

const socialLinks = [
//   { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "#1877f2" },
//   { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "#000000" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "#e4405f" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn", color: "#0a66c2" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube", color: "#ff0000" },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="overflow-hidden bg-white text-[#202020]">
      
      {/* =====================================================
          HERO SECTION WITH PARALLAX
      ====================================================== */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto max-w-[1220px]"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Animated Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 48, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto mb-5 h-[2px] bg-[#ff5638]"
            />

            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5638]">
                Get In Touch
              </p>
            </motion.div>

            {/* Text Reveal Heading */}
            <motion.h1
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 text-5xl font-extrabold uppercase leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[68px]"
            >
              Let's Start A
              <br />
              <motion.span
                initial={{ color: "#202020" }}
                whileInView={{ color: "#ff5638" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#ff5638]"
              >
                Conversation
              </motion.span>
            </motion.h1>

            {/* Animated Paragraph with Typewriter Effect */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg"
            >
              Have questions, ideas, or want to collaborate? We'd love to hear
              from you. Reach out and let's create something meaningful together.
            </motion.p>
          </motion.div>

          {/* Contact Info Cards with 3D Hover */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.link}
                target={item.label === "Address" ? "_blank" : undefined}
                rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:border-[#ff5638]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                //   animate={hoveredIndex === index ? floatAnimation : {}}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5638]/10 text-2xl text-[#ff5638] transition-all duration-300 group-hover:bg-[#ff5638] group-hover:text-white group-hover:shadow-lg"
                >
                  <item.icon />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="mt-5 text-sm font-bold uppercase tracking-wide text-gray-500"
                >
                  {item.label}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="mt-2 text-base font-semibold text-[#202020]"
                >
                  {item.value}
                </motion.p>

                {/* Hover Indicator Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: 30 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 h-[2px] bg-[#ff5638]"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT FORM + MAP SECTION
      ====================================================== */}
      <section className="bg-[#f7f7f7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.6 }}
                  className="mb-5 h-[2px] bg-[#ff5638]"
                />

                <motion.h2
                  variants={textReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-3xl font-extrabold uppercase sm:text-4xl"
                >
                  Send Us A Message
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-3 text-sm leading-6 text-gray-600"
                >
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </motion.p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name - with stagger animation */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <motion.div variants={fadeUp}>
                    <FormInput
                      label="First Name"
                      placeholder="Your first name"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <FormInput
                      label="Last Name"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </motion.div>

                {/* Email & Phone */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <motion.div variants={fadeUp}>
                    <FormInput
                      label="Email"
                      placeholder="your@email.com"
                      type="email"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <FormInput
                      label="Phone"
                      placeholder="Phone number"
                      type="tel"
                    />
                  </motion.div>
                </motion.div>

                {/* Subject */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FormInput
                    label="Subject"
                    placeholder="What is this regarding?"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide">
                    Message <span className="ml-1 text-[#ff5638]">*</span>
                  </label>

                  <motion.textarea
                    rows={6}
                    placeholder="Tell us about your project, questions, or ideas..."
                    required
                    whileFocus={{ scale: 1.01, borderColor: "#ff5638" }}
                    transition={{ duration: 0.2 }}
                    className="w-full resize-none border border-gray-200 bg-white px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#ff5638] focus:shadow-lg"
                  />
                </motion.div>

                {/* Submit Button with Ripple Effect */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative overflow-hidden"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-3 bg-[#ff5638] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:shadow-xl"
                  >
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-lg leading-none"
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.button>
                </motion.div>
              </form>

              {/* Social Media Icons with Enhanced Animations */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 border-t border-gray-200 pt-8"
              >
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 text-center text-xs font-bold uppercase tracking-wide text-gray-500"
                >
                  Connect With Us
                </motion.p>

                <div className="flex justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20, rotate: -45 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 0],
                        backgroundColor: social.color,
                        color: "#ffffff",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#202020] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Map / Location with Parallax */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="lg:pt-14"
            >
              <motion.div 
                className="sticky top-24 overflow-hidden rounded-lg shadow-xl"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[450px] w-full bg-gray-200 sm:h-[550px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7ae4b%3A0xb0fd2e1ea563d3ad!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1644262070686!5m2!1sen!2sin"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />

                  {/* Animated Overlay Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 shadow-xl backdrop-blur-sm"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-sm font-bold uppercase text-[#ff5638]"
                    >
                      Visit Us
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="mt-1 text-sm font-semibold text-[#202020]"
                    >
                      123 Main Street
                      <br />
                      New York, NY 10001
                    </motion.p>

                    {/* Animated pulse dot */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute right-5 top-5 h-3 w-3 rounded-full bg-[#ff5638]"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION WITH INTERACTIVE PARTICLES
      ====================================================== */}
      <section className="relative bg-[#202020] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24 overflow-hidden">
        {/* Animated Background Circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#ff5638]/5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[#ff5638]/5 blur-3xl"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1000px] text-center z-10"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5638]"
          >
            Let's Work Together
          </motion.p>

          <motion.h2
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            Ready To Make A
            <br />
            <motion.span
              initial={{ color: "#ffffff" }}
              whileInView={{ color: "#ff5638" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[#ff5638]"
            >
              Difference?
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-300"
          >
            Whether you have a question, a project in mind, or just want to say
            hello — we're here to listen.
          </motion.p>

          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 86, 56, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group mt-9 inline-flex items-center gap-3 bg-[#ff5638] px-8 py-4 text-sm font-bold uppercase transition-all duration-300"
          >
            Email Us Directly
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg leading-none"
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}

/* =========================================================
   FORM INPUT COMPONENT WITH ENHANCED ANIMATIONS
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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <motion.label
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-2 block text-xs font-bold uppercase tracking-wide"
      >
        {label}
        {required && <span className="ml-1 text-[#ff5638]">*</span>}
      </motion.label>

      <motion.input
        type={type}
        placeholder={placeholder}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        animate={{
          borderColor: isFocused ? "#ff5638" : "#e5e7eb",
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused ? "0 4px 20px rgba(255, 86, 56, 0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="w-full border bg-white px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400"
        style={{ borderColor: isFocused ? "#ff5638" : "#e5e7eb" }}
      />
    </div>
  );
}