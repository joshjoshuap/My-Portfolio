import Image from "next/image";
import {
  headingImage,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  linkedinIcon,
} from "/src/js/image-assets";

const SocialInfo = (props) => {
  return (
    <a href={props.socialLink}>
      <Image
        src={props.socialIcon}
        height={60}
        width={60}
        alt="Social Media Icon"
      />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <header className="py-10 bg-gray-950 md:py-12 md:px-12 lg:py-16 lg:px-18 xl:px-28">
        <div className="grid grid-cols-1 text-white md:grid-cols-2 ">
          <div className="self-center">
            <h1 className="block text-4xl text-center text-neutral-50 md:tracking-wide md:text-6xl md:text-left lg:text-9xl xl:text-8xl">
              <span className="inline-block mr-3 md:block">Joshua</span>
              <span className="inline-block font-serif text-blue-600 md:block">
                Pautanes
              </span>
            </h1>
            <p className="px-8 mt-5 text-neutral-50 md:lg md:w-3/5 md:px-1 md:mt-5 lg:text-xl lg:w-3/5 lg:mt-8">
              A passionate and aspiring web/software developer, Interested in
              programming and coding. Have skills and knowledge in web
              development and web design. Love Technologies and computers
            </p>
            <div className="flex justify-center mt-10 wrap md:justify-start">
              <SocialInfo
                socialLink="https://www.facebook.com/joshjoshuap1"
                socialIcon={facebookIcon}
              />

              <SocialInfo
                socialLink="https://www.instagram.com/joshjoshuap1"
                socialIcon={instagramIcon}
              />

              <SocialInfo
                socialLink="https://twitter.com/joshjoshuap1"
                socialIcon={twitterIcon}
              />

              <SocialInfo
                socialLink="https://www.linkedin.com/in/joshuapautanes"
                socialIcon={linkedinIcon}
              />
            </div>
            <div className="mt-10 text-center md:text-left">
              <a
                href="#main"
                className="px-5 py-3 text-lg font-semibold transition-all duration-300 ease-in-out border-2 rounded text-neutral-50 border-neutral-50 w-fit hover:text-blue-700 hover:bg-neutral-50"
              >
                About Me
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:justify-center">
            <Image
              src={headingImage}
              className="rounded-lg"
              width={450}
              alt="My Collage Picture"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
