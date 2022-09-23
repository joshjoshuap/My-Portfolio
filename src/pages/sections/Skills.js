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
import figmaIcon from "/public/icons/figma-icon.svg";
import ubuntuIcon from "/public/icons/ubuntu-icon.svg";

const Skills = () => {
  return (
    <div className="py-16 px-28">
      <h1 className="text-blue-600 text-7xl font-semibold"> What I Use </h1>
      <div className="grid grid-cols md:grid-cols-3 px-6 mt-3 md:gap-10 md:px-16">
        <div className="mt-5 border-4 border-blue-800">
          <h1 className="bg-blue-800 text-center text-4xl text-neutral-100 p-3">
            Front End
          </h1>
          <div className="flex flex-wrap p-3 mt-3">
            <Image src={htmlIcon} height={80} width={80} alt="Icon" />
            <Image src={cssIcon} height={80} width={80} alt="Icon" />
            <Image src={sassIcon} height={80} width={80} alt="Icon" />
            <Image src={bootstrapIcon} height={80} width={80} alt="Icon" />
            <Image src={tailwindIcon} height={80} width={80} alt="Icon" />
            <Image src={reactjsIcon} height={80} width={80} alt="Icon" />
            <Image src={nextjsIcon} height={80} width={80} alt="Icon" />
          </div>
        </div>

        <div className="mt-5 border-4 border-blue-800">
          <h1 className="bg-blue-800 text-center text-4xl text-neutral-100 rounded p-3">
            Back End
          </h1>
          <div className="flex flex-wrap p-3 mt-3">
            <Image src={javascriptIcon} height={80} width={80} alt="Icon" />
            <Image src={typescriptIcon} height={80} width={80} alt="Icon" />
            <Image src={nodejsIcon} height={80} width={80} alt="Icon" />
            <Image src={mongodbIcon} height={80} width={80} alt="Icon" />
          </div>
        </div>

        <div className="mt-5 border-4 border-blue-800">
          <h1 className="bg-blue-800 text-center text-4xl text-neutral-100 rounded p-3">
            Tools
          </h1>
          <div className="flex flex-wrap p-3 mt-3">
            <Image src={visualstudioIcon} height={80} width={80} alt="Icon" />
            <Image src={vscodeIcon} height={80} width={80} alt="Icon" />
            <Image src={gitIcon} height={80} width={80} alt="Icon" />
            <Image src={githubIcon} height={80} width={80} alt="Icon" />
            <Image src={figmaIcon} height={80} width={80} alt="Icon" />
            <Image src={ubuntuIcon} height={80} width={80} alt="Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
