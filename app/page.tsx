import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
