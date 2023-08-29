import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@nextui-org/card';

export default function SkillsCard({ icons, SkillTitle, className }) {
  return (
    <div className="mt-12">
      <h1 className={`text-4xl font-mono font-semibold ${className}`}>{SkillTitle}</h1>
      <div className="mt-5 ">
        <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center">
          {icons.map((item, index) => (
            <Card shadow="sm" key={index} isPressable className="bg-skywhite rounded-lg">
              <CardBody className="overflow-visible pt-2 pb-0 px-8">
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
    </div>
  );
}
