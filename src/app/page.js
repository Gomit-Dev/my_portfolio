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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThoughtBox />
      <LeetCodeChart />
      <GitHubCard />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
