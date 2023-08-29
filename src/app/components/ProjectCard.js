import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';
import { arrowIcon, githubIcon } from '../assets/icons';

export default function ProjectCard({ title, desc, image, github, website, technologies }) {
  return (
    <div>
      <Card className="py-4 rounded-md bg-blue">
        <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
          <Image
            alt="Card background"
            className="object-cover w-full mx-auto rounded-sm"
            src={image}
          />
        </CardHeader>
        <CardBody className="py-2 overflow-visible">
          <h1 className="mt-2 text-4xl text-center text-white">{title}</h1>
          <p className="mt-2 text-center text-white text-md">{desc}</p>
          <div className="flex justify-center my-3 gap-2">
            <Image
              alt="Card background"
              className="object-cover"
              src={technologies[0]}
              height={60}
              width={60}
            />
            <Image
              alt="Card background"
              className="object-cover"
              src={technologies[1]}
              height={60}
              width={60}
            />
            <Image
              alt="Card background"
              className="object-cover"
              src={technologies[2]}
              height={60}
              width={60}
            />
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <Link href={github} target="_blank">
              <div className="bg-white flex justify-center items-center gap-2 py-2 w-fit px-3 border-2 border-transparent rounded-lg hover:bg-gray transition-all duration-200">
                <Image src={githubIcon} height={40} width={40} />
                <p className="text-xl font-medium">GITHUB</p>
              </div>
            </Link>
            <Link href={website} target="_blank">
              <div className="bg-white flex justify-center items-center gap-2 py-2 w-fit px-3 border-2 border-transparent rounded-lg hover:bg-gray transition-all duration-150">
                <Image src={arrowIcon} height={40} width={40} />
                <p className="text-xl font-medium">VISIT</p>
              </div>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
