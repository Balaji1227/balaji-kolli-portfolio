export default function Footer() {
  return (
    <footer className="border-t border-slate-800 dark:border-slate-700">
      <div className="px-6 py-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Balaji Kolli. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/balaji-kolli-/"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:balajikolli1227@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>

          <a
            href="/resume.pdf"
            className="hover:text-sky-400 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
