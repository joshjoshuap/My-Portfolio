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

export default function Contact() {
  return (
    <div className="bg-blue" id="contact">
      <div className="w-10/12 py-10 mx-auto" id="skills">
        <h1 className="text-white text-6xl font-serif font-bold text-center">Contact</h1>

        <div className="flex gap-10 justify-center mt-10">
          <div className="flex items-center gap-2 bg-skywhite p-3 rounded-lg w-fit">
            <Image src={phoneIcon} />
            <h2 className="text-2xl">(63+)9060268332</h2>
          </div>

          <div className="flex items-center gap-2 bg-skywhite p-3 rounded-lg w-fit">
            <Image src={mailIcon} />
            <h2 className="text-2xl">pautanes.joshua@gmail.com</h2>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <Link href="https://www.facebook.com/joshjoshuap1" target="_blank">
            <Image src={facebookIcon} height={80} width={80} />
          </Link>
          <Link href="https://www.instagram.com/joshjoshuap1/" target="_blank">
            <Image src={instagramIcon} height={80} width={80} />
          </Link>
          <Link href="https://www.linkedin.com/in/joshuapautanes/" target="_blank">
            <Image src={linkedinIcon} height={80} width={80} />
          </Link>
          <Link href="https://github.com/joshjoshuap" target="_blank">
            <Image src={githubIcon} height={80} width={80} />
          </Link>
        </div>
      </div>
    </div>
  );
}
