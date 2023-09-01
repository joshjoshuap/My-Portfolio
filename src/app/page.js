import Navigation from './components/Navigation';
import About from './sections/About';
import Contact from './sections/Contact';
import Design from './sections/Design';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Project from './sections/Project';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <About id="about" />
      <Skills id="skills" />
      <Project />
      <Design />
      <Contact />
      <Footer />
    </>
  );
}
