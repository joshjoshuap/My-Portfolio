import Section from "../../components/Sections";
import Services from "./Services";

const About = () => {
  return (
    <Section
      sectionTitle="About Me"
      backgroundColor="bg-cyan-500"
    >
      <p className="mt-3 text-sm text-center indent-3 md:text-justify md:text-lg md:indent-5 md:pl-5 md:mt-5 lg:text-xl lg:leading-relaxed text-neutral-900">
        I graduated with Bachelor&apos;s Degree in Information Technology at
        Quezon City University and Senior High in ICT strand at STI College
        Novaliches. Studied programming, web development, and software. Have
        skills and knowledge in web development, web design, and database
        management. I use technologies that are applicable to industry standards
        and tech trends.
      </p>

      <p className="mt-3 text-sm text-center indent-3 md:text-justify md:text-lg md:indent-5 md:pl-5 md:mt-5 lg:text-xl lg:leading-relaxed text-neutral-900">
        I am currently employed as a computer technician and designer in small
        computer store. Interested and have passion in both software and
        hardware. While working as a computer tech, for my spare time I upskill
        and improving my programming skill. I want to be good at programming
        also in computer hardware.
      </p>

      <p className="mt-3 text-sm text-center indent-3 md:text-justify md:text-lg md:indent-5 md:pl-5 md:mt-5 lg:text-xl lg:leading-relaxed text-neutral-900 ">
        For now i still learning basics and advance topic such as frameworks,
        databases, alogrithm and complex design. Also trying to make projects
        and do some freelance to showcase my skills and learn a lot.
      </p>
    </Section>
  );
};

export default About;
