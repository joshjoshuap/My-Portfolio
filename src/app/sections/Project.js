import ProjectCard from '../components/ProjectCard';
import { webdevresourcesImage, insightmarketImage, postpostImage } from '../assets/image';
import {
  sassIcon,
  reactjsIcon,
  nextjsIcon,
  tailwindIcon,
  nodejsIcon,
  mongodbIcon,
  htmlIcon,
  cssIcon,
} from '../assets/icons';

let project = [
  {
    title: 'Web Dev Resources',
    desc: 'My personal list of resources and developer tools to build and learn web development.',
    image: webdevresourcesImage,
    github: 'https://github.com/joshjoshuap/webdev-resources',
    website: 'https://joshjoshuap-webdevresources.vercel.app/',
    technologies: [htmlIcon, cssIcon, sassIcon, reactjsIcon],
  },
  {
    title: 'Insight Market',
    desc: 'API based crypto market, shows price, volume and percentage changed',
    image: insightmarketImage,
    github: 'https://github.com/joshjoshuap/insight-market-api',
    website: 'https://joshjoshuap-insightmarketapi.vercel.app/',
    technologies: [tailwindIcon, reactjsIcon, nextjsIcon],
  },
  {
    title: 'Post Post',
    desc: 'A simple posting site where you can share your idea',
    image: postpostImage,
    github: 'https://github.com/joshjoshuap/post-post',
    website: 'https://post-post.onrender.com/',
    technologies: [tailwindIcon, reactjsIcon, nodejsIcon, mongodbIcon],
  },
];

export default function Project() {
  return (
    <div className="w-10/12 py-10 mx-auto" id="projects">
      <h1 className="font-serif text-6xl font-bold text-blue">Projects</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <ProjectCard
          title={project[0].title}
          desc={project[0].desc}
          image={project[0].image}
          github={project[0].github}
          website={project[0].website}
          technologies={project[0].technologies}
        />
        <ProjectCard
          title={project[1].title}
          desc={project[1].desc}
          image={project[1].image}
          github={project[1].github}
          website={project[1].website}
          technologies={project[1].technologies}
        />
        <ProjectCard
          title={project[2].title}
          desc={project[2].desc}
          image={project[2].image}
          github={project[2].github}
          website={project[2].website}
          technologies={project[2].technologies}
        />
      </div>
      ;
    </div>
  );
}
