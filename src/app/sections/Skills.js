import Image from 'next/image';
import Section from '../components/Section';
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
      bgColor="bg-gradient-to-r from-slate-900 via-cyan-900 to-sky-900">
      <div className="grid grid-cols-2 gap-10 mt-20">
        <div className="p-5 bg-white border-4 border-white rounded-sm">
          <h1 className="text-4xl font-semibold text-center text-teal-800">DEVELOPMENT</h1>
          <div className="grid grid-cols-5 mt-5">
            <Image
              shadow="sm"
              className=""
              height={100}
              width={100}
              alt={htmlIcon}
              src={htmlIcon}
            />
            <Image shadow="sm" className="" height={100} width={100} src={cssIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={sassIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={bootstrapIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={tailwindIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={reactjsIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={nodejsIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={mongodbIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={gitIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={githubIcon} />
          </div>
        </div>
        <div className="p-5 bg-white border-4 border-white rounded-sm">
          <h1 className="text-4xl font-semibold text-center text-teal-800">PROGRAMMING</h1>
          <div className="grid grid-cols-5 mt-5">
            <Image shadow="sm" className="" height={100} width={100} src={javascriptIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={mysqlIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={bashIcon} />
          </div>
        </div>
        <div className="p-5 bg-white border-4 border-white rounded-sm">
          <h1 className="text-4xl font-semibold text-center text-teal-800">
            SYSTEM ADMINISTRATION
          </h1>
          <div className="grid grid-cols-5 mt-5">
            <Image shadow="sm" className="" height={100} width={100} src={ubuntuIcon} />
          </div>
        </div>
        <div className="p-5 bg-white border-4 border-white rounded-sm">
          <h1 className="text-4xl font-semibold text-center text-teal-800">SOFTWARE - TOOLS</h1>
          <div className="grid grid-cols-5 mt-5">
            <Image shadow="sm" className="" height={100} width={100} src={vscodeIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={visualstudioIcon} />
          </div>
        </div>
      </div>
    </Section>
  );
}
