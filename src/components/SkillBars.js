"use client";

import Image from "next/image";

export default function SkillBars() {
  const data = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced", icon: "/python.svg", color: "#3776AB" },
        { name: "Java", level: "", icon: "/java.svg", color: "#b07219" },
        { name: "C++", level: "", icon: "/cpp.svg", color: "#00599C" },
        { name: "JavaScript", level: "Advanced", icon: "/js.svg", color: "#f7df1e" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "/html.svg", color: "#e34c26" },
        { name: "CSS3", level: "Advanced", icon: "/css.svg", color: "#264de4" },
        { name: "Next.js", level: "Intermediate", icon: "/next.svg", color: "#ffffff" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "/node.svg", color: "#83cd29" },
        { name: "Express.js", level: "Intermediate", icon: "/express.svg", color: "#ffffff" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: "/mysql.svg", color: "#00758f" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Intermediate", icon: "/aws.svg", color: "#ff9900" },
        { name: "Docker", level: "Intermediate", icon: "/docker.svg", color: "#007bba" },
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-black via-zinc-950 to-black py-20 md:py-28 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-5xl font-semibold mb-12 md:mb-16 border-l-4 border-yellow-400 pl-4">
        Skills & Technologies
      </h2>

      <div className="space-y-14 md:space-y-16">
        {data.map((row) => (
          <div
            key={row.category}
            className="border-t border-white/10 pt-8 md:pt-10"
          >
            
            {/* CATEGORY */}
            <div className="mb-6 text-lg md:text-xl text-white/70 font-semibold text-center md:text-left">
              {row.category}
            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">

              {row.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center opacity-0 animate-slideIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >

                  <div className="relative group">
                    
                    <div
                      className="absolute inset-0 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition"
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

                    <div
                      className="relative w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl transition duration-300 group-hover:scale-110"
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className={`object-contain ${
                          skill.name === "Next.js" || skill.name === "Express.js"
                            ? "invert"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="text-xs md:text-sm mt-3 text-center">
                    {skill.name}
                  </div>

                  {skill.level && (
                    <div className="text-[10px] md:text-xs text-yellow-400/90">
                      ({skill.level})
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
