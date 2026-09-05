// app/contact/page.tsx
"use client";

import { motion, cubicBezier } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

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

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@example.com",
    link: "mailto:hello@example.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value: "123 Main Street, New York, NY 10001",
    link: "https://maps.google.com",
  },
];

const socialLinks = [
//   { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
//   { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-[#202020]">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-[1220px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-5 h-[2px] w-12 bg-[#ff5638]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff5638]">
              Get In Touch
            </p>

            <h1 className="mt-4 text-5xl font-extrabold uppercase leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[68px]">
              Let's Start A
              <br />
              <span className="text-[#ff5638]">Conversation</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Have questions, ideas, or want to collaborate? We'd love to hear
              from you. Reach out and let's create something meaningful together.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {contactInfo.map((item) => (
              <motion.a
                key={item.label}
                href={item.link}
                target={item.label === "Address" ? "_blank" : undefined}
                rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5638]/10 text-2xl text-[#ff5638] transition-colors group-hover:bg-[#ff5638] group-hover:text-white">
                  <item.icon />
                </div>

                <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-gray-500">
                  {item.label}
                </h3>

                <p className="mt-2 text-base font-semibold text-[#202020]">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
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
                <div className="mb-5 h-[2px] w-12 bg-[#ff5638]" />

                <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">
                  Send Us A Message
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormInput
                    label="First Name"
                    placeholder="Your first name"
                    required
                  />

                  <FormInput
                    label="Last Name"
                    placeholder="Your last name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormInput
                    label="Email"
                    placeholder="your@email.com"
                    type="email"
                    required
                  />

                  <FormInput
                    label="Phone"
                    placeholder="Phone number"
                    type="tel"
                  />
                </div>

                {/* Subject */}
                <div>
                  <FormInput
                    label="Subject"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide">
                    Message <span className="ml-1 text-[#ff5638]">*</span>
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project, questions, or ideas..."
                    required
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
                  Send Message
                  <span className="text-lg leading-none">→</span>
                </motion.button>
              </form>

              {/* Social Media Icons */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 border-t border-gray-200 pt-8"
              >
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-wide text-gray-500">
                  Connect With Us
                </p>

                <div className="flex justify-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#202020] transition-all duration-300 hover:bg-[#ff5638] hover:text-white hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Map / Location */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="lg:pt-14"
            >
              <div className="sticky top-24 overflow-hidden rounded-lg shadow-xl">
                <div className="relative h-[450px] w-full bg-gray-200 sm:h-[550px]">
                  {/* Google Maps iframe - Replace with your actual embed URL */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7ae4b%3A0xb0fd2e1ea563d3ad!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1644262070686!5m2!1sen!2sin"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />

                  {/* Overlay Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 shadow-xl backdrop-blur-sm"
                  >
                    <p className="text-sm font-bold uppercase text-[#ff5638]">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#202020]">
                      123 Main Street
                      <br />
                      New York, NY 10001
                    </p>
                  </motion.div>
                </div>
              </div>
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
            Let's Work Together
          </p>

          <h2 className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Ready To Make A
            <br />
            <span className="text-[#ff5638]">Difference?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-300">
            Whether you have a question, a project in mind, or just want to say
            hello — we're here to listen.
          </p>

          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-3 bg-[#ff5638] px-8 py-4 text-sm font-bold uppercase"
          >
            Email Us Directly
            <span className="text-lg leading-none">→</span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}

/* =========================================================
   FORM INPUT COMPONENT
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

        {required && <span className="ml-1 text-[#ff5638]">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-200 bg-white px-4 py-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#ff5638]"
      />
    </div>
  );
}