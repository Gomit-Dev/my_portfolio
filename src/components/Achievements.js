export default function Achievements() {
  const data = [
    "Top 10% Dean’s List",
    "3rd Rank - Hackoverflow",
    "Appreciation by Defence Minister",
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">🏆 Achievements</h2>

      {data.map((item, i) => (
        <div key={i} className="bg-gray-800 p-4 rounded mb-2">
          {item}
        </div>
      ))}
    </section>
  );
}
