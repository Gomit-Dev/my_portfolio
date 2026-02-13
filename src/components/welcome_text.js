"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function TypingText() {
  const text =
    "A passionate Full Stack Developer building modern, scalable, and user-friendly web applications.";

  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <p className="text-lg md:text-xl my-8  text-white/80 max-w-3xl leading-relaxed border-l-5 border-yellow-400 pl-4 ">
      {display}
    </p>
  );
}

export default function Welcome() {
  const skillBalls = [
    {
      name: "Next.js",
      color: "border-green-500",
      icon: "/N_logo.png",
      hover: "hover:border-green-300",
    },
    {
      name: "React",
      color: "border-yellow-500",
      icon: "/R_logo.png",
      hover: "hover:border-yellow-300",
    },
    {
      name: "Node.js",
      color: "border-orange-500",
      icon: "/Node_logo.png",
      hover: "hover:border-orange-300",
    },
    {
      name: "MongoDB",
      color: "border-purple-500",
      icon: "/Mongodb_logo.png",
      hover: "hover:border-purple-300",
    },
    {
      name: "Github",
      color: "border-blue-500",
      icon: "/Github.png",
      hover: "hover:border-blue-300",
    },
  ];

  return (
    <div className="my-[5vh] mx-4 md:mx-10 text-start font-mono max-w-6xl">
      {/* Hero */}
      <div className="space-y-3">
        <h1 className="text-7xl md:text-8xl font-serif text-white/60">
          Hello,
        </h1>

        <div className="text-4xl md:text-5xl font-sans flex flex-wrap gap-3">
          <span className="text-white">I am</span>
          <span className="text-yellow-400 font-extrabold tracking-wide">
            Gomit Saha
          </span>
        </div>
      </div>

      {/* Typing text */}
      <TypingText />

      {/* Skills */}
      <div className="pt-5 mt-6 border-t-2 border-white/50">
        {/* <div className="pt-10 "> */}

        <div className="flex gap-6 flex-wrap justify-center">
          {skillBalls.map((skill, i) => (
            <div key={skill.name} style={{ animationDelay: `${i * 0.25}s` }}>
              <div className="flex flex-column">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={55}
                  height={55}
                  // className="object-contain"
                  className={`
                ${skill.color}
                h-20 w-20 md:h-24 md:w-24
                rounded-full
                flex flex-col items-center justify-center
                border-4
                shadow-xl
                opacity-0
                animate-rise
                transition-all duration-300
                hover:scale-110
                ${skill.hover}
              `}
                />
              </div>
              <div className="text-sm font-semibold text-center my-auto text-white/80 mt-1 ">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4 mt-12">
        <button
          className="px-6 py-2 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition"
          onClick={() => window.open("https://github.com/Gomit-Dev/", "_blank")}
        >
          View Projects
        </button>
        <button
          className="px-6 py-2 border border-white/40 rounded-md text-white hover:bg-white/10 transition"
          onClick={() => {
            document.getElementById("Contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
