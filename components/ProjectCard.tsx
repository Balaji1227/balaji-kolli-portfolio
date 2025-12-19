import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  points: string[];
  href: string;
};

export default function ProjectCard({
  title,
  description,
  points,
  href,
}: ProjectProps) {
  return (
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.2)]">
      
      {/* Glow */}
      <div className="absolute inset-0 rounded-xl bg-sky-500/5 opacity-0 blur-xl transition group-hover:opacity-100 pointer-events-none" />

      {/* Badge */}
      <span className="absolute -top-3 left-6 z-10 rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300">
        Enterprise Project
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm text-slate-400 mb-4">
          {description}
        </p>

        <ul className="mb-6 list-disc ml-5 space-y-1 text-sm text-slate-300">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition group-hover:text-sky-300"
        >
          View Case Study
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
