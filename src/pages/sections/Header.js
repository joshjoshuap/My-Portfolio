import Image from "next/image";
import headingImage from "/public/images/header-image.png";

const Header = () => {
  return (
    <header className="bg-neutral-900 py-16 px-28">
      <div className="grid grid-cols-2 text-white">
        <div>
          <h1 className="text-neutral-50 text-8xl">Joshua</h1>
          <h2 className="text-blue-600 text-8xl">Pautanes</h2>
          <p className="text-neutral-50 text-xl w-3/5 pl-1 mt-8">
            A self-taught and passionate person, Interested in programming and
            coding. Have skills and knowledge in web development and web design.
          </p>
          <div className="mt-20">
            <a
              href="#main"
              className="text-neutral-50 text-lg font-semibold border-2 border-neutral-50 rounded w-fit py-3 px-5 hover:text-blue-700 hover:bg-neutral-50 transition-all duration-300 ease-in-out"
            >
              Know more
            </a>
          </div>
        </div>
        <div>
          <Image src={headingImage} alt="My Collage Picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;
