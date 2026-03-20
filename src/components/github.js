"use client";
import { useEffect, useState } from "react";
import { Star, GitPullRequest, AlertCircle, GitCommit } from "lucide-react";

export default function GitHubCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white/40">
        Loading GitHub data...
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      
      <h2 className="text-lg md:text-xl font-serif text-white/70 border-l-4 border-yellow-400 pl-3 mb-6">
        GitHub Analytics
      </h2>

      <div className="flex flex-col h-full">

        {/* Top: Bars */}
        <div className="space-y-4">
          {data.languages.map((lang, index) => (
            <div key={index}>
              <div className="flex justify-between text-xs text-white/70 mb-1">
                <span>{lang.name}</span>
                <span>{lang.percentage}%</span>
              </div>

              <div className="w-full bg-zinc-800/70 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-1.5 rounded-full transition-all duration-700"
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Spacer (magic fix) */}
        <div className="flex-1" />

        {/* Bottom: Circle + Stats */}
        <div className="flex flex-col items-center gap-5 pb-2">

          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.25)]">
            <span className="text-2xl font-bold text-black">
              {data.commits}
            </span>
            <span className="text-[10px] text-black/80 mt-1">
              Contributions
            </span>
          </div>

          <div className="flex gap-6 justify-center">
            <Stat icon={<Star className="text-yellow-400" />} value={data.stars} />
            <Stat icon={<GitPullRequest className="text-blue-400" />} value={data.prs} />
            <Stat icon={<AlertCircle className="text-red-400" />} value={data.issues} />
            <Stat icon={<GitCommit className="text-green-400" />} value={data.commits} />
          </div>

        </div>

      </div>
    </div>
  );
}

function Stat({ icon, value }) {
  return (
    <div className="flex flex-col items-center text-sm">
      {icon}
      <span className="text-white">{value}</span>
    </div>
  );
}
