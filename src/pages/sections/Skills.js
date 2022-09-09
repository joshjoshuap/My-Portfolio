import Image from "next/image";
import htmlIcon from "/public/icons/html-icon.svg";
import cssIcon from "/public/icons/css-icon.svg";
import bootstrapIcon from "/public/icons/bootstrap-icon.svg";
import tailwindIcon from "/public/icons/tailwindcss-icon.svg";
import javascriptIcon from "/public/icons/javascript-icon.svg";
import typescriptIcon from "/public/icons/typescript-icon.svg";
import nodejsIcon from "/public/icons/nodejs-icon.svg";
import expressjsIcon from "/public/icons/expressjs-icon.svg";
import mongodbIcon from "/public/icons/mongodb-icon.svg";
import visualstudioIcon from "/public/icons/visualstudio-icon.svg";
import vscodeIcon from "/public/icons/vscode-icon.svg";
import gitIcon from "/public/icons/git-icon.svg";
import githubIcon from "/public/icons/github-icon.svg";
import figmaIcon from "/public/icons/figma-icon.svg";
import ubuntuIcon from "/public/icons/ubuntu-icon.svg";

const Skills = () => {
  return (
    <div className="w-11/12 py-10 mx-auto ">
      <h1 className="text-neutral-800 text-4xl pl-10"> What I Use </h1>
      <div className="grid grid-cols-3 gap-5 pl-16 mt-3">
        <div>
          <h1 className="text-center text-2xl mb-5">Front End</h1>
          <div className="flex flex-wrap">
            <Image src={htmlIcon} width={0} alt="Icon" />
            <Image src={cssIcon} width={0} alt="Icon" />
            <Image src={bootstrapIcon} width={0} alt="Icon" />
            <Image src={tailwindIcon} width={0} alt="Icon" />
          </div>
        </div>

        <div>
          <h1 className="text-center text-2xl mb-5">Back End</h1>
          <div className="flex flex-wrap">
            <Image src={javascriptIcon} width={0} alt="Icon" />
            <Image src={typescriptIcon} width={0} alt="Icon" />
            <Image src={nodejsIcon} width={0} alt="Icon" />
            <Image src={expressjsIcon} width={0} alt="Icon" />
            <Image src={mongodbIcon} width={0} alt="Icon" />
          </div>
        </div>

        <div>
          <h1 className="text-center text-2xl mb-5">Tools</h1>
          <div className="flex flex-wrap">
            <Image src={visualstudioIcon} width={0} alt="Icon" />
            <Image src={vscodeIcon} width={0} alt="Icon" />
            <Image src={gitIcon} width={0} alt="Icon" />
            <Image src={githubIcon} width={0} alt="Icon" />
            <Image src={figmaIcon} width={0} alt="Icon" />
            <Image src={ubuntuIcon} width={0} alt="Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
