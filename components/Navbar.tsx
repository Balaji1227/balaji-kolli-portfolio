export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-slate-800">
      <h2 className="text-xl font-semibold">Balaji Kolli</h2>

      <div className="space-x-6 text-sm">
        <a href="#projects" className="hover:text-sky-400">Projects</a>
        <a href="#contact" className="hover:text-sky-400">Contact</a>
        <a href="/resume.pdf" className="ml-4 px-4 py-2 text-sm rounded-md border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition">Resume</a>
      </div>
      
    </nav>
  );
}
