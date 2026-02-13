export default function LeetCodeChart() {
  return (
    <div className="w-full py-20 flex justify-center bg-zinc-950/90">
      <div className="relative w-full max-w-5xl bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg px-6 py-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        {/* Accent line */}
        <div className="absolute left-0 top-8 h-12 w-1 bg-yellow-500 rounded-full" />

        <h3 className="text-lg md:text-2xl font-serif text-white/70 mb-6 pl-4">
          LeetCode Activity Card
        </h3>

        <div className="flex justify-around">
          {/* Centered Card */}
          <div className="hover-3d">
            <iframe
              src="https://leetcard.jacoblin.cool/gomit-saha?theme=dark&font=Fira%20Code&ext=heatmap"
              className="w-[350px] md:w-[420px] h-[320px] rounded-xl bg-black my-auto"
              loading="lazy"
            />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* Profile link instead of paragraph (cleaner) */}
        <div className="text-center mt-4">
          <a
            href="https://leetcode.com/gomit-saha/"
            target="_blank"
            className="text-sm text-yellow-400 hover:underline"
          >
            View LeetCode profile →
          </a>
        </div>
      </div>
    </div>
  );
}
