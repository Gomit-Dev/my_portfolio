"use client";

import Image from "next/image";

export default function SkillBars() {
  const data = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced", icon: "/python.svg" },
        { name: "Java", level: "", icon: "/java.svg" },
        { name: "C++", level: "", icon: "/cpp.svg" },
        { name: "JavaScript", level: "Advanced", icon: "/js.svg" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "/html.svg" },
        { name: "CSS3", level: "Advanced", icon: "/css.svg" },
        { name: "Next.js", level: "Intermediate", icon: "/next.svg" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "/node.svg" },
        { name: "Express.js", level: "Intermediate", icon: "/express.svg" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: "/mysql.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Intermediate", icon: "/aws.svg" },
        { name: "Docker", level: "Intermediate", icon: "/docker.svg" },
      ],
    },
  ];

  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-l-4 border-yellow-400 pl-4">
        Skills & Technologies
      </h2>

      {/* Rows */}
      <div className="space-y-12">

        {data.map((row) => (
          <div
            key={row.category}
            className="grid grid-cols-5 items-center border-t border-white/10 pt-8"
          >
            
            {/* LEFT (20%) */}
            <div className="col-span-1 text-center text-white/60 font-semibold">
              {row.category}
            </div>

            {/* RIGHT (80%) */}
            <div className="col-span-4 flex flex-wrap gap-8">

              {row.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center opacity-0 animate-slideIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Circle Icon */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-md hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition duration-300">
                    
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
