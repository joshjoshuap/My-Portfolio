import Image from "next/image";
import frontEndImage from "/public/images/frontend.png";
import backEndImage from "/public/images/backend.png";
import webDesign from "/public/images/web-design.png";
import webDevelopment from "/public/images/web-development.png";

const Services = () => {
  return (
    <div className="py-10 mx-auto md:w-11/12">
      <h1 className="text-neutral-800 text-4xl text-center md:text-left md:px-10"> What I Do</h1>
      <div className="grid grid-cols-2 gap-10 text-neutral-900 mt-5 mx-auto md:px-16 w-11/12 md:grid-cols-4 md:mt-3">
        <div className="text-center">
          <Image
            src={frontEndImage}
            height={100}
            width={100}
            alt="Services Image"
          />
          <h2 className="md:text-xl italic">Front End Development</h2>
        </div>

        <div className="text-center">
          <Image
            src={backEndImage}
            height={100}
            width={100}
            alt="Services Image"
          />
          <h2 className="md:text-xl italic">Back End Development</h2>
        </div>

        <div className="text-center">
          <Image src={webDesign} height={100} width={100} alt="Services Image" />
          <h2 className="md:text-xl italic">Web Design</h2>
        </div>

        <div className="text-center">
          <Image
            src={webDevelopment}
            height={100}
            width={100}
            alt="Services Image"
          />
          <h2 className="md:text-xl italic">Web Development</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
