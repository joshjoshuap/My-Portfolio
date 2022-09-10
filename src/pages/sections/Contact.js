import Image from "next/image";
import facebookIcon from "/public/icons/facebook-icon.svg";
import instagramIcon from "/public/icons/instagram-icon.svg";
import twitterIcon from "/public/icons/twitter-icon.svg";
import linkedinIcon from "/public/icons/linkedin-icon.svg";
import emailIcon from "/public/icons/email-icon.png";
import phoneIcon from "/public/icons/phone-icon.png";

const Contact = () => {
  return (
    <div className="w-11/12 py-10 mx-auto">
      <h1 className="text-neutral-800 text-4xl pl-10"> Contact</h1>
      <div className="flex justify-center gap-20">
        <div className="w-fit">
          <h2 className="text-xl text-center">Socials</h2>
          <div className="flex gap-5 mt-5">
            <Image src={facebookIcon} width={0} alt="Social Media Icon" />
            <Image src={instagramIcon} width={0} alt="Social Media Icon" />
            <Image src={twitterIcon} width={0} alt="Social Media Icon" />
            <Image src={linkedinIcon} width={0} alt="Social Media Icon" />
          </div>
        </div>
        <div className="w-fit">
          <h2 className="text-xl">Contact</h2>
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
