import Section from '../components/Section';

let Paragraph = ({ children }) => {
  return <p className="mb-2 text-justify text-md lg:text-lg indent-3 lg:indent-10">{children}</p>;
};

export default function About() {
  return (
    <Section id="about" titleColor="text-lightblue" bgColor="bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="mb-10 lg:w-1/2 lg:mb-0">
          <h1 className="mb-5 text-4xl font-medium text-center lg:mb-10 lg:text-6xl text-emerald-700">
            MY STORY
          </h1>
          <Paragraph>
            I graduated with Bachelor's Degree in Information Technology at Quezon City University
            and Senior High in ICT strand at STI College Novaliches. Studied programming, web
            development, and software. Have skills and knowledge in web development, web design, and
            database management
          </Paragraph>

          <Paragraph>
            I love computer and I am passionate about it. In my spare I teach myself and learn as
            much about computer, programming, Cybersecurity, cloud even the AI.
          </Paragraph>

          <Paragraph>
            In programming I usually use ReactJS, NextJS, Bootstrap, and TailwindCSS for the
            FrontEnd. While in Back-End development I use NodeJS.
          </Paragraph>

          <Paragraph>
            Currently I am working as an IT Support in an IT Software Company. Mostly I do is to
            give technical assistance eto employee and maintain the Infrasctucture of the company
          </Paragraph>
        </div>
        <div className="lg:w-1/2">
          <h1 className="mb-5 text-4xl text-center text-red-600 lg:mb-10 lg:text-6xl">
            JOB EXPERIENCE
          </h1>

          <div className="my-2">
            <p className="text-2xl font-semibold text-teal-800">PC Engineer (IT Support)</p>
            <p className="text-sm italic text-neutral-700">
              Azeus Philippines System Limited Inc - October 2023 to Present
            </p>
            <div className="w-10/12 mx-auto mt-3">
              <ul className="text-sm list-disc">
                <li>
                  Provide assistance to employees tickets and technical concern as well as helping
                  the company technical problems
                </li>
                <li>
                  Assisting the System Administrator in monitoring and maintaining the system and IT
                  infrastructure
                </li>
                <li>
                  Build and troubleshoot desktop workstation, computer peripherals, networks and
                  servers
                </li>
                <li>
                  Install and configure Server’s VM using KVM and VMware in different operating
                  system such as Windows and Linux
                </li>
                Train and guide employees on using computer hardware, software programs and user
                accounts
              </ul>
            </div>
          </div>

          <div className="my-2">
            <p className="text-2xl font-semibold text-teal-800">Sales / Computer Technician</p>
            <p className="text-sm italic text-neutral-700">
              Starworks Integrated Inc / OPNetworks Inc - Februay 2023 to July 2023
            </p>
            <div className="w-10/12 mx-auto mt-3">
              <ul className="text-sm list-disc">
                <li>
                  Build, repair, and troubleshoot client computer hardware, operating system and
                  software programs
                </li>
                <li>
                  Selling and advertising computer products and accessories through store, social
                  media, email and phone calls
                </li>
                <li>Managing and monitoring store products inventory using excel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
