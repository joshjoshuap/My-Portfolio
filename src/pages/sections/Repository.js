import RepositoryCard from "../../components/RepositoryCard";
import Section from "../../components/Sections";

const Repository = () => {
  return (
    <Section sectionTitle="Github Repository">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <RepositoryCard
          title="Learn HTML & CSS"
          repoLink="https://github.com/joshjoshuap/Learn-HTML-CSS"
        />
        <RepositoryCard
          title=" Learn Javascript & Typescript"
          repoLink="https://github.com/joshjoshuap/Learn-Javascript-Typescript"
        />
        <RepositoryCard
          title=" Learn React"
          repoLink="https://github.com/joshjoshuap/Learn-React-Native"
        />

        <RepositoryCard
          title=" Learn Node JS"
          repoLink="https://github.com/joshjoshuap/Learn-NodeJS"
        />

        <RepositoryCard
          title=" Learn React Native"
          repoLink="https://github.com/joshjoshuap/Learn-React"
        />

        <RepositoryCard
          title=" Learn Angular"
          repoLink="https://github.com/joshjoshuap/Learn-Angular"
        />

        <RepositoryCard
          title=" Learn PHP & Laravel"
          repoLink="https://github.com/joshjoshuap/Learn-PHP"
        />
      </div>
      <div className="text-center mt-10">
        <a
          className="bg-neutral-100 text-neutral-900 border-neutral-900 border-2 rounded lg:text-lg xl:text-xl font-semibold w-fit h-fit px-3 py-5 xl:px-8 xl:py-5 mx-auto md:mx-0 hover:bg-neutral-900 hover:text-neutral-100 transition ease-in"
          href="https://github.com/joshjoshuap"
          target="_blank"
          rel="noreferrer"
        >
          Visit my Github Profile
        </a>
      </div>
    </Section>
  );
};

export default Repository;
