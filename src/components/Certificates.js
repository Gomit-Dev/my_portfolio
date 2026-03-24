"use client";

export default function Certificates() {
  const data = [
    {
      title: "Infosys Springboard Certification",
      issuer: "Infosys",
      date: "2024",
      image: "/Certificates/Screenshot 2026-03-24 111557.png",
      description:
        "Completed industry-level training through Infosys Springboard focusing on core software development concepts and real-world applications.",
      link: "#",
    },
    {
      title: "Foundational C++ with Microsoft",
      issuer: "Microsoft x freeCodeCamp",
      date: "2025",
      image: "/Certificates/Screenshot 2026-03-24 111747.png",
      description:
        "Built strong fundamentals of C++ programming including memory management, OOP concepts, and problem-solving techniques.",
      link: "#",
    },
    {
      title: "Google Certified Course",
      issuer: "Google / Coursera",
      date: "2024",
      image: "/Certificates/Screenshot 2026-03-24 111714.png",
      description:
        "Successfully completed Google-authorized coursework covering modern development practices and real-world project implementation.",
      link: "#",
    },
    {
      title: "NPTEL Certification",
      issuer: "NPTEL (IIT)",
      date: "2024",
      image: "/Certificates/Screenshot 2026-03-24 111625.png",
      description:
        "Earned NPTEL certification demonstrating strong academic understanding and consistent performance in technical coursework.",
      link: "#",
    },
  ];

  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-4xl font-semibold mb-14 border-l-4 border-yellow-400 pl-4 tracking-wide">
        Certificates & Courses
      </h2>

      <div className="flex flex-col gap-14">

        {data.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row items-center gap-8 bg-black border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]"
          >

            {/* IMAGE */}
            <div className="w-full md:w-[40%] h-[220px] md:h-[260px] rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col justify-center gap-5 w-full md:w-[60%]">

              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-5 text-sm text-white/60">
                <span>{item.issuer}</span>
                <span>{item.date}</span>
              </div>

              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                className="w-fit mt-2 px-5 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition shadow-[0_0_15px_rgba(250,204,21,0.25)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
              >
                View Certificate →
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
