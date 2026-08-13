// app/page.tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";          // NEW
import Ventures from "@/components/Ventures";
import Timeline from "@/components/Timeline";
import Mediation from "@/components/Mediation";
import MindsetCoaching from "@/components/MindsetCoaching"; // NEW
import Community from "@/components/Community";
import Credentials from "@/components/Credentials";
import Books from "@/components/Books";            // NEW
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <StatStrip />
        <About />
        <Skills />           {/* NEW - Services section */}
        <Ventures />
        <Timeline />
        <Mediation />
        <MindsetCoaching />  {/* NEW - Mindset & Coaching */}
        <Community />
        <Credentials />
        <Books />            {/* NEW - Publications */}
      </main>
      <Footer />
    </div>
  );
}