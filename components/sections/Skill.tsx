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
    <Introduction />
  );
};

export default Skill;
