import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";






export default function Home() {
  return (
    <>
      
      <Navbar />
      <Hero />
      

      {/* PROJECTS SECTION */}
      <Reveal>
      <section
  id="projects"
  className="px-6 py-20 max-w-6xl mx-auto text-white"
>
  <h2 className="text-3xl font-bold mb-12">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">
    
    <ProjectCard
  title="MOS – Material Operations System"
  description="Enterprise React application managing inventory, purchase requests, and delivery workflows."
  href="/projects/mos"
  points={[
    "Built 50+ reusable React components",
    "Integrated 20+ REST APIs",
    "Role-based access & validations",
    "Improved performance by ~40%",
  ]}
/>

<ProjectCard
  title="CHA – Clinical Health Assessment"
  description="Healthcare dashboards and analytics platform for clinical teams."
  href="/projects/cha"
  points={[
    "Redux & Context-based state management",
    "Interactive charts & dashboards",
    "Reduced load time by 30–45%",
    "Improved accessibility & responsiveness",
  ]}
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
