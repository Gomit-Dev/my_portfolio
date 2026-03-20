"use client";

import Image from "next/image";

export default function SkillBars() {
  const data = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced", icon: "/python.svg", color: "rgba(53,114,165,0.4)" },
        { name: "Java", level: "", icon: "/java.svg", color: "rgba(176,114,25,0.4)" },
        { name: "C++", level: "", icon: "/cpp.svg", color: "rgba(0,89,156,0.4)" },
        { name: "JavaScript", level: "Advanced", icon: "/js.svg", color: "rgba(247,223,30,0.4)" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "/html.svg", color: "rgba(227,76,38,0.4)" },
        { name: "CSS3", level: "Advanced", icon: "/css.svg", color: "rgba(38,77,228,0.4)" },
        { name: "Next.js", level: "Intermediate", icon: "/next.svg", color: "rgba(255,255,255,0.25)" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "/node.svg", color: "rgba(131,205,41,0.4)" },
        { name: "Express.js", level: "Intermediate", icon: "/express.svg", color: "rgba(255,255,255,0.25)" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: "/mysql.svg", color: "rgba(0,117,143,0.4)" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Intermediate", icon: "/aws.svg", color: "rgba(255,153,0,0.5)" },
        { name: "Docker", level: "Intermediate", icon: "/docker.svg", color: "rgba(0,123,186,0.4)" },
      ],
    },
  ];

  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-l-4 border-yellow-400 pl-4">
        Skills & Technologies
      </h2>

      <div className="space-y-12">
        {data.map((row) => (
          <div
            key={row.category}
            className="grid grid-cols-5 items-center border-t border-white/10 pt-8"
          >
            
            {/* LEFT */}
            <div className="col-span-1 text-center text-white/60 font-semibold">
              {row.category}
            </div>

            {/* RIGHT */}
            <div className="col-span-4 flex flex-wrap gap-8">

              {row.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center opacity-0 animate-slideIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  
                  {/* 🔥 COLORED BALL */}
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 transition duration-300 hover:scale-110"
                    style={{
                      boxShadow: `0 0 30px ${skill.color}`,
                      background: "rgba(255,255,255,0.03)",
                    }}
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

                  {/* Name */}
                  <div className="text-sm mt-3">{skill.name}</div>

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
