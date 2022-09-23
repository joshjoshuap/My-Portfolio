import Image from "next/image";
import webDevResourcesImage from "/public/images/web-dev-resources.jpg";
import insightMarketImage from "/public/images/insight-market.jpg";
import techytechyZoneImage from "/public/images/techy-techy-zone.jpg";
import htmlIcon from "/public/icons/html-icon.svg";
import cssIcon from "/public/icons/css-icon.svg";
import sassIcon from "/public/icons/sass-icon.svg";
import bootstrapIcon from "/public/icons/bootstrap-icon.svg";
import tailwindIcon from "/public/icons/tailwindcss-icon.svg";
import reactjsIcon from "/public/icons/reactjs-icon.svg";

const Projects = () => {
  return (
    <div className="py-16 px-28">
      <h1 className="text-blue-600 text-7xl font-semibold">What I Build</h1>
      <div className="grid grid-cols-3 gap-10 justify-center md:flex-row md:mt-5">
        <div className="border-2 border-blue-800 rounded">
          <Image src={webDevResourcesImage} alt="Web Dev Screenshot" />
          <div className="p-5">
            <h1 className="text-blue-700 text-center text-2xl font-semibold mb-5">
              Web Dev Resources
            </h1>
            <p className="text-lg mb-5">
              My personal list of resources and developer tools to build and
              learn web development.
            </p>
            <div className="border-2 border-blue-800">
              <h3 className="bg-blue-800 text-center text-xl text-neutral-100 p-1">
                Technologies Used
              </h3>
              <div className="flex flex-wrap justify-center">
                <Image src={htmlIcon} height={60} width={60} alt="Icons" />
                <Image src={cssIcon} height={60} width={60} alt="Icons" />
                <Image src={sassIcon} height={60} width={60} alt="Icons" />
                <Image src={reactjsIcon} height={60} width={60} alt="Icons" />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 mt-5 md:flex-row md:gap-5">
              <a
                href="https://joshjoshuap-webdevresources.vercel.app/"
                className="border-2 border-blue-700 rounded text-blue-700 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:text-neutral-100 hover:bg-blue-700 transition ease-in"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/joshjoshuap/webdev-resources"
                className="border-2 border-neutral-900 rounded text-neutral-600 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:text-neutral-100 hover:bg-neutral-900 transition ease-in"
                target="_blank"
                rel="noreferrer"
              >
                View Github Repository
              </a>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-800 rounded">
          <Image src={insightMarketImage} alt="Web Dev Screenshot" />
          <div className="p-5">
            <h1 className="text-blue-700 text-center text-2xl font-semibold mb-5">
              Insight Market
            </h1>
            <p className="text-lg mb-5">
              API based crypto market, shows price, volume and percentage
              changed
            </p>
            <div className="border-2 border-blue-800">
              <h3 className="bg-blue-800 text-center text-xl text-neutral-100 p-1">
                Technologies Used
              </h3>
              <div className="flex flex-wrap justify-center">
                <Image src={htmlIcon} height={60} width={60} alt="Icons" />
                <Image src={cssIcon} height={60} width={60} alt="Icons" />
                <Image src={tailwindIcon} height={60} width={60} alt="Icons" />
                <Image src={reactjsIcon} height={60} width={60} alt="Icons" />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 mt-5 md:flex-row md:gap-5">
              <a
                href="https://joshjoshuap-insightmarketapi.vercel.app/"
                className="border-2 border-blue-700 rounded text-blue-700 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:text-neutral-100 hover:bg-blue-700 transition ease-in"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/joshjoshuap/insight-market-api"
                className="border-2 border-neutral-900 rounded text-neutral-600 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:text-neutral-100 hover:bg-neutral-900 transition ease-in"
                target="_blank"
                rel="noreferrer"
              >
                View Github Repository
              </a>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-800 rounded">
          <Image src={techytechyZoneImage} alt="Web Dev Screenshot" />
          <div className="p-5">
            <h1 className="text-blue-700 text-center text-2xl font-semibold mb-5">
              Insight Market
            </h1>
            <p className="text-lg mb-5">
              Simple Website contains gadgets, mobile and tech trends.
            </p>
            <div className="border-2 border-blue-800">
              <h3 className="bg-blue-800 text-center text-xl text-neutral-100 p-1">
                Technologies Used
              </h3>
              <div className="flex flex-wrap justify-center">
                <Image src={htmlIcon} height={60} width={60} alt="Icons" />
                <Image src={cssIcon} height={60} width={60} alt="Icons" />
                <Image src={bootstrapIcon} height={60} width={60} alt="Icons" />
                <Image src={reactjsIcon} height={60} width={60} alt="Icons" />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 mt-5 md:flex-row md:gap-5">
              <a
                href="https://joshjoshuap-techytechzone.vercel.app/"
                className="border-2 border-blue-700 rounded text-blue-700 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:text-neutral-100 hover:bg-blue-700 transition ease-in"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
              <a
                href="https://github.com/joshjoshuap/techy-tech-zone"
                className="border-2 border-neutral-900 rounded text-neutral-600 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:text-neutral-100 hover:bg-neutral-900 transition ease-in"
                target="_blank"
                rel="noreferrer"
              >
                View Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
