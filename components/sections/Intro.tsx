"use client";
import BrainOfSkills from "../skillsHero/BrainOfSkills";
import { skillsDetails } from "@/constants/skillsDetail";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { v4 as uuid } from "uuid";
import CallToActionBtn from "../buttons/CallToActionBtn";

type SkillType = {
  id: string;
  alt: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};
const InitialSkill: SkillType = {
  id: "",
  alt: "",
  title: "",
  icon: "",
  description: "",
  features: [],
};

const Introduction = () => {
  const { currentSkill } = useAppSelector((state) => state.skill);
  const introRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Skills", ref: introRef });

  const [skill, setSkill] = useState<SkillType>(InitialSkill);

  useEffect(() => {
    const filteredSkills = skillsDetails.filter(
      (skill) => skill.id === currentSkill
    );
    if (filteredSkills.length > 0) {
      setSkill(filteredSkills[0]); // Take the first item from the filtered array
    } else {
      // Handle the case when no skill matches the currentSkill
      // For instance, set a default state or handle an empty result
      setSkill(InitialSkill);
    }
  }, [currentSkill]);

  return (
    <motion.section
      ref={introRef}
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      transition={{ duration: 0.75, delay: 0.25 }}
      id="skills"
      className="section snap-start snap-always w-full SECTION"
    >
      <div className="skills flex flex-col lg:flex-row-reverse items-center px-4 w-full pt-6 lg:pt-0 gap-2">
        <BrainOfSkills />
        <div className="skillShow w-full h-[250px]">
          {currentSkill === "SKY" ? (
            <motion.div
              className="h-full text-center lg:text-start pt-5 lg:pt-0"
              variants={{
                hide: { opacity: 0 },
                show: { opacity: 1 },
              }}
              initial="hide"
              whileInView="show"
              viewport={{ amount: 0.8 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <motion.h2
                className="font-bold text-2xl md:text-3xl apply__title"
                variants={{
                  hide: { x: -50, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.25, delay: 0.25 }}
              >
                SkyDe <span className="hidden sm:inline">|</span>{" "}
                <p className="block sm:inline-block">Briliant, Self-Taught</p>{" "}
                <p>Web Developer</p>
              </motion.h2>
              <motion.p
                className="w-2/3 lg:w-1/2 text-lg mt-3 mx-auto lg:mx-0 hidden sm:block apply__body"
                variants={{
                  hide: { x: -50, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                # Supercharge your business growth with my innovative web
                development solutions
              </motion.p>
              <CallToActionBtn label="Scale your hiring" />
            </motion.div>
          ) : (
            <>
              <motion.h2
                // key={currentSkill}
                variants={{
                  hide: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                // exit="hide"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-3xl md:text-4xl font-bold text-center lg:text-start"
              >
                {skill.title}
              </motion.h2>

              <motion.ul
                // key={skill.alt}
                variants={{
                  hide: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                // exit="hide"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" flex flex-col flex-wrap list-disc px-6 h-full overflow-scroll gap-6 md:gap-2 md:py-4 mt-4 md:mt-0"
              >
                {skill.features.map((item, index) => (
                  <li className="" key={uuid()}>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Introduction;
