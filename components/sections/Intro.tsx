import BrainOfSkills from "../skillsHero/BrainOfSkills";
import { skillsDetails } from "@/constants/skillsDetail";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import JobOfferBtn from "../buttons/JobOfferBtn";

type SkillType = {
  id: string;
  alt: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};

const Introduction = () => {
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
    <motion.section
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      id="1"
      className="section snap-start snap-always w-full"
    >
      <div className="skills flex flex-col-reverse lg:flex-row-reverse items-center px-4 justify-evenly w-full">
        <BrainOfSkills />
        <div className="skillShow w-full h-[250px]">
          <h3 className="text-4xl font-bold">{skill.title}</h3>
          {currentSkill === "SKY" ? (
            <div className="h-full">
              <h2 className="font-bold text-3xl">
                SkyDe | Briliant, Self-Taught <p>Web Developer</p>
              </h2>
              <p className="hidden sm:block w-1/2 text-lg text-gray-500 mt-3">
                Supercharge your business growth with my innovative web
                development solutions
              </p>
              <button className="mt-6 text-white bg-black dark:text-black dark:bg-white px-4 py-3 w-1/2 rounded-2xl">
                JOB OFFER
              </button>
              {/* <JobOfferBtn /> */}
            </div>
          ) : (
            // intro structure goes here
            <ul className=" flex flex-col flex-wrap list-disc px-6 h-full overflow-scroll gap-6 md:gap-2 md:py-4">
              {skill.features.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Introduction;
