import { skillTools, softSkills, technicalSkills } from "@/constant";
import Image from "next/image";

const Skill: React.FC = () => {
  return (
    <section id="skills" className="py-10">
      <div className="contain flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-2xl md:text-[56px] font-semibold text-center">
          Skills
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full bg-white p-4 rounded-3xl flex flex-col items-start justify-start gap-4">
            <h3 className="text-xl md:text-[40px] font-semibold text-primary">
              Technical
              <span className="block text-primary-2"> Skills</span>
            </h3>
            <ul className="flex flex-col gap-4 items-start justify-start pl-4 md:pl-6 list-disc">
              {technicalSkills.map((skill) => (
                <li
                  key={skill.id}
                  className="text-base md:text-[22px] font-semibold text-dark"
                >
                  <div className="flex flex-col items-start justify-start gap-2">
                    <h6>{skill.title}</h6>
                    <p className="text-sm md:text-base font-normal text-dark text-justify">
                      {skill.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full grid grid-cols-1 gap-6 h-fit">
            <div className="w-full bg-white p-4 rounded-3xl flex flex-col items-start justify-start gap-4 h-fit">
              <h3 className="text-xl md:text-[40px] font-semibold text-primary">
                Soft
                <span className="block text-primary-2"> Skills</span>
              </h3>
              <ul className="flex flex-col gap-4 items-start justify-start pl-4 md:pl-6 list-disc">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm md:text-xl font-normal text-dark"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full bg-primary-2 rounded-3xl flex flex-col items-start justify-start gap-4 h-fit overflow-hidden">
              <h3 className="text-xl md:text-[40px] font-semibold pt-4 px-4 md:px-8 w-full text-start">
                Tools I excel in
              </h3>
              <div className="grid grid-cols-4 gap-6 items-center justify-center px-4 md:px-8 pb-5 md:py-5 w-full">
                {skillTools.map((tool) => (
                  <div key={tool.id} className="w-full ">
                    <Image
                      src={tool.imageSrc}
                      alt="skill tool"
                      width={80}
                      height={80}
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
