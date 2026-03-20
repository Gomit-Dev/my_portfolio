import Image from "next/image";

export default function Id() {
  return (
    <>
      <a href="#" className="hover-3d my-[5vh] mx-2 cursor-pointer h-[80vh]">
        {/* content */}
        <div className="h-[90%] card w-75 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body border-2 border-white/20 rounded-lg">
            <div className="relative w-50 h-50 mx-auto rounded-full overflow-hidden border-4 border-white/20">
              <Image
                loading="eager"
                sizes="true"
                src="/my_image.png"
                alt="My pic"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-5xl shadow-xl font-serif opacity-70 text-center">
              Gomit Saha
            </div>
            <div className="mb-4">
              <div className="text-lg opacity-40 text-center">
                Full Stack Developer
              </div>
              <div className="text-4xl text-center text-yellow-500/80">⋆⋆⋆⋆⋆</div>
            </div>
            <div className="text-center text-white/50 font-serif text-lg">
              <div class="flex justify-center items-center gap-3 mt-4">

  <!-- LinkedIn -->
  <a href="https://linkedin.com/in/your-profile" target="_blank"
     class="bg-white text-black font-bold text-xs px-[6px] py-[2px] rounded-[3px] leading-none hover:scale-110 transition">
    in
  </a>

  <!-- GitHub -->
  <a href="https://github.com/your-username" target="_blank"
     class="bg-white text-black font-bold text-xs px-[6px] py-[2px] rounded-[3px] leading-none hover:scale-110 transition">
    GH
  </a>

  <!-- Optional: Twitter / X -->
  <a href="https://twitter.com/your-handle" target="_blank"
     class="bg-white text-black font-bold text-xs px-[6px] py-[2px] rounded-[3px] leading-none hover:scale-110 transition">
    X
  </a>

</div>
            </div>
            <div className="text-center text-white/50 font-serif text-lg">
              Lovely Professional University
            </div>
            <div className="flex justify-between align-bottom">
              <div>
                <div className="text-xs opacity-20 text-start">
                  Date of Birth{" "}
                </div>
                <div>Oct 2005</div>
              </div>
              <div>
                <div className="text-xs opacity-20 text-end">Graduation by</div>
                <div>Aug 2027</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </>
  );
}
