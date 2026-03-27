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
    },
  ];

  return (
    <div className=" bg-zinc-950/90 py-20" id ="Project">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-serif text-white mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-14">
          {projects.map((project, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">

                {/* FRONT SIDE */}
                <div className="flip-front bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-between text-center shadow-xl">

                  {/* Top Section */}
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

                  {/* Image Section */}
                  <div className="flex justify-center my-6">
                    <div className="border-2 border-yellow-500 rounded-xl p-1 shadow-[0_0_15px_rgba(255,193,7,0.25)]">
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

                  {/* Bottom Section */}
                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/10 px-3 py-1 rounded-md text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mt-5 text-xs text-white/50 flex justify-center gap-4">
                      {project.features.map((feature, i) => (
                        <span key={i}>{feature}</span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* BACK SIDE */}
                <div className="flip-back bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-xl">

                  <p className="text-sm font-medium text-black leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-6 text-sm font-semibold">
                    <button className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-neutral-900 transition">
                      GitHub
                    </button>
                    <button className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-neutral-900 transition">
                      Live Demo
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
