"use client";

import GitHubCard from "./github";
import LeetCodeChart from "./leet_streak";

export default function CodingStats() {
  return (
    <div className="mt-20 px-4 md:px-10">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 border-l-4 border-yellow-400 pl-4 text-white">
        Coding Stats
      </h2>

      {/* Wrapper */}
      <div className="flex flex-col md:flex-row gap-6">

        {/* GitHub */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition">
          <GitHubCard />
        </div>

        {/* LeetCode */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition">
          <LeetCodeChart />
        </div>

      </div>
    </div>
  );
}
