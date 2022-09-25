import {
  webDevResourcesImage,
  insightMarketImage,
  techytechyZoneImage,
  htmlIcon,
  cssIcon,
  sassIcon,
  bootstrapIcon,
  tailwindIcon,
  reactjsIcon,
  nextjsIcon,
} from "/src/js/image-assets";
import Section from "../../components/Sections";
import ProjectItem from "../../components/ProjectsItem";

const Projects = () => {
  return (
    <Section sectionTitle="Personal Projects">
      <div className="grid grid-cols-1 gap-3 justify-center mt-5 md:grid-cols-2 md:gap-5 md:mt-5 lg:grid-cols-3 lg:gap-8">
        <ProjectItem
          projectTitle="Web Dev Resources"
          projectImage={webDevResourcesImage}
          projectDescription="My personal list of resources and developer tools to build and
      learn web development."
          projectWebLink="https://joshjoshuap-webdevresources.vercel.app/"
          projectRepoLink="https://github.com/joshjoshuap/webdev-resources"
          projectTechnologies={[
            { image: htmlIcon },
            { image: cssIcon },
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
            { image: htmlIcon },
            { image: cssIcon },
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
            { image: htmlIcon },
            { image: cssIcon },
            { image: bootstrapIcon },
            { image: reactjsIcon },
          ]}
        />
      </div>
    </Section>
  );
};

export default Projects;
