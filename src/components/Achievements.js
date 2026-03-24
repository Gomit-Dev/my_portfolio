"use client";

export default function Achievements() {
  const data = [
    {
      title: "100+ DSA Problems Solved",
      desc: "Solved problems across LeetCode & GeeksforGeeks, strengthening core data structures and problem-solving skills.",
      image: "/badges/leetcode.svg",
    },
    {
      title: "HackerRank 3⭐ in C++",
      desc: "Earned a Silver badge with consistent coding performance and strong fundamentals in C++.",
      image: "/badges/hackerrank.svg",
    },
    {
      title: "Android Development Progress",
      desc: "Reached Level 12 and earned 5 badges on Android Studio by completing core development modules.",
      image: "/badges/android.svg",
    },
    {
      title: "12+ GitHub Projects",
      desc: "Built and published multiple full-stack projects showcasing real-world development and deployment skills.",
      image: "/badges/github.svg",
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
            className="group bg-black border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:-translate-y-2"
          >

            {/* WHITE BADGE */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-8 h-8 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold leading-tight">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-white/60 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}
