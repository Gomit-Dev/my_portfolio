"use client";

import GitHubCard from "@/components/github";
import LeetCodeChart from "@/components/leet_streak";

export default function CodingStats() {
  return (
    <div className="w-full mt-24 px-4 md:px-10">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-l-4 border-yellow-400 pl-4 text-white">
        Coding Stats
      </h2>

      {/* 🔥 GRID FIX (IMPORTANT) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

        {/* GitHub */}
        <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition duration-300">
          <GitHubCard />
        </div>

        {/* LeetCode */}
        <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition duration-300">
          <LeetCodeChart />
        </div>

      </div>
    </div>
  );
}
