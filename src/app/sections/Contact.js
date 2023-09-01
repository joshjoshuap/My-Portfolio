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
      <div className="w-11/12 py-10 mx-auto xl:w-10/12">
        <h1 className="font-serif text-6xl font-bold text-center text-white">Contact</h1>

        <div className="flex flex-col items-center gap-10 mt-10 xl:justify-center xl:flex-row">
          <div className="flex items-center w-full xl:w-fit gap-2 p-3 rounded-lg bg-skywhite">
            <Image src={phoneIcon} />
            <h2 className="">(63+)9060268332</h2>
          </div>

          <div className="flex items-center w-full xl:w-fit gap-2 p-3 rounded-lg bg-skywhite ">
            <Image src={mailIcon} />
            <h2 className="">pautanes.joshua@gmail.com</h2>
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
