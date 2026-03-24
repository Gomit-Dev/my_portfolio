"use client";

import Image from "next/image";

export default function SkillBars() {
  const data = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Intermediate", icon: "/python.svg", color: "#3776AB" },
        { name: "Java", level: "Intermediate", icon: "/java.svg", color: "#b07219" },
        { name: "C++", level: "Advanced", icon: "/cpp.svg", color: "#00599C" },
        { name: "C", level: "Intermediate", icon: "/c.svg", color: "#A8B9CC" },
        { name: "Kotlin", level: "Advanced", icon: "/kotlin.svg", color: "#7F52FF" },
        { name: "JavaScript", level: "Advanced", icon: "/js.svg", color: "#f7df1e" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "/html.svg", color: "#e34c26" },
        { name: "CSS3", level: "Advanced", icon: "/css.svg", color: "#264de4" },
        { name: "React", level: "Intermediate", icon: "/react.svg", color: "#61DAFB" },
        { name: "Next.js", level: "Intermediate", icon: "/next.svg", color: "#ffffff" },
        { name: "Tailwind", level: "Advanced", icon: "/tailwind.svg", color: "#38BDF8" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "/node.svg", color: "#83cd29" },
        { name: "Express.js", level: "Intermediate", icon: "/express.svg", color: "#ffffff" },
        { name: "PHP", level: "Intermediate", icon: "/php.svg", color: "#777BB4" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: "/mysql.svg", color: "#00758f" },
        { name: "MongoDB", level: "Intermediate", icon: "/mongodb.svg", color: "#47A248" },
        { name: "Firebase", level: "Advanced", icon: "/firebase.svg", color: "#FFCA28" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Basic", icon: "/aws.svg", color: "#ff9900" },
        { name: "Docker", level: "Basic", icon: "/docker.svg", color: "#007bba" },
        { name: "Vercel", level: "Intermediate", icon: "/vercel.svg", color: "#ffffff" },
        { name: "Linux", level: "Intermediate", icon: "/linux.svg", color: "#FCC624" },
        { name: "GitHub", level: "Intermediate", icon: "/github.svg", color: "#ffffff" },
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-black via-zinc-950 to-black py-28 px-4 md:px-10 text-white">

      <h2 className="text-4xl md:text-5xl font-semibold mb-16 border-l-4 border-yellow-400 pl-4">
        Skills & Technologies
      </h2>

      <div className="space-y-16">
        {data.map((row) => (
          <div
            key={row.category}
            className="grid grid-cols-1 md:grid-cols-5 items-center border-t border-white/10 pt-10"
          >
            
            <div className="md:col-span-1 text-center md:text-left text-white/60 font-semibold tracking-wide mb-6 md:mb-0">
              {row.category}
            </div>

            <div className="md:col-span-4 flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">

              {row.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center opacity-0 animate-slideIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >

                  <div className="relative group">
                    
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500"
                      style={{
                        background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                      }}
                    />

                    <div
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{
                        border: `1px solid ${skill.color}`,
                      }}
                    />

                    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl transition duration-500 group-hover:scale-125 group-hover:rotate-3">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className={`object-contain ${
                          skill.name === "Next.js" ||
                          skill.name === "Express.js" ||
                          skill.name === "GitHub" ||
                          skill.name === "Vercel"
                            ? "invert"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="text-xs md:text-sm mt-3 text-center">
                    {skill.name}
                  </div>

                  <div className="text-[10px] md:text-xs text-yellow-400/90">
                    ({skill.level})
                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
