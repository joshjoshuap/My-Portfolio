import Image from 'next/image';
import Link from 'next/link';
import {
  facebookIcon,
  githubIcon,
  instagramIcon,
  linkedinIcon,
  mailIcon,
  phoneIcon,
} from '../assets/icons';
import Section from '../components/Section';

let socialMediaIcon = [
  { alt: 'Facebook Icon', icon: facebookIcon, link: 'https://www.facebook.com/joshjoshuap1' },
  { alt: 'Instagram Icon', icon: instagramIcon, link: 'https://www.instagram.com/joshjoshuap1/' },
  { alt: 'Linkedin Icon', icon: linkedinIcon, link: 'https://www.linkedin.com/in/joshuapautanes/' },
  { alt: 'Github Icon', icon: githubIcon, link: 'https://github.com/joshjoshuap' },
];

let ContactCard = ({ icon, desc }) => {
  return (
    <div className="flex items-center w-full gap-2 p-3 rounded-lg xl:w-fit bg-skywhite">
      <Image src={icon} />
      <h2 className="">{desc}</h2>
    </div>
  );
};

export default function Contact() {
  return (
    <Section
      id="contact"
      sectionTitle="Contact"
      titleColor="text-white"
      titleIsCenter="Yes"
      bgColor="bg-gradient-to-r from-slate-900 via-cyan-900 to-sky-900">
      <div className="flex flex-col items-center gap-10 mt-10 xl:justify-center xl:flex-row">
        <ContactCard icon={phoneIcon} desc="(63+)9060268332" />
        <ContactCard icon={mailIcon} desc="pautanes.joshua@gmail.com" />
      </div>
      <div className="flex justify-center gap-2 mt-10">
        {socialMediaIcon.map((item) => (
          <Link href={item.link} key={item.id} target="_blank">
            <Image src={item.icon} alt={item.alt} height={80} width={80} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
