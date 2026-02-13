import Id from "./my_id";
import Welcome from "./welcome_text";

export default function Hero() {
  return (
    <div className="min-h-screen bg-zinc-950/90 px-[5vw] py-[10vh] flex flex-col md:flex-row items-center" id="Intro">

      {/* LEFT SIDE */}
      <div className="w-full md:w-[30%] flex justify-center md:justify-start mb-10 md:mb-0">
        <Id />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[70%]">
        <Welcome />
      </div>

    </div>
  );
}
