type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

export default function ExperienceTimeline() {
  const experiences: ExperienceItem[] = [
    {
      role: "Systems Engineer",
      company: "Infosys",
      duration: "Jan 2025 – Present",
      points: [
        "Built 50+ reusable React components, reducing development time by 25%",
        "Integrated 20+ REST APIs using Context-based global state",
        "Improved application performance by ~40% using lazy loading and memoization",
        "Managed production deployments via Azure CI/CD pipelines",
      ],
    },
    {
      role: "Senior Systems Associate",
      company: "Infosys",
      duration: "Jan 2024 – Jan 2025",
      points: [
        "Developed React & Angular UI workflows with modular architecture",
        "Improved responsive behavior using Flexbox and CSS Grid",
        "Optimized DOM rendering and accessibility across modules",
        "Participated in sprint planning and UI estimation",
      ],
    },
    {
      role: "Systems Associate",
      company: "Infosys",
      duration: "Mar 2023 – Jan 2024",
      points: [
        "Built reusable UI widgets and navigation components",
        "Integrated REST APIs for dashboards and reporting screens",
        "Reduced unnecessary re-renders by restructuring components",
        "Resolved UI defects and performance bottlenecks",
      ],
    },
    {
      role: "Operations Executive",
      company: "Infosys",
      duration: "Apr 2022 – Mar 2023",
      points: [
        "Handled L1 operations, issue trigging and incident management",
        "Coordinated with business and technical teams for resolution",
        "Maintained operational reports and process documentation",
        "Identified recurring issues and suggested process improvements",
      ],
    },
  ];

  return (
    <section
  id="experience"
  className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-14 tracking-tight">Experience</h2>
      <div className="relative border-l border-slate-800 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-[10px] top-2 w-4 h-4 bg-sky-500 rounded-full" />

            <h3 className="text-xl font-semibold">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm text-slate-400 mb-4">{exp.duration}</p>

            <ul className="list-disc ml-5 space-y-2 text-slate-300 text-sm">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
