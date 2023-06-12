import Image from "next/image";

const SkillImage = (props) => {
  return (
    <Image
      src={props.image}
      height={80}
      width={80}
      alt="Icon"
    />
  );
};

const SkillItem = (props) => {
  return (
    <div className="border-4 border-blue-600 bg-neutral-100">
      <h1 className="p-3 text-xl text-center bg-blue-600 text-neutral-100 md:text-2xl lg:text-4xl">
        {props.skillTitle}
      </h1>
      <div className="flex flex-wrap justify-center p-3 mt-3">
        {props.skillImages.map(SkillImage)}
      </div>
    </div>
  );
};

export default SkillItem;
