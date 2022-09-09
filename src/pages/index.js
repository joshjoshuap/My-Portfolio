import About from "./sections/About";
import Header from "./sections/Header";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
      </main>
    </>
  );
}
