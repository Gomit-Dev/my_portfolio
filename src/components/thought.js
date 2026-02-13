export default function ThoughtBox() {
  return (
    <div className="text-center bg-black  border border-white/10 shadow-lg ">
      <div className="relative p-8">
        {/* Accent line */}
        <div className="absolute left-0 top-6 h-12 w-1  rounded-full" />

        <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed hover:text-yellow-500">
          “Be like water adaptable, resilient, and able to reshape itself
          whenever needed.”
        </p>

        <span className="block mt-4 text-sm text-end text-white/50 tracking-wide hover:text-yellow-500">
          — Personal Philosophy
        </span>
      </div>
    </div>
  );
}
