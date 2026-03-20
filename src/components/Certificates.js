"use client";
import { useEffect, useRef } from "react";

export default function Certificates() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".cert-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;

          if (entry.isIntersecting) {
            entry.target.style.transform = `translateY(0px) scale(1)`;
            entry.target.style.opacity = "1";
          } else {
            entry.target.style.transform = `translateY(80px) scale(0.95)`;
            entry.target.style.opacity = "0";
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  const data = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      image: "/certificates/cert1.jpg",
    },
    {
      title: "Data Structures & Algorithms",
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

      <div ref={containerRef} className="relative flex flex-col items-center gap-32">

        {data.map((item, i) => (
          <div
            key={i}
            data-index={i}
            className="cert-card w-full max-w-5xl bg-black border border-white/10 rounded-xl p-6 flex flex-col md:flex-row gap-8 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out opacity-0"
            style={{
              transform: "translateY(80px) scale(0.95)",
              zIndex: 10 + i,
            }}
          >
            <img
              src={item.image}
              className="w-full md:w-1/3 rounded-lg object-cover"
            />

            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-white/60">{item.issuer}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
