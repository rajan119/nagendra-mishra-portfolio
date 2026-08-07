import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Timeline from "@/components/Timeline";
import Mediation from "@/components/Mediation";
import Community from "@/components/Community";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <StatStrip />
        <About />
        <Ventures />
        <Timeline />
        <Mediation />
        <Community />
        <Credentials />
      </main>
      <Footer />
    </div>
  );
}
