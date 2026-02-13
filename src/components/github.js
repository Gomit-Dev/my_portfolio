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
      <div className="bg-black py-28 text-center text-white/40">
        Loading GitHub data...
      </div>
    );
  }

  return (
    <section className="bg-black py-16 " id="Work">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,193,7,0.06)]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-6">
                GitHub Analytics
              </h2>

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
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center">
              {/* Smaller Circle */}
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.25)]">
                  <span className="text-3xl font-bold text-black">
                    {data.commits}
                  </span>

                  <span className="text-[10px] text-black/80 mt-1 tracking-wide">
                    Contributions
                  </span>
                </div>

                <div className="absolute inset-0 rounded-full blur-2xl bg-yellow-500/10 -z-10" />
              </div>

              {/* Stats Single Line */}
              <div className="mt-6 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center group">
                  <Star className="w-3.5 h-3.5 text-yellow-400 mb-1" />
                  <span className="text-white text-sm font-semibold">
                    {data.stars}
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <GitPullRequest className="w-3.5 h-3.5 text-blue-400 mb-1" />
                  <span className="text-white text-sm font-semibold">
                    {data.prs}
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400 mb-1" />
                  <span className="text-white text-sm font-semibold">
                    {data.issues}
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <GitCommit className="w-3.5 h-3.5 text-green-400 mb-1" />
                  <span className="text-white text-sm font-semibold">
                    {data.commits}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
