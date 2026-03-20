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
    <div className="bg-black w-full h-full flex flex-col gap-10 p-6 rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

      <h2 className="text-xl md:text-2xl font-serif text-white/80 border-l-4 border-yellow-400 pl-4">
        GitHub Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-10 items-center">

        <div className="space-y-6">
          {data.languages.map((lang, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm text-white/70 mb-1">
                <span>{lang.name}</span>
                <span>{lang.percentage}%</span>
              </div>

              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out animate-grow"
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-40 bg-yellow-400 animate-pulse"></div>

            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.4)] relative z-10">
              <span className="text-4xl font-bold text-black">
                {data.commits}
              </span>
              <span className="text-xs text-black/80 mt-1">
                Contributions
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-between items-center pt-6">

        <Stat icon={<Star size={30} className="text-yellow-400" />} value={data.stars} />
        <Stat icon={<GitPullRequest size={30} className="text-blue-400" />} value={data.prs} />
        <Stat icon={<AlertCircle size={30} className="text-red-400" />} value={data.issues} />
        <Stat icon={<GitCommit size={30} className="text-green-400" />} value={data.commits} />

      </div>

    </div>
  );
}

function Stat({ icon, value }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110">
      <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        {icon}
      </div>
      <span className="text-lg text-white">{value}</span>
    </div>
  );
}
