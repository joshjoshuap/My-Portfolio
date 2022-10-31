import {
  webDevResourcesImage,
  insightMarketImage,
  techytechyZoneImage,
  postpostImage,
  htmlIcon,
  cssIcon,
  sassIcon,
  bootstrapIcon,
  tailwindIcon,
  reactjsIcon,
  nextjsIcon,
} from "/src/js/image-assets";
import Image from "next/image";
import Section from "../../components/Sections";
import ProjectItem from "../../components/ProjectsItem";
import {
  githubIcon,
  javascriptIcon,
  mongodbIcon,
  nodejsIcon,
} from "../../js/image-assets";

const Projects = () => {
  return (
    <Section sectionTitle="Personal Projects">
      <div className="grid grid-cols-1 gap-3 justify-center mt-5 md:grid-cols-2 md:gap-5 xl:grid-cols-3 lg:gap-8">
        <ProjectItem
          projectTitle="Web Dev Resources"
          projectImage={webDevResourcesImage}
          projectDescription="My personal list of resources and developer tools to build and
      learn web development."
          projectWebLink="https://joshjoshuap-webdevresources.vercel.app/"
          projectRepoLink="https://github.com/joshjoshuap/webdev-resources"
          projectTechnologies={[
            { image: sassIcon },
            { image: reactjsIcon },
            { image: nextjsIcon },
          ]}
        />

        <ProjectItem
          projectTitle="Insight Market"
          projectImage={insightMarketImage}
          projectDescription="API based crypto market, shows price, volume and percentage changed"
          projectWebLink="https://joshjoshuap-insightmarketapi.vercel.app/"
          projectRepoLink="https://github.com/joshjoshuap/insight-market-api"
          projectTechnologies={[
            { image: tailwindIcon },
            { image: reactjsIcon },
            { image: nextjsIcon },
          ]}
        />

        <ProjectItem
          projectTitle="Techy Techy Zone"
          projectImage={techytechyZoneImage}
          projectDescription="Simple Website contains gadgets, mobile and tech."
          projectWebLink="https://joshjoshuap-techytechzone.vercel.app/"
          projectRepoLink="https://github.com/joshjoshuap/techy-tech-zone"
          projectTechnologies={[
            { image: javascriptIcon },
            { image: bootstrapIcon },
            { image: reactjsIcon },
          ]}
        />

        <ProjectItem
          projectTitle="Post Post"
          projectImage={postpostImage}
          projectDescription="A simple posting site where you can share your idea"
          projectWebLink="https://post-post.onrender.com/"
          projectRepoLink="https://github.com/joshjoshuap/post-post"
          projectTechnologies={[
            { image: tailwindIcon },
            { image: reactjsIcon },
            { image: nodejsIcon },
            { image: mongodbIcon },
          ]}
        />
      </div>
      <div className="text-center mt-5">
        <a
          className="bg-neutral-900 text-neutral-100 border-neutral-900 border-2 rounded text-lg font-semibold w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:bg-neutral-100 hover:text-neutral-900 transition ease-in"
          href="https://github.com/joshjoshuap"
          target="_blank"
          rel="noreferrer"
        >
          Visit my Github Profile
        </a>
      </div>
    </Section>
  );
};

export default Projects;
