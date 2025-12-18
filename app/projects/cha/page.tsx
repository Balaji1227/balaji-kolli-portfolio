import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CHACaseStudy() {
  return (
    <Reveal>
      <main className="px-6 pt-28 pb-24 max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <section className="mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300">
            Enterprise Case Study
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            CHA – Clinical Health Assessment
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            CHA is a healthcare-focused enterprise web application used by
            clinical teams to assess patient health metrics, visualize trends,
            and make data-driven decisions through interactive dashboards.
          </p>
        </section>

        {/* QUICK STATS */}
        <section className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Role</p>
            <p className="text-lg font-semibold">Frontend Engineer</p>
          </div>

          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Domain</p>
            <p className="text-lg font-semibold">Healthcare</p>
          </div>

          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Tech Stack</p>
            <p className="text-lg font-semibold">
              React, Redux, Charts, REST APIs
            </p>
          </div>

          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Duration</p>
            <p className="text-lg font-semibold">2023 – 2024</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
          <p className="text-slate-300 max-w-4xl leading-relaxed">
            Clinical teams relied on static reports and fragmented tools to
            analyze patient health data, making it difficult to identify trends,
            monitor risks, and take timely decisions. A responsive, visual,
            and scalable dashboard solution was required.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Solution Approach</h2>
          <ul className="space-y-4 text-slate-300 max-w-4xl">
            <li>• Built reusable dashboard components using React</li>
            <li>• Implemented global state management using Redux</li>
            <li>• Integrated REST APIs for real-time health data</li>
            <li>• Designed responsive layouts for clinicians on multiple devices</li>
            <li>• Ensured accessibility and consistent UX patterns</li>
          </ul>
        </section>

        {/* KEY FEATURES */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Key Features Delivered</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Interactive health assessment dashboards",
              "Charts & visualizations for clinical metrics",
              "Patient-wise data filtering and comparisons",
              "Redux-based global state for performance",
              "Responsive UI for tablets and desktops",
              "Error handling and loading states for APIs",
            ].map((feature, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-xl p-6 bg-slate-900/40"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* PERFORMANCE */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">
            Performance & Optimization
          </h2>
          <ul className="space-y-4 text-slate-300 max-w-4xl">
            <li>• Reduced dashboard load time by 30–45%</li>
            <li>• Optimized chart re-renders using memoization</li>
            <li>• Improved UX responsiveness across data-heavy views</li>
            <li>• Minimized unnecessary API calls using caching logic</li>
          </ul>
        </section>

        {/* BUSINESS IMPACT */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Business Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Faster clinical decision-making",
              "Improved data clarity for healthcare teams",
              "Reduced manual analysis effort",
            ].map((impact, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-xl p-6 text-center font-semibold"
              >
                {impact}
              </div>
            ))}
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
          <ul className="space-y-4 text-slate-300 max-w-4xl">
            <li>• Building data-heavy dashboards in React</li>
            <li>• Applying Redux effectively for large applications</li>
            <li>• Performance tuning in real-world healthcare apps</li>
            <li>• Designing UI for non-technical users</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            Want to explore more projects?
          </h2>

          <Link
            href="/#projects"
            className="inline-block px-8 py-3 rounded-lg bg-sky-500 text-black font-medium hover:bg-sky-400 transition"
          >
            Back to Projects
          </Link>
        </section>

      </main>
    </Reveal>
  );
}
