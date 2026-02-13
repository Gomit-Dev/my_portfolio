export default function Contact() {
  return (
    <div className=" bg-zinc-950/90 py-24" id="Contact">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-serif text-white mb-8">
          Let’s Build Something Great
        </h2>

        <p className="text-white/70 mb-14 text-lg leading-relaxed">
          I’m open to opportunities, collaborations, and challenging projects.
          If you have an idea or role in mind, let’s connect.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:sahgomit20@gmail.com"
            className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition shadow-[0_0_20px_rgba(255,193,7,0.3)]"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Gomit-Dev"
            target="_blank"
            className="bg-zinc-900 border border-white/10 px-8 py-3 rounded-xl text-white hover:bg-zinc-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/gomit"
            target="_blank"
            className="bg-zinc-900 border border-white/10 px-8 py-3 rounded-xl text-white hover:bg-zinc-800 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </div>
  );
}
