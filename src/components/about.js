import Image from "next/image";

export default function About() {
  return (
    <div className=" bg-black py-20" id="About">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-serif text-white mb-6">
              About Me
            </h2>

            <p className="text-white/70 leading-relaxed text-lg mb-10">
              I am a full stack developer focused on building structured,
              scalable, and performance-driven applications. I enjoy solving
              real-world problems through clean architecture and efficient backend
              systems while maintaining intuitive user experiences.
            </p>

            {/* 4 Boxes in One Line */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

              <div className="shadow-[0_0_10px_rgba(255,193,7,0.3)] bg-zinc-900 border border-white/10 rounded-xl p-5 hover:bg-zinc-800 transition">
                <h3 className="text-white font-semibold text-sm mb-2">
                  Think Structurally
                </h3>
                <p className="text-white/60 text-xs">
                  Modular & scalable architecture mindset.
                </p>
              </div>

              <div className="shadow-[0_0_10px_rgba(255,193,7,0.3)] bg-zinc-900 border border-white/10 rounded-xl p-5 hover:bg-zinc-800 transition">
                <h3 className="text-white font-semibold text-sm mb-2">
                  Build Cleanly
                </h3>
                <p className="text-white/60 text-xs">
                  Maintainable and readable code practices.
                </p>
              </div>

              <div className="shadow-[0_0_10px_rgba(255,193,7,0.3)] bg-zinc-900 border border-white/10 rounded-xl p-5 hover:bg-zinc-800 transition">
                <h3 className="text-white font-semibold text-sm mb-2">
                  Optimize Performance
                </h3>
                <p className="text-white/60 text-xs">
                  Focused on speed and efficiency.
                </p>
              </div>

              <div className="shadow-[0_0_10px_rgba(255,193,7,0.3)] bg-zinc-900 border border-white/10 rounded-xl p-5 hover:bg-zinc-800 transition">
                <h3 className="text-white font-semibold text-sm mb-2">
                  Continuous Growth
                </h3>
                <p className="text-white/60 text-xs">
                  Constantly improving backend & DSA skills.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - BIG IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 md:w-[420px] aspect-[4/5]">
              <Image
                src="/my_pic.png"
                alt="Profile"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
