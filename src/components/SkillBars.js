"use client";

export default function SkillBars() {
  const skillData = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript"],
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "Next.js"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MySQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker"],
    },
  ];

  return (
    <div className="mt-24 max-w-6xl mx-auto px-4">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10 border-l-4 border-yellow-400 pl-4">
        Skills & Technologies
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {skillData.map((section) => (
          <div key={section.title}>
            
            <h3 className="text-white/70 mb-4 font-semibold">
              {section.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {section.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white hover:border-yellow-400 hover:scale-105 transition duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
