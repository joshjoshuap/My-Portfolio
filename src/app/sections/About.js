import Section from '../components/Section';
import jobExperienceList from '../assets/job-list';
import myStory from '../assets/mystory';

let Paragraph = ({ description }) => {
  return (
    <p className="mb-2 text-justify text-md lg:text-lg indent-3 lg:indent-10">{description}</p>
  );
};

let JobContainer = ({ positionTitle, companyDesc, jobDesc }) => {
  return (
    <div className="my-5">
      <p className="text-2xl font-semibold text-teal-800">{positionTitle}</p>
      <p className="text-sm italic text-neutral-700">{companyDesc}</p>
      <div className="w-10/12 mx-auto mt-3">
        <ul className="text-sm list-disc">
          {jobDesc.map((item) => {
            return <li key={item.id}>{item.jobDescItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <Section id="about" titleColor="text-lightblue" bgColor="bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* MY STORY CARD */}
        <div className="mb-10 lg:w-1/2 lg:mb-0">
          <h1 className="mb-5 text-4xl font-medium text-center lg:mb-10 lg:text-6xl text-emerald-700">
            MY STORY
          </h1>
          {myStory.map((item) => (
            <Paragraph key={item.id} description={item.storyParagraph} />
          ))}
        </div>

        {/* JOB EXPERIENCE */}
        <div className="lg:w-1/2">
          <h1 className="mb-5 text-4xl text-center text-red-600 lg:mb-10 lg:text-6xl">
            JOB EXPERIENCE
          </h1>
          {jobExperienceList.map((item) => (
            <JobContainer
              key={item.id}
              positionTitle={item.positionTitle}
              companyDesc={item.companyDesc}
              jobDesc={item.jobDesc}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
