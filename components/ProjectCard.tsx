import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  points: string[];
  caseStudyLink?: string; // optional
};

export default function ProjectCard({
  title,
  description,
  points,
  caseStudyLink,
}: ProjectProps) {
  return (
    <div className="relative border border-slate-800 rounded-xl p-6 bg-slate-900/40 hover:border-sky-500 transition">

      {/* Enterprise Badge */}
      <span className="absolute -top-3 left-6 bg-slate-950 px-3 py-1 text-xs border border-slate-700 rounded-full text-slate-300">
        Enterprise Project
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-4">
        {description}
      </p>

      {/* Points */}
      <ul className="list-disc ml-5 space-y-1 text-sm text-slate-300 mb-4">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* Case Study Link (only if provided) */}
      {caseStudyLink && (
        <Link
          href={caseStudyLink}
          className="inline-block text-sm text-sky-400 hover:underline"
        >
          View Case Study →
        </Link>
      )}
    </div>
  );
}
