import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WorkGrid } from "@/components/WorkGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <WorkGrid projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
