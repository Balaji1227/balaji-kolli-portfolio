import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="px-6 py-24 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Something Impactful
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          I’m open to frontend engineering opportunities where I can build
          scalable, high-performance user interfaces and contribute to
          meaningful products.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:balajikolli1227@gmail.com"
            className="bg-sky-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-sky-400 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/balaji-kolli-/"
            target="_blank"
            className="border border-slate-600 px-8 py-3 rounded-lg hover:border-sky-400 hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </Reveal>
  );
}
