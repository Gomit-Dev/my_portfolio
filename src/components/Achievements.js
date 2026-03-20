"use client";

export default function Achievements() {
  const data = [
    {
      title: "LeetCode 300+ Problems",
      desc: "Solved 300+ DSA problems",
      image: "/badges/leetcode.png",
    },
    {
      title: "GitHub 100+ Contributions",
      desc: "Active open-source contributor",
      image: "/badges/github.png",
    },
    {
      title: "Hackathon Finalist",
      desc: "Top 10 in national hackathon",
      image: "/badges/hackathon.png",
    },
    {
      title: "5⭐ Problem Solver",
      desc: "Strong problem-solving skills",
      image: "/badges/star.png",
    },
  ];

  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-4xl font-semibold mb-14 border-l-4 border-yellow-400 pl-4 tracking-wide">
        Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {data.map((item, i) => (
          <div
            key={i}
            className="group bg-black/90 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:-translate-y-2"
          >

            {/* ICON */}
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold leading-tight">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-white/60">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}
