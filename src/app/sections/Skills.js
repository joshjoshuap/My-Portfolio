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
  nodejsIcon,
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
  centosIcon,
  fedoraIcon,
  kalilinuxIcon,
  windowsIcon,
  vercelIcon,
} from '../assets/icons';

export default function Skills() {
  return (
    <Section
      id="skills"
      sectionTitle="Skills"
      titleColor="text-white"
      titleIsCenter="Yes"
      bgColor="bg-gradient-to-r from-slate-900 via-cyan-900 to-sky-900">
      <div className="grid grid-cols-1 gap-10 mt-20 lg:grid-cols-2">
        <div className="p-5 bg-white border-4 border-white rounded-sm">
          <h1 className="text-3xl font-semibold text-center text-teal-800 lg:text-4xl">
            DEVELOPMENT
          </h1>
          <div className="grid grid-cols-4 gap-2 mt-5 md:grid-cols-5 md:gap-1">
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
          <h1 className="text-3xl font-semibold text-center text-teal-800 lg:text-4xl">
            PROGRAMMING
          </h1>
          <div className="grid grid-cols-4 gap-2 mt-5 md:grid-cols-5 md:gap-1">
            <Image shadow="sm" className="" height={100} width={100} src={javascriptIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={mysqlIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={bashIcon} />
          </div>
        </div>
        <div className="p-5 bg-white border-4 border-white rounded-sm">
          <h1 className="text-3xl font-semibold text-center text-teal-800 lg:text-4xl">
            SYSTEM ADMINISTRATION
          </h1>
          <div className="grid grid-cols-4 gap-2 mt-5 md:grid-cols-5 md:gap-1">
            <Image shadow="sm" className="" height={100} width={100} src={windowsIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={ubuntuIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={centosIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={fedoraIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={kalilinuxIcon} />
          </div>
        </div>
        <div className="p-5 bg-white border-4 border-white rounded-sm">
          <h1 className="text-3xl font-semibold text-center text-teal-800 lg:text-4xl">
            SOFTWARE - TOOLS
          </h1>
          <div className="grid grid-cols-4 gap-2 mt-5 md:grid-cols-5 md:gap-1">
            <Image shadow="sm" className="" height={100} width={100} src={vscodeIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={visualstudioIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={figmaIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={canvaIcon} />
            <Image shadow="sm" className="" height={100} width={100} src={vercelIcon} />
          </div>
        </div>
      </div>
    </Section>
  );
}
