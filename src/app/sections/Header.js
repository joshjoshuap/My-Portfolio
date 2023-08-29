import Link from 'next/link';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import headerImage from '/public/image/header-image.png';
import facebookIcon from '/public/icons/facebook-icon.svg';
import instagramIcon from '/public/icons/instagram-icon.svg';
import linkedinIcon from '/public/icons/linkedin-icon.svg';
import githubIcon from '/public/icons/github-icon.svg';

export default function Header() {
  return (
    <header className="pt-16 pb-10 font-mono font-normal bg-blue">
      <div className="flex w-10/12 mx-auto text-white">
        <div>
          <h3 className="pb-2 text-4xl text-lightorange">Hello There!</h3>
          <div className="py-3">
            <span className="px-2 text-6xl">I'M</span>
            <span className="px-2 text-9xl text-lightgreen">Joshua,</span>
          </div>
          <h3 className="w-10/12 text-4xl">Aspiring Web/Mobile Developer and Graphic Designer</h3>

          <div className="flex gap-2 mt-10">
            <Link href="https://www.facebook.com/joshjoshuap1" target="_blank">
              <Image src={facebookIcon} height={70} width={70} />
            </Link>
            <Link href="https://www.instagram.com/joshjoshuap1/" target="_blank">
              <Image src={instagramIcon} height={70} width={70} />
            </Link>
            <Link href="https://www.linkedin.com/in/joshuapautanes/" target="_blank">
              <Image src={linkedinIcon} height={70} width={70} />
            </Link>
            <Link href="https://github.com/joshjoshuap" target="_blank">
              <Image src={githubIcon} height={70} width={70} />
            </Link>
          </div>
          <Link href="#about">
            <Button className="px-8 py-6 mt-10 text-2xl text-white rounded-md bg-lightgreen">
              Let's Start
            </Button>
          </Link>
        </div>
        <div className="justify-self-end">
          <Image src={headerImage} height={800} width={800} />
        </div>
      </div>
    </header>
  );
}
