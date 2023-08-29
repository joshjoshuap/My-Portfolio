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
    technologies: [htmlIcon, cssIcon, sassIcon, reactjsIcon],
  },
  {
    title: 'Insight Market',
    desc: 'API based crypto market, shows price, volume and percentage changed',
    image: insightmarketImage,
    technologies: [tailwindIcon, reactjsIcon, nextjsIcon],
  },
  {
    title: 'Post Post',
    desc: 'A simple posting site where you can share your idea',
    image: postpostImage,
    technologies: [tailwindIcon, reactjsIcon, nodejsIcon, mongodbIcon],
  },
];

export default function Project() {
  return (
    <div className="w-10/12 py-10 mx-auto" id="project">
      <h1 className="font-serif text-6xl font-bold text-blue">Projects</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <ProjectCard
          title={project[0].title}
          desc={project[0].desc}
          image={project[0].image}
          technologies={project[0].technologies}
        />
        <ProjectCard
          title={project[1].title}
          desc={project[1].desc}
          image={project[1].image}
          technologies={project[1].technologies}
        />
        <ProjectCard
          title={project[2].title}
          desc={project[2].desc}
          image={project[2].image}
          technologies={project[2].technologies}
        />
      </div>
      ;
    </div>
  );
}
