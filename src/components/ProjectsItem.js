import Image from "next/image";

const SkillImage = (props) => {
  return <Image src={props.image} height={60} width={60} alt="Icon" />;
};

const ProjectItem = (props) => {
  return (
    <div className="border-blue-800 border-2 rounded my-5">
      <Image src={props.projectImage} alt="Web Dev Screenshot" />
      <div className="p-5">
        <h1 className="text-blue-700 text-center text-2xl font-semibold mb-5">
          {props.projectTitle}
        </h1>
        <p className="text-lg mb-5">{props.projectDescription}</p>
        <div className="border-blue-800 border-2">
          <h3 className="bg-blue-800 text-center text-xl text-neutral-100 p-1">
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center">
            {props.projectTechnologies.map(SkillImage)}
          </div>
        </div>
        <div className="flex justify-between gap-3 mt-5 md:flex-row md:gap-5">
          <a
            href={props.projectWebLink}
            className="border-blue-700 border-2 rounded text-blue-700 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:bg-blue-700 hover:text-neutral-100  transition ease-in"
            target="_blank"
            rel="noreferrer"
          >
            Visit Site
          </a>
          <a
            href={props.projectRepoLink}
            className="border-neutral-900 border-2 rounded text-neutral-600 text-lg w-fit h-fit py-3 px-5 mx-auto md:mx-0 hover:bg-neutral-900 hover:text-neutral-100 transition ease-in"
            target="_blank"
            rel="noreferrer"
          >
            View Github Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
