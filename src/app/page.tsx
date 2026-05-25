import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";

import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(24,24,27,0.4),transparent)]" />

      <Header />

      <Hero />

      <About />



      <section
          id="projects"
          className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-24"
        >
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] text-zinc-500">
            PROJECTS
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Selected Works
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}