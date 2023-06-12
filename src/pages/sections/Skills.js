import {
  htmlIcon,
  cssIcon,
  sassIcon,
  bootstrapIcon,
  tailwindIcon,
  reactjsIcon,
  nextjsIcon,
  javascriptIcon,
  typescriptIcon,
  nodejsIcon,
  mongodbIcon,
  visualstudioIcon,
  vscodeIcon,
  gitIcon,
  githubIcon,
  bashTerminalIcon,
  figmaIcon,
  ubuntuIcon,
  canvaIcon,
} from "/src/js/image-assets";
import Section from "../../components/Sections";
import SkillItem from "../../components/SkillsItem";

const Skills = () => {
  return (
    <Section sectionTitle="Technologies">
      <div className="grid gap-5 grid-cols md:grid-cols-2 md:gap-8 lg:gap-10">
        <SkillItem
          skillTitle="Front End"
          skillImages={[
            { image: htmlIcon },
            { image: cssIcon },
            { image: sassIcon },
            { image: bootstrapIcon },
            { image: tailwindIcon },
            { image: reactjsIcon },
          ]}
        />

        <SkillItem
          skillTitle="Back End"
          skillImages={[
            { image: javascriptIcon },
            { image: typescriptIcon },
            { image: nextjsIcon },
            { image: nodejsIcon },
            { image: mongodbIcon },
          ]}
        />

        <SkillItem
          skillTitle="Development"
          skillImages={[
            { image: visualstudioIcon },
            { image: vscodeIcon },
            { image: gitIcon },
            { image: githubIcon },
            { image: bashTerminalIcon },
            { image: ubuntuIcon },
          ]}
        />

        <SkillItem
          skillTitle="Graphic Design"
          skillImages={[{ image: figmaIcon }, { image: canvaIcon }]}
        />
      </div>
    </Section>
  );
};

export default Skills;
