import Image from "next/image";
import { headingImage } from "/src/js/image-assets";

const Header = () => {
  return (
    <header className="bg-neutral-900 py-8 md:py-12 md:px-12 lg:py-16 lg:px-28">
      <div className="grid grid-cols-1 text-white md:grid-cols-2 ">
        <div className=" md:self-center lg:self-start">
          <h1 className="text-neutral-50 block text-center text-5xl md:text-6xl md:text-left lg:text-8xl">
            <span className="inline-block mr-3 md:block">Joshua</span>
            <span className="text-blue-600 inline-block md:block">Pautanes</span>
          </h1>
          <p className="text-neutral-50 px-8 md:lg mt-5 md:w-4/5 md:px-1 md:mt-5 lg:text-xl lg:w-3/5 lg:mt-8">
            A self-taught and passionate person, Interested in programming and
            coding. Have skills and knowledge in web development and web design.
          </p>
          <div className="text-center mt-10 md:mt-16 md:text-left lg:mt-20">
            <a
              href="#main"
              className="text-neutral-50 text-lg font-semibold border-2 border-neutral-50 rounded w-fit py-3 px-5 hover:text-blue-700 hover:bg-neutral-50 transition-all duration-300 ease-in-out"
            >
              Know more
            </a>
          </div>
        </div>
        <div className="text-center hidden md:block">
          <Image
            src={headingImage}
            className="rounded-lg"
            alt="My Collage Picture"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
