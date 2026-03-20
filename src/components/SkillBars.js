"use client";

import Image from "next/image";

export default function SkillBars() {
  const data = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced", icon: "/python.png" },
        { name: "Java", level: "", icon: "/java.png" },
        { name: "C++", level: "", icon: "/cpp.png" },
        { name: "JavaScript", level: "Advanced", icon: "/js.png" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "/html.png" },
        { name: "CSS3", level: "Advanced", icon: "/css.png" },
        { name: "Next.js", level: "Intermediate", icon: "/next.png" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "/node.png" },
        { name: "Express.js", level: "Intermediate", icon: "/express.png" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: "/mysql.png" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: "Intermediate", icon: "/aws.png" },
        { name: "Docker", level: "Intermediate", icon: "/docker.png" },
      ],
    },
  ];

  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 border-l-4 border-yellow-400 pl-4">
        Skills & Technologies
      </h2>

      {/* Rows */}
      <div className="space-y-10">

        {data.map((row, i) => (
          <div
            key={row.category}
            className="grid grid-cols-5 items-center border-t border-white/20 pt-6"
          >
            
            {/* LEFT (20%) */}
            <div className="col-span-1 text-center text-white/70 font-semibold">
              {row.category}
            </div>

            {/* RIGHT (80%) */}
            <div className="col-span-4 flex flex-wrap gap-6 justify-start">

              {row.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center opacity-0 animate-slideIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Circle Icon */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-lg hover:scale-110 transition">
                    
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Name */}
                  <div className="text-sm mt-2">{skill.name}</div>

                  {/* Level */}
                  {skill.level && (
                    <div className="text-xs text-yellow-400">
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
