"use client";

export default function Certificates() {
  const data = [
    {
      title: "Project on Git",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      image: "/Certificates/Screenshot 2026-03-24 111557.png",
      description:
        "Completed a practical project on Git covering version control, branching strategies, collaboration workflows, and real-world development practices.",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01384208016453632011783_shared/1-5c6b325a-a46e-48e1-845e-d975f279bed9.pdf",
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "FreeCodeCamp x Microsoft",
      date: "Nov 2023",
      image: "/Certificates/Screenshot 2026-03-24 111747.png",
      description:
        "Built strong fundamentals of C# programming including object-oriented programming, .NET basics, and problem-solving techniques.",
      link: "https://www.freecodecamp.org/certification/fcce27bf513-a343-4629-a0ea-34aef662ac12/foundational-c-sharp-with-microsoft",
    },
    {
      title: "Google IT Automation with Python",
      issuer: "Coursera (Google)",
      date: "Nov 2024",
      image: "/Certificates/Screenshot 2026-03-24 111714.png",
      description:
        "Learned automation using Python, including scripting, system administration tasks, and improving efficiency through real-world automation projects.",
      link: "https://coursera.org/share/08a853515c22fe05b1063f68cc70134c",
    },
    {
      title: "Human Computer Interaction",
      issuer: "NPTEL",
      date: "May 2025",
      image: "/Certificates/Screenshot 2026-03-24 111625.png",
      description:
        "Gained knowledge of user-centered design, usability principles, and interaction design to build intuitive and user-friendly applications.",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS38S54750059704315646",
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

            <div className="w-full md:w-[40%] h-[220px] md:h-[260px] rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

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

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  className="w-fit mt-2 px-5 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition shadow-[0_0_15px_rgba(250,204,21,0.25)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
                >
                  View Certificate →
                </a>
              )}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
