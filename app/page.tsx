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
       <main className="px-6 py-24 max-w-5xl mx-auto text-white">
       <h1 className="text-5xl font-bold mb-6">
           Frontend Engineer <span className="text-sky-400">(React.js)</span>
        </h1>

         <p className="text-slate-400 max-w-2xl">
             I’m Balaji Kolli, a Frontend Engineer with 3.6+ years of experience
            building scalable enterprise applications.
          </p>
        </main>
      </Reveal>


      <ExperienceTimeline />
      <Skills />

      
      



      {/* PROJECTS SECTION */}
      <Reveal>
      <section
        id="projects"
        className="px-6 py-20 max-w-5xl mx-auto text-white"
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="MOS – Material Operations System"
            description="Enterprise React application managing inventory, purchase requests and delivery workflows."
            points={[
              "Built 50+ reusable React components",
              "Integrated 20+ REST APIs",
              "Role-based access & validations",
              "Improved performance by ~40%",
            ]}
          />

          <ProjectCard
            title="Clinical Health Assessment (CHA)"
            description="Healthcare dashboards and analytics platform."
            points={[
              "Redux & Context-based state management",
              "Analytics dashboards using charts",
              "Reduced load time by 30–45%",
              "Improved accessibility & responsiveness",
            ]}
          />
        </div>
      </section>
      </Reveal>

      <Contact />
      <Footer />


      

    </>
  );
}
