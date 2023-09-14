import ProjectCard from '../components/ProjectCard';
import { webdevresourcesImage, insightmarketImage, postpostImage } from '../assets/image';
import {
  reactjsIcon,
  nextjsIcon,
  tailwindIcon,
  nodejsIcon,
  mongodbIcon,
  viteIcon,
} from '../assets/icons';
import Section from '../components/Section';

let projects = [
  {
    title: 'Web Dev Resources',
    desc: 'My personal list of resources and developer tools to build and learn web development.',
    image: webdevresourcesImage,
    github: 'https://github.com/joshjoshuap/webdev-resources',
    website: 'https://joshjoshuap-webdevresources.vercel.app/',
    technologies: [
      { title: 'Tailwind Icon', icon: tailwindIcon },
      { title: 'Vite Icon', icon: viteIcon },
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
      { title: 'Tailwind Icon', icon: tailwindIcon },
      { title: 'Vite Icon', icon: viteIcon },
      { title: 'React Icon', icon: reactjsIcon },
    ],
  },
  {
    title: 'Post Post',
    desc: 'A simple posting site where you can share your idea',
    image: postpostImage,
    github: 'https://github.com/joshjoshuap/post-post',
    website: 'https://post-post.vercel.app/',
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
    <Section id="projects" sectionTitle="Projects" titleColor="text-blue" bgColor="bg-white">
      <div className="flex flex-col gap-10 mt-10 xl:flex-row">
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
    </Section>
  );
}
