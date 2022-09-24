import Image from "next/image";
import facebookIcon from "/public/icons/facebook-icon.svg";
import instagramIcon from "/public/icons/instagram-icon.svg";
import twitterIcon from "/public/icons/twitter-icon.svg";
import linkedinIcon from "/public/icons/linkedin-icon.svg";
import emailIcon from "/public/icons/mail-icon.svg";
import phoneIcon from "/public/icons/phone-icon.svg";

const Contact = () => {
  return (
    <div className="py-8 px-6 md:py-12 md:px-12 lg:py-16 lg:px-28">
      <h1 className="text-blue-600 text-4xl text-center font-semibold md:text-5xl md:text-left lg:text-7xl">
        Lets Talk
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="my-5">
          <h2 className="text-blue-800 text-2xl text-center font-semibold md:text-4xl">
            Socials
          </h2>
          <div className="flex wrap justify-center mt-5 lg:gap-8">
            <a href="https://www.facebook.com/joshjoshuap1">
              <Image
                src={facebookIcon}
                height={80}
                width={80}
                alt="Social Media Icon"
              />
            </a>
            <a href="https://www.instagram.com/joshjoshuap1/">
              <Image
                src={instagramIcon}
                height={80}
                width={80}
                alt="Social Media Icon"
              />
            </a>
            <a href="https://twitter.com/joshjoshuap1">
              <Image
                src={twitterIcon}
                height={80}
                width={80}
                alt="Social Media Icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/joshuapautanes/">
              <Image
                src={linkedinIcon}
                height={80}
                width={80}
                alt="Social Media Icon"
              />
            </a>
          </div>
        </div>
        <div className="my-3">
          <h2 className="text-blue-800 text-2xl text-center font-semibold md:text-4xl">
            Contact
          </h2>
          <div className="flex-none md:flex md:gap-10">
            <div className="flex gap-2 items-center my-2">
              <Image
                src={emailIcon}
                height={60}
                width={60}
                alt="Contact Icon"
              />
              <a className="border-b-4 text-lg md:text-xl hover:border-b-4 hover:border-blue-700 transition-all duration-300 ease-in-out">
                pautanes.joshua@gmail.com
              </a>
            </div>

            <div className="flex gap-2 items-center my-2">
              <Image
                src={phoneIcon}
                height={60}
                width={60}
                alt="Contact Icon"
              />
              <a className="border-b-4 text-lg md:text-xl hover:border-b-4 hover:border-blue-700 transition-all duration-300 ease-in-out">
                (63+) 9060268332
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
