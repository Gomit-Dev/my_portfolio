"use client";

export default function Certificates() {
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
  ];

  return (
    <div className="w-full bg-zinc-950 py-24 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-l-4 border-yellow-400 pl-4">
        Certificates & Courses
      </h2>

      <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">

        {data.map((item, i) => (
          <div
            key={i}
            className="min-w-[300px] md:min-w-[400px] snap-center bg-black border border-white/10 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-white/60 text-sm mt-1">{item.issuer}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
