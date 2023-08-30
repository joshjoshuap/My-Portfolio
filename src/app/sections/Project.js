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

let projects = [
  {
    title: 'Web Dev Resources',
    desc: 'My personal list of resources and developer tools to build and learn web development.',
    image: webdevresourcesImage,
    github: 'https://github.com/joshjoshuap/webdev-resources',
    website: 'https://joshjoshuap-webdevresources.vercel.app/',
    technologies: [
      { title: 'HTML Icon', icon: htmlIcon },
      { title: 'CSS Icon', icon: cssIcon },
      { title: 'SASS Icon', icon: sassIcon },
      { title: 'React Icon', icon: reactjsIcon },
    ],
  },
  {
    title: 'Insight Market',
    desc: 'API based crypto market, shows price, volume and percentage changed',
    image: insightmarketImage,
    github: 'https://github.com/joshjoshuap/insight-market-api',
    website: 'https://joshjoshuap-insightmarketapi.vercel.app/',
    technologies: [
      { title: 'Taiwlind Icon', icon: tailwindIcon },
      { title: 'React Icon', icon: reactjsIcon },
      { title: 'ReactJS Icon', icon: reactjsIcon },
      { title: 'NextJS Icon', icon: nextjsIcon },
    ],
  },
  {
    title: 'Post Post',
    desc: 'A simple posting site where you can share your idea',
    image: postpostImage,
    github: 'https://github.com/joshjoshuap/post-post',
    website: 'https://post-post.onrender.com/',
    technologies: [
      { title: 'Taiwlind Icon', icon: tailwindIcon },
      { title: 'ReactJS Icon', icon: reactjsIcon },
      { title: 'NodeJS Icon', icon: nodejsIcon },
      { title: 'MongoDB Icon', icon: mongodbIcon },
    ],
  },
];

export default function Project() {
  return (
    <div className="w-10/12 py-10 mx-auto" id="projects">
      <h1 className="font-serif text-6xl font-bold text-blue">Projects</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {projects.map((item) => (
          <ProjectCard
            title={item.title}
            desc={item.desc}
            image={item.image}
            github={item.github}
            website={item.website}
            technologies={item.technologies}
          />
        ))}
      </div>
    </div>
  );
}
