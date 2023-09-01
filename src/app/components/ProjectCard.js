import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';
import { arrowIcon, githubIcon } from '../assets/icons';

let LinkButton = ({ icon, link, buttonTitle }) => {
  return (
    <Link href={link} target="_blank">
      <div className="flex items-center justify-center w-auto gap-2 px-3 py-2 transition-all duration-200 bg-white border-2 border-transparent rounded-lg hover:bg-gray">
        <Image src={icon} height={40} width={40} />
        <p className="text-xl font-medium">{buttonTitle}</p>
      </div>
    </Link>
  );
};

export default function ProjectCard({ title, desc, image, github, website, technologies }) {
  return (
    <Card className="py-4 rounded-md bg-blue">
      <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
        <Image
          alt="Card background"
          className="object-cover w-full mx-auto rounded-sm"
          src={image}
        />
      </CardHeader>
      <CardBody className="py-2 overflow-visible">
        <h1 className="mt-2 text-2xl text-center text-white 2xl:text-4xl">{title}</h1>
        <p className="mt-2 text-center text-white text-md">{desc}</p>
        <div className="flex justify-center gap-2 my-3">
          {technologies.map((item) => (
            <Image alt={item.title} className="object-cover w-20 md::w-10" src={item.icon} />
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-3 md:flex-row md:justify-center">
          <LinkButton link={github} icon={githubIcon} buttonTitle="GITHUB" />
          <LinkButton link={website} icon={arrowIcon} buttonTitle="VISIT" />
        </div>
      </CardBody>
    </Card>
  );
}
