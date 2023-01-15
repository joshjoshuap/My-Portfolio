const RepositoryCard = (props) => {
  return (
    <a
      href={props.repoLink}
      className="bg-neutral-100 text-blue-600 rounded border-blue-800 border-4 p-2 md:p-3 lg:p-5 grid items-center hover:bg-blue-800 hover:text-neutral-100 transition ease-in"
      target="_blank"
      rel="noreferrer"
    >
      <h1 className="xl:text-xl text-center font-semibold">{props.title}</h1>
      {/* <p className="text-md mt-5">{props.description}</p> */}
    </a>
  );
};

export default RepositoryCard;
