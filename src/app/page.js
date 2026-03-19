import Image from "next/image";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import GitHubCard from "@/components/github";
import LeetCodeChart from "@/components/leet_streak";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ThoughtBox from "@/components/thought";
import Hero from "@/components/welcome-banner";
import SkillBars from "@/components/SkillBars";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThoughtBox />
      <LeetCodeChart />
      <GitHubCard />
      <Projects />
    <SkillBars />
  <TechStack />
  <ExperienceTimeline />
  <Achievements />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
