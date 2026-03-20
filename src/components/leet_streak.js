export default function LeetCodeChart() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <h3 className="text-lg md:text-xl font-serif text-white/70 mb-4 border-l-4 border-yellow-400 pl-3">
        LeetCode Activity
      </h3>

      <div className="w-full flex justify-center">
        <iframe
          src="https://leetcard.jacoblin.cool/gomit-saha?theme=dark&font=Fira%20Code&ext=heatmap"
          className="w-full max-w-full h-[300px] md:h-[340px] rounded-xl bg-black"
          loading="lazy"
        />
      </div>

      <div className="text-center mt-4">
        <a
          href="https://leetcode.com/gomit-saha/"
          target="_blank"
          className="text-sm text-yellow-400 hover:underline"
        >
          View profile →
        </a>
      </div>
    </div>
  );
}
