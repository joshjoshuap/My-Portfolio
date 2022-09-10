import Image from "next/image";
import frontEndImage from "/public/Images/frontend.png";
import backEndImage from "/public/Images/backend.png";
import webDesign from "/public/Images/web-design.png";
import webDevelopment from "/public/Images/web-development.png";

const Services = () => {
  return (
    <div className="w-11/12 py-10 mx-auto ">
      <h1 className="text-neutral-800 text-4xl pl-10"> What I Do</h1>
      <div className="flex justify-between text-neutral-900 pl-16 w-11/12 mt-3 mx-auto">
        <div className="text-center">
          <Image
            src={frontEndImage}
            height={100}
            width={100}
            alt="Services Image"
          />
          <h2 className="text-xl italic">Front End Development</h2>
        </div>

        <div className="text-center">
          <Image
            src={backEndImage}
            height={100}
            width={100}
            alt="Services Image"
          />
          <h2 className="text-xl italic">Back End Development</h2>
        </div>

        <div className="text-center">
          <Image src={webDesign} height={100} width={100} alt="Services Image" />
          <h2 className="text-xl italic">Web Design</h2>
        </div>

        <div className="text-center">
          <Image
            src={webDevelopment}
            height={100}
            width={100}
            alt="Services Image"
          />
          <h2 className="text-xl italic">Web Development</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
