import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@nextui-org/card';

export default function SkillsCard({ icons, SkillTitle, className }) {
  return (
    <div className="mt-12">
      <h1 className={`text-4xl font-mono font-semibold ${className}`}>{SkillTitle}</h1>
      <div className="grid justify-center grid-cols-2 gap-3 md:gap-5 md:grid-cols-3 lg:grid-cols-6 mt-5">
        {icons.map((item, index) => (
          <Card shadow="sm" key={index} isPressable className="rounded-lg bg-skywhite">
            <CardBody className="px-8 pt-2 pb-0 overflow-visible">
              <Image
                shadow="sm"
                className="mx-auto"
                height={100}
                width={100}
                alt={item.title}
                src={item.icon}
              />
            </CardBody>
            <CardFooter className="flex justify-center p=0">
              <h1 className="text-lg font-semibold ">{item.title}</h1>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
