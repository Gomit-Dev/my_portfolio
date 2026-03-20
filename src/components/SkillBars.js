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
    <div className="w-full bg-gradient-to-b from-black via-zinc-950 to-black py-28 px-4 md:px-10 text-white">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 border-l-4 border-yellow-400 pl-4">
        Skills & Technologies
      </h2>

      <div className="space-y-16">
        {data.map((row) => (
          <div
            key={row.category}
            className="grid grid-cols-5 items-center border-t border-white/10 pt-10"
          >
            
            {/* LEFT */}
            <div className="col-span-1 text-center text-white/60 font-semibold tracking-wide">
              {row.category}
            </div>

            {/* RIGHT */}
            <div className="col-span-4 flex flex-wrap gap-10">

              {row.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center opacity-0 animate-slideIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >

                  {/* 🔥 INSANE BALL */}
                  <div className="relative group">
                    
                    {/* Glow Ring */}
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500"
                      style={{
                        background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Outer Ring */}
                    <div
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{
                        border: `1px solid ${skill.color}`,
                      }}
                    />

                    {/* Main Circle */}
                    <div
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl transition duration-500 group-hover:scale-125 group-hover:rotate-3"
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={42}
                        height={42}
                        className={`object-contain ${
                          skill.name === "Next.js" || skill.name === "Express.js"
                            ? "invert"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-sm mt-4 tracking-wide">{skill.name}</div>

                  {/* Level */}
                  {skill.level && (
                    <div className="text-xs text-yellow-400/90">
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
