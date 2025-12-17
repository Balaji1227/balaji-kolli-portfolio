import Reveal from "./Reveal";

type SkillCategory = {
  title: string;
  skills: string[];
};



export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "State Management",
      skills: ["Redux", "Context API"],
    },
    {
      title: "UI Engineering",
      skills: [
        "Component Architecture",
        "Responsive Design",
        "Flexbox",
        "CSS Grid",
        "Accessibility",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Azure DevOps", "Webpack", "Postman"],
    },
    {
      title: "Cloud",
      skills: ["Azure Static Web Apps", "CI/CD Pipelines"],
    },
  ];

  return (
    <Reveal>
    <section
      id="skills"
      className="px-6 py-20 max-w-5xl mx-auto text-white"
    >
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full text-sm bg-slate-800 text-slate-200 hover:bg-sky-500 hover:text-black transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}
