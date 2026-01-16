export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">
        Let’s Build Something Impactful
      </h2>

      <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-12">
        I’m currently open to frontend engineering opportunities where I can
        contribute to building scalable, high-quality user experiences.
        If you’re hiring or would like to discuss a role, feel free to reach out.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        
        <a
          href="mailto:balajikolli1227@gmail.com"
          className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-8 py-3 font-medium text-black hover:bg-sky-400 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/balaji-kolli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-8 py-3 font-medium text-slate-300 hover:border-sky-500 hover:text-sky-400 transition"
        >
          Connect on LinkedIn
        </a>
      </div>

      {/* FOOT NOTE */}
      <p className="mt-10 text-sm text-slate-500">
        Prefer a quick call? Happy to connect and discuss opportunities.
      </p>
    </section>
  );
}
