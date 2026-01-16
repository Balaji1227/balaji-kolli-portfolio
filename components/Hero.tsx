"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-24 max-w-6xl mx-auto">
      
      {/* Glow background */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Frontend Engineer{" "}
          <span className="text-sky-400">(React.js)</span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg mb-10">
          Frontend Engineer with <span className="text-white font-medium">3.6+ years</span> of
          experience building enterprise-scale React applications used across
          business-critical workflows.
        </p>

        {/* TRUST METRICS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          <Metric value="3.6+" label="Years Experience" />
          <Metric value="50+" label="UI Components" />
          <Metric value="20+" label="APIs Integrated" />
          <Metric value="40%" label="Perf Improvement" />
        </div>
      </motion.div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-4">
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
