import Image from "next/image";

const ServicesItem = (props) => {
  return (
    <div className="justify-self-center text-center">
      <div className="flex justify-center">
        <Image
          src={props.servicesImage}
          height={120}
          width={120}
          alt="Services Image"
        />
      </div>

      <h2 className="italic mt-3 md:text-xl lg:text-2xl">{props.servicesTitle}</h2>
    </div>
  );
};

export default ServicesItem;
