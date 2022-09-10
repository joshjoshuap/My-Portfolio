import Image from "next/image";
import facebookIcon from "/public/icons/facebook-icon.svg";
import instagramIcon from "/public/icons/instagram-icon.svg";
import twitterIcon from "/public/icons/twitter-icon.svg";
import linkedinIcon from "/public/icons/linkedin-icon.svg";
import emailIcon from "/public/icons/email-icon.png";
import phoneIcon from "/public/icons/phone-icon.png";

const Contact = () => {
  return (
    <div className="py-10 mx-auto md:w-11/12">
      <h1 className="text-neutral-800 text-4xl text-center md:text-left md:pl-10"> Contact</h1>
      <div className="grid grid-cols px-6 md:grid-cols-2">
        <div className="w-fit my-3 mx-auto">
          <h2 className="text-xl text-center">Socials</h2>
          <div className="grid grid-cols gap-2 md:grid-cols-4 md:gap-5 md:mt-5">
            <Image src={facebookIcon} width={0} alt="Social Media Icon" />
            <Image src={instagramIcon} width={0} alt="Social Media Icon" />
            <Image src={twitterIcon} width={0} alt="Social Media Icon" />
            <Image src={linkedinIcon} width={0} alt="Social Media Icon" />
          </div>
        </div>
        <div className="w-fit my-3 mx-auto">
          <h2 className="text-xl text-center">Contact</h2>
          <div className="flex gap-2 items-center my-2">
            <Image src={emailIcon} height={40} width={40} alt="Contact Icon" />
            <h3>josjoshuap1@gmail.com</h3>
          </div>

          <div className="flex gap-2 items-center my-2">
            <Image src={phoneIcon} height={40} width={40} alt="Contact Icon" />
            <h3>(63+) 9060268332</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
