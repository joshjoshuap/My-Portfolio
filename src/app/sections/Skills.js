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

let frontEnd = [
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
];

let backEnd = [
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
];

let development = [
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
];

let design = [
  {
    title: 'Figma',
    icon: figmaIcon,
  },
  {
    title: 'Canva',
    icon: canvaIcon,
  },
];

export default function Skills() {
  return (
    <div className="bg-blue" id="skills">
      <div className="w-10/12 py-10 mx-auto" id="skills">
        <h1 className="text-white text-6xl font-serif font-bold flex justify-center">Skills</h1>
        <SkillsCard SkillTitle="FRONT END" icons={frontEnd} className="text-lightorange" />
        <SkillsCard SkillTitle="BACK END" icons={backEnd} className="text-lightgreen" />
        <SkillsCard SkillTitle="Development" icons={development} className="text-lightorange" />
        <SkillsCard SkillTitle="Design" icons={design} className="text-lightgreen" />
      </div>
    </div>
  );
}
