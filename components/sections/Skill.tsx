import BrainOfSkills from "../skillsHero/BrainOfSkills";
import { skillsDetails } from "@/constants/skillsDetail";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Introduction from "./Intro";

type SkillType = {
  id: string;
  alt: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};

const Skill = () => {
  const { currentSkill } = useAppSelector((state) => state.skill);
  const [skill, setSkill] = useState<SkillType>({
    id: "",
    alt: "",
    title: "",
    icon: "",
    description: "",
    features: [],
  });

  useEffect(() => {
    const filteredSkills = skillsDetails.filter(
      (skill) => skill.id === currentSkill
    );
    if (filteredSkills.length > 0) {
      setSkill(filteredSkills[0]); // Take the first item from the filtered array
    } else {
      // Handle the case when no skill matches the currentSkill
      // For instance, set a default state or handle an empty result
      setSkill({
        id: "",
        alt: "",
        title: "",
        icon: "",
        description: "",
        features: [],
      });
    }
  }, [currentSkill]);

  return (
    // <motion.section
    //   variants={{
    //     hide: { opacity: 0 },
    //     show: { opacity: 1 },
    //   }}
    //   initial="hide"
    //   whileInView="show"
    //   viewport={{ amount: 0.8 }}
    //   transition={{ duration: 0.5, delay: 0.25 }}
    //   id="1"
    //   className="section snap-start snap-always w-full"
    // >
    //   skill
    // </motion.section>
    <Introduction />
  );
};

export default Skill;
