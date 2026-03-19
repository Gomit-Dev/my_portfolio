export default function SkillBars() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">📊 Skill Proficiency</h2>

      {[
        { name: "Python", level: "90%" },
        { name: "JavaScript", level: "85%" },
        { name: "Node.js", level: "80%" },
      ].map((skill, i) => (
        <div key={i} className="mb-3">
          <p>{skill.name}</p>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div
              className="bg-blue-400 h-2 rounded"
              style={{ width: skill.level }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}
