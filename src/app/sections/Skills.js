import Section from '../components/Section';
import SkillsCard from '../components/SkillsCard';
import {
  htmlIcon,
  cssIcon,
  sassIcon,
  bootstrapIcon,
  tailwindIcon,
  reactjsIcon,
  javascriptIcon,
  csharpIcon,
  nodejsIcon,
  dotnetIcon,
  mongodbIcon,
  mysqlIcon,
  vscodeIcon,
  visualstudioIcon,
  gitIcon,
  githubIcon,
  bashIcon,
  ubuntuIcon,
  figmaIcon,
  canvaIcon,
} from '../assets/icons';

let skillList = [
  {
    title: 'Front End',
    titleColor: 'text-lightgreen',
    skills: [
      {
        title: 'HTML',
        icon: htmlIcon,
      },
      {
        title: 'CSS',
        icon: cssIcon,
      },
      {
        title: 'SASS',
        icon: sassIcon,
      },
      {
        title: 'Bootstrap',
        icon: bootstrapIcon,
      },
      {
        title: 'Tailwind',
        icon: tailwindIcon,
      },
      {
        title: 'React',
        icon: reactjsIcon,
      },
    ],
  },
  {
    title: 'Back End',
    titleColor: 'text-lightblue',
    skills: [
      {
        title: 'Javascript',
        icon: javascriptIcon,
      },
      {
        title: 'C#',
        icon: csharpIcon,
      },
      {
        title: 'NodeJS',
        icon: nodejsIcon,
      },
      {
        title: '.NET',
        icon: dotnetIcon,
      },
      {
        title: 'MongoDB',
        icon: mongodbIcon,
      },
      {
        title: 'MySQL',
        icon: mysqlIcon,
      },
    ],
  },
  {
    title: 'Development',
    titleColor: 'text-lightgreen',
    skills: [
      {
        title: 'VSCode',
        icon: vscodeIcon,
      },
      {
        title: 'Visual Studio',
        icon: visualstudioIcon,
      },
      {
        title: 'Git',
        icon: gitIcon,
      },
      {
        title: 'Github',
        icon: githubIcon,
      },
      {
        title: 'Bash',
        icon: bashIcon,
      },
      {
        title: 'Ubuntu',
        icon: ubuntuIcon,
      },
    ],
  },
  {
    title: 'Design',
    titleColor: 'text-lightblue',
    skills: [
      {
        title: 'Figma',
        icon: figmaIcon,
      },
      {
        title: 'Canva',
        icon: canvaIcon,
      },
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      sectionTitle="Skills"
      titleColor="text-white"
      titleIsCenter="Yes"
      bgColor="bg-black">
      {skillList.map((item) => (
        <SkillsCard SkillTitle={item.title} icons={item.skills} className={item.titleColor} />
      ))}
    </Section>
  );
}
