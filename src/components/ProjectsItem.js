import Image from "next/image";

const SkillImage = (props) => {
  return (
    <Image
      src={props.image}
      height={60}
      width={60}
      alt="Icon"
    />
  );
};

const ProjectItem = (props) => {
  return (
    <div className="my-5 border-4 border-blue-800 rounded bg-neutral-100">
      <Image
        src={props.projectImage}
        alt="Web Dev Screenshot"
      />
      <div className="p-5">
        <h1 className="mb-5 text-3xl font-semibold text-center text-blue-700">
          {props.projectTitle}
        </h1>
        <p className="mb-5 text-lg text-neutral-900">
          {props.projectDescription}
        </p>
        <div className="border-2 border-blue-800">
          <h3 className="p-1 text-xl text-center bg-blue-800 text-neutral-100">
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {props.projectTechnologies.map(SkillImage)}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 mt-5 md:gap-5 md:flex-col xl:flex-row">
          <a
            href={props.projectWebLink}
            className="w-full px-5 py-3 mx-auto text-lg text-center transition ease-in bg-blue-600 border-2 rounded text-neutral-100 h-fit md:mx-0 hover:bg-blue-800 hover:text-neutral-100"
            target="_blank"
            rel="noreferrer"
          >
            Visit Site
          </a>
          <a
            href={props.projectRepoLink}
            className="w-full px-5 py-3 mx-auto text-lg text-center transition ease-in border-2 rounded bg-neutral-700 text-neutral-100 h-fit md:mx-0 hover:bg-neutral-900 hover:text-neutral-100"
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
