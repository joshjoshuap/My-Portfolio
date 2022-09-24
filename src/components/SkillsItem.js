import Image from "next/image";

const SkillImage = (props) => {
  return <Image src={props.image} height={80} width={80} alt="Icon" />;
};

const SkillItem = (props) => {
  return (
    <div className="border-blue-800 border-4 mt-5">
      <h1 className="bg-blue-800 text-neutral-100 text-center p-3 md:text-2xl lg:text-4xl">
        {props.skillTitle}
      </h1>
      <div className="flex flex-wrap justify-center p-3 mt-3">
        {props.skillImages.map(SkillImage)}
      </div>
    </div>
  );
};

export default SkillItem;
