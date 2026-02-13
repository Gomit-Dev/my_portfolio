export default function Navbar() {
  return (
    <div className="bg-black pt-5 text-white/50 font-serif">
      <div className="text-5xl text-center">Portfolio</div>
      <div className="navbar flex justify-center gap-5 text-yellow-500 font-mono">
        <a href="#Intro" className="text-center hover:text-yellow-300 scroll-smooth">
          Introduction
        </a>
        <a href="#About" className="text-center hover:text-yellow-300 scroll-smooth">
          About
        </a>
        <a href="#Project" className="text-center hover:text-yellow-300 scroll-smooth">
          Project
        </a>
        <a href="#Contact" className="text-center hover:text-yellow-300 scroll-smooth">
          Contact
        </a>
      </div>
    </div>
  );
}
