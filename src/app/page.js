import Image from "next/image";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ThoughtBox from "@/components/thought";
import Hero from "@/components/welcome-banner";
import SkillBars from "@/components/SkillBars";
import CodingStats from "@/components/CodingStats";
import TechStack from "@/components/TechStack";
import ResumeViewer from "@/components/ResumeViewer";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import ExperienceTimeline from "@/components/ExperienceTimeline";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThoughtBox />
    <CodingStats />
    <SkillBars />
      <Projects />
    <Certificates />
    <ResumeViewer />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
