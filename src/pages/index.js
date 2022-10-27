import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <About />
        <Services />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
    </>
  );
}
