import { Nav } from "@/components/layout/Nav";
import { Hi } from "@/components/sections/Hi";
import { About } from "@/components/sections/About";
import { Career } from "@/components/sections/Career";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hi />
        <About />
        <Career />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
