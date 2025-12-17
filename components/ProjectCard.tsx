type ProjectProps = {
  title: string;
  description: string;
  points: string[];
};

export default function ProjectCard({
  title,
  description,
  points,
}: ProjectProps) {
  return (
    <div className="border border-slate-800 rounded-xl p-6 hover:border-sky-500 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>

      <ul className="list-disc ml-5 space-y-1 text-sm text-slate-300">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
