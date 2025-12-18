import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";






export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      
      <Reveal>
       <main className="px-6 pt-28 pb-20 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
           Frontend Engineer{" "}
           <span className="text-sky-400">(React.js)</span>
          </h1>

           <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
              Frontend Engineer with <span className="text-white font-medium">3.6+ years of experience</span>{" "}
              building <span className="text-white font-medium">enterprise-scale React applications</span>{" "}
              used across business-critical workflows.
           </p>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <div>
                 <p className="text-2xl font-semibold text-white">3.6+</p>
                 <p className="uppercase tracking-wide text-slate-400">Years Experience</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">50+</p>
                <p className="uppercase tracking-wide text-slate-400">UI Components</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">20+</p>
                <p className="uppercase tracking-wide text-slate-400">APIs Integrated</p>
              </div>
          </div>

        </main>
      </Reveal>




      {/* PROJECTS SECTION */}
      <Reveal>
      <section
  id="projects"
  className="px-6 py-20 max-w-6xl mx-auto text-white"
>
  <h2 className="text-3xl font-bold mb-12">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">
    
    {/* MOS Project */}
    <ProjectCard
      title="MOS – Material Operations System"
      description="Enterprise React application managing inventory, purchase requests, and delivery workflows."
      points={[
        "Built 50+ reusable React components",
        "Integrated 20+ REST APIs",
        "Role-based access & validations",
        "Improved performance by ~40%",
      ]}
      caseStudyLink="/projects/mos"
    />

    {/* CHA Project */}
    <ProjectCard
      title="CHA – Clinical Health Assessment"
      description="Healthcare dashboards and analytics platform for clinical teams."
      points={[
        "Redux-based global state management",
        "Interactive charts & dashboards",
        "Reduced load time by 30–45%",
        "Improved accessibility & responsiveness",
      ]}
      caseStudyLink="/projects/cha"
    />

  </div>
</section>

      </Reveal>

      <ExperienceTimeline />
      <Skills />

      <Contact />
      <Footer />


      

    </>
  );
}
