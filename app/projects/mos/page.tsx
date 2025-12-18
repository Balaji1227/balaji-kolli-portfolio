import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function MOSCaseStudy() {
  return (
    <Reveal>
      <main className="px-6 pt-28 pb-24 max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <section className="mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300">
            Enterprise Case Study
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            MOS – Material Operations System
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            MOS is an enterprise-grade internal application used to manage
            material lifecycle operations such as project creation, purchase
            requests, inventory movement, delivery, and transfers across
            business units.
          </p>
        </section>

        {/* QUICK STATS */}
        <section className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Role</p>
            <p className="text-lg font-semibold">Frontend Engineer</p>
          </div>

          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Company</p>
            <p className="text-lg font-semibold">Infosys</p>
          </div>

          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Tech Stack</p>
            <p className="text-lg font-semibold">React, REST APIs, Azure</p>
          </div>

          <div className="border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400">Duration</p>
            <p className="text-lg font-semibold">2024 – Present</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
          <p className="text-slate-300 max-w-4xl leading-relaxed">
            Business teams were managing material operations using fragmented
            tools and manual processes, leading to inconsistent data,
            validation errors, and delayed approvals. A centralized system was
            required to handle end-to-end material workflows with accuracy,
            role-based access, and audit tracking.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Solution Approach</h2>
          <ul className="space-y-4 text-slate-300 max-w-4xl">
            <li>• Designed scalable React component architecture</li>
            <li>• Built reusable UI components for enterprise workflows</li>
            <li>• Integrated REST APIs for real-time data synchronization</li>
            <li>• Implemented role-based UI rendering & validations</li>
            <li>• Managed complex multi-step forms and state handling</li>
          </ul>
        </section>

        {/* KEY FEATURES */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Key Features Delivered</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Project creation & material planning workflows",
              "Purchase request & approval lifecycle",
              "Inventory movement & delivery tracking",
              "Searchable tables with pagination & filters",
              "Dynamic forms with conditional validations",
              "Role-based access control & audit visibility",
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
          <h2 className="text-3xl font-bold mb-6">Performance & Optimization</h2>
          <ul className="space-y-4 text-slate-300 max-w-4xl">
            <li>• Reduced initial load time by ~40% using lazy loading</li>
            <li>• Optimized re-renders using memoization techniques</li>
            <li>• Improved responsiveness across enterprise dashboards</li>
            <li>• Standardized UI patterns for maintainability</li>
          </ul>
        </section>

        {/* BUSINESS IMPACT */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Business Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "25% reduction in frontend development time",
              "Improved data accuracy & reduced user errors",
              "Faster onboarding for new developers",
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
            <li>• Designing scalable enterprise UI systems</li>
            <li>• Managing complex state across workflows</li>
            <li>• Performance optimization in real-world apps</li>
            <li>• Cross-team collaboration with backend & QA</li>
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
