import Image from "next/image";
import {
  headingImage,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  linkedinIcon,
  emailIcon,
  phoneIcon,
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
      <header className="bg-neutral-900 py-10 md:py-12 md:px-12 lg:py-16 lg:px-18 xl:px-28">
        <div className="grid grid-cols-1 text-white md:grid-cols-2 ">
          <div className="self-center">
            <h1 className="text-neutral-50 md:tracking-wide block text-center text-4xl md:text-6xl md:text-left lg:text-7xl xl:text-8xl">
              <span className="inline-block mr-3 md:block">Joshua</span>
              <span className="text-blue-600 inline-block md:block">
                Pautanes
              </span>
            </h1>
            <p className="text-neutral-50 px-8 md:lg mt-5 md:w-3/5 md:px-1 md:mt-5 lg:text-xl lg:w-3/5 lg:mt-8">
              A self-taught and passionate person, Interested in programming and
              coding. Have skills and knowledge in web development and web
              design.
            </p>
            <div className="flex wrap justify-center mt-10 md:justify-start">
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
            <div className="text-center mt-10 md:text-left">
              <a
                href="#main"
                className="text-neutral-50 text-lg font-semibold border-2 border-neutral-50 rounded w-fit py-3 px-5 hover:text-blue-700 hover:bg-neutral-50 transition-all duration-300 ease-in-out"
              >
                Know more
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
