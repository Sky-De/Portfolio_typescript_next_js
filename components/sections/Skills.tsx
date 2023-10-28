import { useAppSelectore } from "@/hooks/reduxHooks";
import BrainOfSkills from "../skillsHero/BrainOfSkills";

const Skills = () => {
  const { currentSkill } = useAppSelectore((state) => state.skill);
  console.log(currentSkill);

  return (
    <section className="skills flex flex-row-reverse justify-between items-center border w-full h-full px-4">
      <BrainOfSkills />
      <div className="skillShow">{currentSkill}</div>
    </section>
  );
};

export default Skills;
