import {
  webDevResourcesImage,
  insightMarketImage,
  postpostImage,
  sassIcon,
  tailwindIcon,
  reactjsIcon,
  nextjsIcon,
} from "/src/js/image-assets";
import Section from "../../components/Sections";
import ProjectItem from "../../components/ProjectsItem";
import { mongodbIcon, nodejsIcon } from "../../js/image-assets";

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
    </Section>
  );
};

export default Projects;
