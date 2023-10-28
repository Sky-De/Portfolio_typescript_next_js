import { useAppSelectore } from "@/hooks/reduxHooks";
import BrainOfSkills from "../skillsHero/BrainOfSkills";

const Skills = () => {
  const { currentSkill } = useAppSelectore((state) => state.skill);
  console.log(currentSkill);

  return (
    <section className="skills flex flex-col-reverse lg:flex-row-reverse items-center w-full h-full px-4">
      <BrainOfSkills />
      <div className="skillShow border w-full h-[250px]">{currentSkill}</div>
    </section>
  );
};

export default Skills;
