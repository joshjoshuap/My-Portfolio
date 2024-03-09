import Image from 'next/image';
import Section from '../components/Section';
import SkillsList from '../assets/skills-list';

export default function Skills() {
  return (
    <Section
      id="skills"
      sectionTitle="Skills"
      titleColor="text-white"
      titleIsCenter="Yes"
      bgColor="bg-gradient-to-r from-slate-900 via-cyan-900 to-sky-900">
      <div className="grid grid-cols-1 gap-10 mt-20 lg:grid-cols-2">
        {SkillsList.map((item) => (
          <div className="p-5 bg-white border-4 border-white rounded-sm">
            <h1 className="text-3xl font-semibold text-center text-teal-800 lg:text-4xl">
              {item.title}
            </h1>
            <div className="grid grid-cols-3 gap-2 mt-5 md:grid-cols-5 md:gap-1">
              {item.skillIcons.map((item) => (
                <Image shadow="sm" className="" height={100} width={100} src={item.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
