import Image from "next/image";

const ServicesItem = (props) => {
  return (
    <div className="text-center">
      <Image
        src={props.servicesImage}
        height={120}
        width={120}
        alt="Services Image"
      />
      <h2 className="italic md:text-xl lg:text-2xl">{props.servicesTitle}</h2>
    </div>
  );
};

export default ServicesItem;
