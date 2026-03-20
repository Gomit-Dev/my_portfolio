"use client";
import { useEffect, useRef } from "react";

export default function Certificates() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".cert-card");

    const handleScroll = () => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      cards.forEach((card, i) => {
        const progress = Math.min(
          Math.max((window.innerHeight - rect.top - i * 120) / 400, 0),
          1
        );

        card.style.transform = `
          translateY(${i * -60 * progress}px)
          scale(${1 - i * 0.05 * progress})
        `;
        card.style.zIndex = 100 - i;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      image: "/certificates/cert1.jpg",
    },
    {
      title: "DSA",
      issuer: "Udemy",
      image: "/certificates/cert2.jpg",
    },
    {
      title: "AWS Cloud",
      issuer: "AWS",
      image: "/certificates/cert3.jpg",
    },
    {
      title: "Machine Learning",
      issuer: "Stanford",
      image: "/certificates/cert4.jpg",
    },
  ];

  return (
    <div className="w-full bg-zinc-950 py-40 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-4xl font-semibold mb-32 border-l-4 border-yellow-400 pl-4">
        Certificates & Courses
      </h2>

      <div ref={containerRef} className="relative h-[200vh]">

        <div className="sticky top-32 flex justify-center">

          <div className="relative w-full max-w-5xl h-[400px]">

            {data.map((item, i) => (
              <div
                key={i}
                className="cert-card absolute w-full bg-black border border-white/10 rounded-xl p-6 flex gap-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform duration-300"
                style={{ top: `${i * 20}px` }}
              >
                <img
                  src={item.image}
                  className="w-1/3 rounded-lg object-cover"
                />

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.issuer}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}
