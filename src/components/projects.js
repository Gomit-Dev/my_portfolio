import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      category: "Full Stack",
      title: "UniGather",
      tagline: "Local event discovery & management platform",
      image: "/unigather.png",
      tech: ["PHP", "MySQL", "Tailwind"],
      features: ["🔐 Auth", "📅 Events", "👨‍💼 Admin"],
      description:
        "A platform to discover, create, and manage local events with user authentication and admin control.",
      github: "https://github.com/Gomit-Dev/UniGather",
      live: "#",
    },
    {
      category: "AI / Backend",
      title: "FraudShield AI",
      tagline: "AI-powered fraud detection system",
      image: "/fraudshield.png",
      tech: ["Python", "Machine Learning", "API"],
      features: ["🤖 AI Model", "📊 Detection", "⚡ Scalable"],
      description:
        "Detects fraudulent transactions using machine learning models and provides scalable API integration.",
      github: "https://github.com/Gomit-Dev/FraudShield_AI",
      live: "#",
    },
    {
      category: "Full Stack",
      title: "SmartCart",
      tagline: "Modern e-commerce shopping system",
      image: "/smartcart.png",
      tech: ["React", "Node.js", "MongoDB"],
      features: ["🛒 Cart", "💳 Checkout", "📦 Orders"],
      description:
        "A full-featured e-commerce platform with cart management, secure checkout, and order tracking.",
      github: "https://github.com/Gomit-Dev/SmartCart",
      live: "#",
    },
  ];

  return (
    <div className="bg-zinc-950/90 py-20" id="Project">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-white mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[320px] h-[420px]"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* FRONT */}
                <div
                  className="absolute w-full h-full bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-between text-center shadow-xl hover:scale-105 transition"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-semibold text-white mt-4">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/60 mt-2">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex justify-center my-6">
                    <div className="border-2 border-yellow-500 rounded-xl p-1 shadow-[0_0_25px_rgba(255,193,7,0.6)]">
                      <div className="relative w-56 h-32">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* TECH */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/10 px-3 py-1 rounded-md text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* FEATURES */}
                    <div className="mt-5 text-xs text-white/50 flex justify-center gap-4">
                      {project.features.map((feature, i) => (
                        <span key={i}>{feature}</span>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 justify-center mt-6 text-sm font-semibold">
                      <a href={project.github} target="_blank">
                        <button className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-neutral-900 transition">
                          GitHub
                        </button>
                      </a>

                      <a href={project.live} target="_blank">
                        <button className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-neutral-900 transition">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-sm font-medium text-black leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-4 text-sm font-semibold">
                    <a href={project.github} target="_blank">
                      <button className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-neutral-900 transition">
                        GitHub
                      </button>
                    </a>

                    <a href={project.live} target="_blank">
                      <button className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-neutral-900 transition">
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>

              </div>

              {/* HOVER FLIP */}
              <style jsx>{`
                div:hover > div {
                  transform: rotateY(180deg);
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
