import Link from 'next/link';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import headerImage from '/public/image/header-image.png';
import facebookIcon from '/public/icons/facebook-icon.svg';
import instagramIcon from '/public/icons/instagram-icon.svg';
import linkedinIcon from '/public/icons/linkedin-icon.svg';
import githubIcon from '/public/icons/github-icon.svg';

let socialMediaIcon = [
  { alt: 'Facebook Icon', icon: facebookIcon, link: 'https://www.facebook.com/joshjoshuap1' },
  { alt: 'Instagram Icon', icon: instagramIcon, link: 'https://www.instagram.com/joshjoshuap1/' },
  { alt: 'Linkedin Icon', icon: linkedinIcon, link: 'https://www.linkedin.com/in/joshuapautanes/' },
  { alt: 'Github Icon', icon: githubIcon, link: 'https://github.com/joshjoshuap' },
];

export default function Header() {
  return (
    <header className="pt-8 pb-6 font-mono bg-black xl:pb-10 lg:pt-10 xl:pt-16">
      <div className="w-11/12 mx-auto text-white md:grid md:grid-cols-2 xl:w-10/12 ">
        <div className="text-center md:text-left">
          <h3 className="pb-2 text-xl text-center md:text-left lg:text-2xl xl:text-4xl text-lightgreen">
            Hello There!
          </h3>
          <div className="py-3 ">
            <span className="pr-2 text-2xl lg:text-2xl xl:text-4xl">I'M</span>
            <span className="text-6xl xl:text-8xl 2xl:9xl text-lightblue">Joshua,</span>
          </div>
          <h3 className="text-xl md:w-10/12 xl:w-10/12 lg:text-xl xl:text-3xl">
            Aspiring Web/Mobile Developer and Graphic Designer
          </h3>

          <div className="flex justify-center gap-2 mt-4 md:justify-start lg:mt-6 xl:mt-10">
            {socialMediaIcon.map((item) => (
              <Link href={item.link} target="_blank">
                <Image src={item.icon} alt={item.alt} className="w-14 lg:w-16 2xl:w-20" />
              </Link>
            ))}
          </div>
          <Link href="#about">
            <Button className="px-8 py-6 mt-6 text-2xl text-white rounded-md xl:mt-10 bg-lightblue">
              Let's Start
            </Button>
          </Link>
        </div>
        <div className="self-center hidden md:block">
          <Image src={headerImage} className="w-screen" />
        </div>
      </div>
    </header>
  );
}
