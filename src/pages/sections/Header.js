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
      <header className="bg-black py-10 md:py-12 md:px-12 lg:py-16 lg:px-18 xl:px-28">
        <div className="grid justify-items-center">
          <h1 className=" text-neutral-50 text-center text-4xl md:text-6xl md:text-left lg:text-9xl">
            <span className="mr-3 text-blue-600 font-bold">JOSHUA</span>
            <span className=" ">PAUTANES</span>
          </h1>
          <div className="text-center text-neutral-50 px-8 md:lg mt-5 md:w-3/5 md:px-1 md:mt-5 lg:text-xl lg:w-4/6 lg:mt-8 font-mono">
            <p>A passionate and aspiring web/software developer</p>
            <p>
              Interested in programming, web development, and mobile application
            </p>
          </div>
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
        </div>
      </header>
    </>
  );
};

export default Header;
