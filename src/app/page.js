import Navigation from './components/Navigation';
import About from './sections/About';
import Design from './sections/Design';
import Header from './sections/Header';
import Project from './sections/Project';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Project />
      <Design />
    </>
  );
}
