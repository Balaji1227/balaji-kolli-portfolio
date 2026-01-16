type SkillGroup = {
  title: string;
  skills: string[];
};

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "State & Data",
      skills: [
        "Context API",
        "Redux",
        "REST APIs",
        "Axios",
      ],
    },
    {
      title: "UI Engineering",
      skills: [
        "Reusable Components",
        "Responsive Design",
        "Accessibility (a11y)",
        "Performance Optimization",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Azure DevOps",
        "CI/CD Pipelines",
        "Vercel",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="px-6 py-20 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-14 tracking-tight">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="relative rounded-xl border border-slate-800 bg-slate-900/40 p-6"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-xl bg-sky-500/5 blur-xl opacity-0 hover:opacity-100 transition pointer-events-none" />

            <h3 className="text-lg font-semibold mb-4 relative z-10">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3 relative z-10">
              {group.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-sm rounded-full border border-slate-700 bg-slate-950 text-slate-300 hover:border-sky-500 hover:text-sky-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
