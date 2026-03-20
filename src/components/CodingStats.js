"use client";

import GitHubCard from "@/components/github";
import LeetCodeChart from "@/components/leet_streak";

export default function CodingStats() {
  return (
    <div className="bg-zinc-950/90 w-full pt-24 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-l-4 border-yellow-400 pl-4 text-white">
        Coding Stats
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl flex">
          <GitHubCard />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl flex">
          <LeetCodeChart />
        </div>
      </div>
    </div>
  );
}
