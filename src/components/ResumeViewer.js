"use client";

export default function ResumeSection() {
  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-l-4 border-yellow-400 pl-4">
        Resume
      </h2>

      <div className="flex justify-center">

        <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] hover:scale-[1.01] transition duration-300">

          <img
            src="/resume.jpg"
            alt="Resume"
            className="w-full h-auto"
          />

        </div>

      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition shadow-[0_0_20px_rgba(250,204,21,0.3)]"
        >
          Download Resume
        </a>
      </div>

    </div>
  );
}
