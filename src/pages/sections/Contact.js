import Image from "next/image";
import facebookIcon from "/public/icons/facebook-icon.svg";
import instagramIcon from "/public/icons/instagram-icon.svg";
import twitterIcon from "/public/icons/twitter-icon.svg";
import linkedinIcon from "/public/icons/linkedin-icon.svg";
import emailIcon from "/public/icons/mail-icon.svg";
import phoneIcon from "/public/icons/phone-icon.svg";

const Contact = () => {
  return (
    <div className="py-16 px-28">
      <h1 className="text-blue-600 text-7xl font-semibold"> Contact</h1>
      <div className="grid grid-cols px-6 md:grid-cols-2">
        <div className="mt-5">
          <h2 className="text-blue-800 text-4xl text-center font-semibold">
            Socials
          </h2>
          <div className="flex flex-wrap justify-center gap-10 mt-5">
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
        <div className="w-fit my-3 mx-auto">
          <h2 className="text-blue-800 text-4xl text-center font-semibold">
            Contact
          </h2>
          <div className="flex gap-2 items-center my-2">
            <Image src={emailIcon} height={80} width={80} alt="Contact Icon" />
            <p className="border-b-4 text-xl hover:border-b-4 hover:border-blue-700 transition-all duration-300 ease-in-out">
              josjoshuap1@gmail.com
            </p>
          </div>

          <div className="flex gap-2 items-center my-2">
            <Image src={phoneIcon} height={80} width={80} alt="Contact Icon" />
            <p className="border-b-4 text-xl hover:border-b-4 hover:border-blue-700 transition-all duration-300 ease-in-out">
              (63+) 9060268332
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
