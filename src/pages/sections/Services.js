import {
  frontEndImage,
  backEndImage,
  webDesign,
  webDevelopment,
} from "/src/js/image-assets";
import Section from "../../components/Sections";
import ServicesItem from "../../components/ServicesItem";

const Services = () => {
  return (
    <Section sectionTitle="Skills" className="bg-neutral-900 00">
      <div className=" grid grid-cols gap-8 justify-center text-neutral-100 mt-5 mx-auto md:grid-cols-2 md:gap-10 md:px-16 md:mt-10 lg:grid-cols-4">
        <ServicesItem
          servicesTitle="Front End Development"
          servicesImage={frontEndImage}
        />

        <ServicesItem
          servicesTitle="Backend End Development"
          servicesImage={backEndImage}
        />

        <ServicesItem servicesTitle="Web Design" servicesImage={webDesign} />

        <ServicesItem
          servicesTitle="Web Development"
          servicesImage={webDevelopment}
        />
      </div>
    </Section>
  );
};

export default Services;
