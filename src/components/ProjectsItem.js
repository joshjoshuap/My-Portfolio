import Image from "next/image";

const SkillImage = (props) => {
  return <Image src={props.image} height={60} width={60} alt="Icon" />;
};

const ProjectItem = (props) => {
  return (
    <div className="bg-neutral-200 border-blue-800 border-4 rounded my-5">
      <Image src={props.projectImage} alt="Web Dev Screenshot" />
      <div className="p-5">
        <h1 className="text-blue-700 text-center text-3xl font-semibold mb-5">
          {props.projectTitle}
        </h1>
        <p className="text-lg text-neutral-900 mb-5">
          {props.projectDescription}
        </p>
        <div className="border-neutral-800 border-2">
          <h3 className="bg-blue-800 text-center text-xl text-neutral-100 p-1">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {props.projectTechnologies.map(SkillImage)}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 mt-5 md:gap-5 md:flex-col xl:flex-row">
          <a
            href={props.projectWebLink}
            className="bg-blue-600 text-neutral-100 text-lg text-center border-2 rounded w-full h-fit py-3 px-5 mx-auto md:mx-0 hover:bg-blue-800 hover:text-neutral-100 transition ease-in"
            target="_blank"
            rel="noreferrer"
          >
            Visit Site
          </a>
          <a
            href={props.projectRepoLink}
            className="bg-neutral-700 text-neutral-100 text-lg text-center border-2 rounded w-full h-fit py-3 px-5 mx-auto md:mx-0 hover:bg-neutral-900 hover:text-neutral-100 transition ease-in"
            target="_blank"
            rel="noreferrer"
          >
            View Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
