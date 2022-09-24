import Image from "next/image";
import htmlIcon from "/public/icons/html-icon.svg";
import cssIcon from "/public/icons/css-icon.svg";
import sassIcon from "/public/icons/sass-icon.svg";
import bootstrapIcon from "/public/icons/bootstrap-icon.svg";
import tailwindIcon from "/public/icons/tailwindcss-icon.svg";
import reactjsIcon from "/public/icons/reactjs-icon.svg";
import nextjsIcon from "/public/icons/nextjs-icon.svg";
import javascriptIcon from "/public/icons/javascript-icon.svg";
import typescriptIcon from "/public/icons/typescript-icon.svg";
import nodejsIcon from "/public/icons/nodejs-icon.svg";
import mongodbIcon from "/public/icons/mongodb-icon.svg";
import visualstudioIcon from "/public/icons/visualstudio-icon.svg";
import vscodeIcon from "/public/icons/vscode-icon.svg";
import gitIcon from "/public/icons/git-icon.svg";
import githubIcon from "/public/icons/github-icon.svg";
import bashTerminalIcon from "/public/icons/bashterminal-icon.svg";
import figmaIcon from "/public/icons/figma-icon.svg";
import ubuntuIcon from "/public/icons/ubuntu-icon.svg";

const Skills = () => {
  return (
    <div className="py-8 px-6 md:py-12 md:px-12 lg:py-16 lg:px-28">
      <h1 className="text-blue-600 text-4xl text-center font-semibold md:text-5xl md:text-left lg:text-7xl">
        Technologies I Used
      </h1>
      <div className="grid grid-cols mt-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="border-blue-800 border-4 mt-5">
          <h1 className="bg-blue-800 text-neutral-100 text-center p-3 md:text-2xl lg:text-4xl">
            Front End
          </h1>
          <div className="flex flex-wrap justify-center p-3 mt-3">
            <Image src={htmlIcon} height={80} width={80} alt="Icon" />
            <Image src={cssIcon} height={80} width={80} alt="Icon" />
            <Image src={sassIcon} height={80} width={80} alt="Icon" />
            <Image src={bootstrapIcon} height={80} width={80} alt="Icon" />
            <Image src={tailwindIcon} height={80} width={80} alt="Icon" />
            <Image src={reactjsIcon} height={80} width={80} alt="Icon" />
          </div>
        </div>

        <div className=" border-blue-800 border-4 mt-5">
          <h1 className="bg-blue-800 text-neutral-100 text-center  rounded p-3 md:text-2xl lg:text-4xl">
            Back End
          </h1>
          <div className="flex flex-wrap justify-center p-3 mt-3">
            <Image src={javascriptIcon} height={80} width={80} alt="Icon" />
            <Image src={typescriptIcon} height={80} width={80} alt="Icon" />
            <Image src={nextjsIcon} height={80} width={80} alt="Icon" />
            <Image src={nodejsIcon} height={80} width={80} alt="Icon" />
            <Image src={mongodbIcon} height={80} width={80} alt="Icon" />
          </div>
        </div>

        <div className="border-blue-800 border-4 mt-5">
          <h1 className="bg-blue-800 text-neutral-100 text-center  rounded p-3 md:text-2xl lg:text-4xl">
            Tools
          </h1>
          <div className="flex flex-wrap justify-center p-3 mt-3">
            <Image src={visualstudioIcon} height={80} width={80} alt="Icon" />
            <Image src={vscodeIcon} height={80} width={80} alt="Icon" />
            <Image src={gitIcon} height={80} width={80} alt="Icon" />
            <Image src={githubIcon} height={80} width={80} alt="Icon" />
            <Image src={bashTerminalIcon} height={80} width={80} alt="Icon" />
            <Image src={figmaIcon} height={80} width={80} alt="Icon" />
            <Image src={ubuntuIcon} height={80} width={80} alt="Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
