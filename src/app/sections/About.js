import Section from '../components/Section';

export default function About() {
  return (
    <Section id="about" sectionTitle="About" titleColor="text-blue" bgColor="bg-white">
      <p className="mb-5 text-justify text-md lg:text-xl indent-3 lg:indent-10">
        I graduated with Bachelor's Degree in Information Technology at Quezon City University and
        Senior High in ICT strand at STI College Novaliches. Studied programming, web development,
        and software. Have skills and knowledge in web development, web design, and database
        management
      </p>

      <p className="mb-5 text-justify text-md lg:text-xl indent-3 lg:indent-10">
        I work in a computer store as a sales, technician and graphic designer. While working as a
        computer tech, in my spare time I upskill and improve my programming skill. I want to be
        good at programming also in graphic designing.
      </p>

      <p className="mb-5 text-justify text-md lg:text-xl indent-3 lg:indent-10">
        In Front-End I usually use ReactJS, NextJS, Bootstrap, and TailwindCSS. While in Back-End
        development I use NodeJS, ExpressJS, RestAPI, and MongoDB. Also familiar with other
        programming language such as PHP and C#.
      </p>
    </Section>
  );
}
