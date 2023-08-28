import Navigation from './components/Navigation';
import About from './sections/About';
import Header from './sections/Header';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Skills />
    </>
  );
}
