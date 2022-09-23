import Image from "next/image";
import frontEndImage from "/public/images/frontend.png";
import backEndImage from "/public/images/backend.png";
import webDesign from "/public/images/web-design.png";
import webDevelopment from "/public/images/web-development.png";

const Services = () => {
  return (
    <div className="py-16 px-28">
      <h1 className="text-blue-600 text-7xl font-semibold"> What I Do</h1>
      <div className="grid grid-cols-2 gap-10 text-neutral-900 mt-5 mx-auto md:px-16 md:grid-cols-4 md:mt-10">
        <div className="text-center">
          <Image
            src={frontEndImage}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="md:text-2xl italic">Front End Development</h2>
        </div>

        <div className="text-center">
          <Image
            src={backEndImage}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="md:text-2xl italic">Back End Development</h2>
        </div>

        <div className="text-center">
          <Image
            src={webDesign}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="md:text-2xl italic">Web Design</h2>
        </div>

        <div className="text-center">
          <Image
            src={webDevelopment}
            height={120}
            width={120}
            alt="Services Image"
          />
          <h2 className="md:text-2xl italic">Web Development</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
