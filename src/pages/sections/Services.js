import Image from "next/image";
import frontEndImage from "/public/images/frontend.png";
import backEndImage from "/public/images/backend.png";
import webDesign from "/public/images/web-design.png";
import webDevelopment from "/public/images/web-development.png";

const Services = () => {
  return (
    <div className="py-8 px-6 md:py-12 md:px-12 lg:py-16 lg:px-28">
      <h1 className="text-blue-600 text-4xl text-center font-semibold md:text-5xl md:text-left lg:text-7xl"> What I Do</h1>
      <div className="grid grid-cols-1 gap-5 text-neutral-900 mt-5 mx-auto md:grid-cols-2 md:gap-10 md:px-16 md:mt-10 lg:grid-cols-4">
        <div className="text-center">
          <Image
            src={frontEndImage}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="italic md:text-xl lg:text-2xl">Front End Development</h2>
        </div>

        <div className="text-center">
          <Image
            src={backEndImage}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="italic md:text-xl lg:text-2xl">Back End Development</h2>
        </div>

        <div className="text-center">
          <Image
            src={webDesign}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="italic md:text-xl lg:text-2xl">Web Design</h2>
        </div>

        <div className="text-center">
          <Image
            src={webDevelopment}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="italic md:text-xl lg:text-2xl">Web Development</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
