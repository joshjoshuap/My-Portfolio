import Image from "next/image";
import webDevResourcesImage from "/public/images/web-dev-resources.png";
import insightMarketImage from "/public/images/insight-market.png";
import htmlIcon from "/public/icons/html-icon.svg";
import cssIcon from "/public/icons/css-icon.svg";
import sassIcon from "/public/icons/sass-icon.svg";
import tailwindIcon from "/public/icons/tailwindcss-icon.svg";
import reactjsIcon from "/public/icons/reactjs.icon.svg";

const Projects = () => {
  return (
    <div className="w-11/12 py-10 mx-auto">
      <h1 className="text-neutral-800 text-4xl pl-10"> What I Build</h1>
      <div className="flex gap-5 justify-center">
        <div className="border border-neutral-600 shadow-xl w-96 p-5">
          <Image
            src={webDevResourcesImage}
            height={220}
            width={350}
            alt="Web Dev Screenshot"
          />
          <h1 className="text-center text-xl my-5">Web Dev Resources</h1>
          <p className="mb-5">
            My personal list of resources and developer tools to build and learn
            web development. Contains Documentation, websites, links and guides.
          </p>
          <h3 className="text-neutral-600 text-lg">Technologies Used</h3>
          <div className="flex flex-wrap">
            <Image src={htmlIcon} width={0} alt="Icons" />
            <Image src={cssIcon} width={0} alt="Icons" />
            <Image src={sassIcon} width={0} alt="Icons" />
            <Image src={reactjsIcon} width={0} alt="Icons" />
          </div>
          <div className="flex justify-between mt-5">
            <a
              href="https://joshjoshuap-webdevresources.vercel.app/"
              className="border-2 border-blue-600 rounded text-blue-600 py-3 px-5 hover:text-neutral-100 hover:bg-blue-600 transition ease-in"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
            <a
              href="https://github.com/joshjoshuap/webdev-resources"
              className="border-2 border-neutral-900 rounded text-neutral-600 py-3 px-5 hover:text-neutral-100 hover:bg-neutral-900 transition ease-in"
              target="_blank"
              rel="noreferrer"
            >
              View Github Repository
            </a>
          </div>
        </div>

        <div className="border border-neutral-600 shadow-xl w-96 p-5">
          <Image
            src={insightMarketImage}
            height={220}
            width={350}
            alt="Web Dev Screenshot"
          />
          <h1 className="text-center text-xl my-5">Insight Market</h1>
          <p className="mb-5">
            API based crypto market, shows price, volume and percentage changed
          </p>
          <h3 className="text-neutral-600 text-lg">Technologies Used</h3>
          <div className="flex flex-wrap">
            <Image src={htmlIcon} width={0} alt="Icons" />
            <Image src={cssIcon} width={0} alt="Icons" />
            <Image src={tailwindIcon} width={0} alt="Icons" />
            <Image src={reactjsIcon} width={0} alt="Icons" />
          </div>
          <div className="flex justify-between mt-5">
            <a
              href="https://joshjoshuap-insightmarketapi.vercel.app/"
              className="border-2 border-blue-600 rounded text-blue-600 py-3 px-5 hover:text-neutral-100 hover:bg-blue-600 transition ease-in"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
            <a
              href="https://github.com/joshjoshuap/insight-market-api"
              className="border-2 border-neutral-900 rounded text-neutral-600 py-3 px-5 hover:text-neutral-100 hover:bg-neutral-900 transition ease-in"
              target="_blank"
              rel="noreferrer"
            >
              View Github Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
