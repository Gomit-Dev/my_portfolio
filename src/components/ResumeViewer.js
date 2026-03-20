"use client";

export default function ResumeViewer() {
  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-4xl font-semibold mb-10 border-l-4 border-yellow-400 pl-4">
        Resume
      </h2>

      <div className="w-full h-[80vh] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

        <iframe
          src="/resume.pdf"
          className="w-full h-full bg-black"
        />

      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition"
        >
          Download Resume
        </a>
      </div>

    </div>
  );
}
