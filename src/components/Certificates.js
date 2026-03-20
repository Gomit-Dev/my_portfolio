"use client";

export default function Certificates() {
  const data = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2024",
      image: "/certificates/cert1.jpg",
      link: "#",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Udemy",
      date: "2023",
      image: "/certificates/cert2.jpg",
      link: "#",
    },
  ];

  return (
    <div className="w-full bg-zinc-950/90 py-24 px-4 md:px-10 text-white">

      <h2 className="text-3xl md:text-4xl font-semibold mb-14 border-l-4 border-yellow-400 pl-4 tracking-wide">
        Certificates & Courses
      </h2>

      <div className="flex flex-col gap-12">

        {data.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row items-center gap-8 bg-black/90 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)]"
          >

            {/* IMAGE */}
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col justify-center gap-5 w-full md:w-2/3">

              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <span className="tracking-wide">{item.issuer}</span>
                <span className="tracking-wide">{item.date}</span>
              </div>

              <a
                href={item.link}
                target="_blank"
                className="w-fit mt-2 px-5 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition shadow-[0_0_15px_rgba(250,204,21,0.25)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
              >
                View Certificate →
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
