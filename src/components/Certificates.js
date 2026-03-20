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

      <h2 className="text-3xl md:text-4xl font-semibold mb-12 border-l-4 border-yellow-400 pl-4">
        Certificates & Courses
      </h2>

      <div className="flex flex-col gap-10">

        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-8 bg-black border border-white/10 rounded-xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(250,204,21,0.1)] transition"
          >

            {/* IMAGE */}
            <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col justify-center gap-4 w-full md:w-2/3">

              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <span>🏢 {item.issuer}</span>
                <span>📅 {item.date}</span>
              </div>

              <a
                href={item.link}
                target="_blank"
                className="w-fit mt-2 px-4 py-1 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
              >
                View Certificate
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
