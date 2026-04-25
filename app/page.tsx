import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WorkGrid } from "@/components/WorkGrid";
import { Archive } from "@/components/Archive";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getProjects, getFeatured } from "@/lib/projects";

export default async function Home() {
  const [featured, all] = await Promise.all([getFeatured(), getProjects()]);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <WorkGrid projects={featured} />
        <Archive projects={all} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
