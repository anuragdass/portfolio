import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Capabilities />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
