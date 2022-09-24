import Image from "next/image";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  linkedinIcon,
  emailIcon,
  phoneIcon,
} from "/src/js/image-assets";
import Section from "../../components/Sections";

const ContactInfo = (props) => {
  return (
    <div className="flex gap-2 items-center my-2">
      <Image
        src={props.contactIcon}
        height={60}
        width={60}
        alt="Contact Icon"
      />
      <a className="border-b-4 text-lg md:text-xl hover:border-b-4 hover:border-blue-700 transition-all duration-300 ease-in-out">
        {props.contactDetails}
      </a>
    </div>
  );
};

const SocialInfo = (props) => {
  return (
    <a href={props.socialLink}>
      <Image
        src={props.socialIcon}
        height={80}
        width={80}
        alt="Social Media Icon"
      />
    </a>
  );
};

const Contact = () => {
  return (
    <Section sectionTitle="Lets Talk">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="my-5">
          <h2 className="text-blue-800 text-2xl text-center font-semibold md:text-4xl">
            Socials
          </h2>
          <div className="flex wrap justify-center mt-5 lg:gap-8">
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
        <div className="my-5">
          <h2 className="text-blue-800 text-2xl text-center font-semibold md:text-4xl">
            Contact
          </h2>
          <div className="flex-none md:flex md:gap-10 mt-5">
            <ContactInfo
              contactDetails="pautanes.joshua@gmail.com"
              contactIcon={emailIcon}
            />

            <ContactInfo
              contactDetails=" (63+) 9060268332"
              contactIcon={phoneIcon}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
