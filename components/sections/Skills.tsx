"use client";
import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { v4 as uuid } from "uuid";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { useAppSelector } from "@/hooks/reduxHooks";
import CallToActionBtn from "../buttons/CallToActionBtn";
import BrainOfSkills from "../skillsHero/BrainOfSkills";
import ScrollDownIcon from "../ScrollDownIcon/ScrollDownIcon";

const Skills: FC = () => {
  const { currentSkill, currentSkillData: skill } = useAppSelector(
    (state) => state.skill
  );
  const introRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Skills", ref: introRef });

  return (
    <motion.section
      data-testid="skill-secion"
      ref={introRef}
      // {...long_Fade_In_Veiw_Animation_Props}
      id="skills"
      className="section snap-start snap-always w-full relative"
    >
      <span className="section__title">Skills</span>
      <div
        data-testid="BrainOfSkills-con"
        className="skills flex flex-col lg:flex-row-reverse tall:flex-col items-center px-4 w-full pt-6 lg:pt-0 gap-2"
      >
        <BrainOfSkills />
        <div
          data-testid="skillShow"
          className={`skillShow w-full  h-[250px] ${
            currentSkill === "SKY" ? "lg:h-auto" : "lg:h-[250px]"
          }  my-auto`}
        >
          {/* developer intro---------------------- */}
          {currentSkill === "SKY" ? (
            <motion.div className="h-full flex flex-col items-center lg:items-start lg:text-start pt-5 lg:pt-0 tall:items-center">
              <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl apply__title mb-8 md:mb-0 text-center lg:text-start tall:text-center">
                SkyDe <span className="hidden sm:inline">|</span>{" "}
                <p className="block ">Briliant, Self-Taught</p>{" "}
                <p>Web Developer</p>
              </h2>
              <motion.p
                className="w-2/3 lg:w-3/5 text-lg mt-3 mx-auto lg:mx-0 hidden sm:block apply__body mb-6 tall:text-center"
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
              <CallToActionBtn label="Let's Collaborate" />
            </motion.div>
          ) : (
            <>
              {/* skills show case ---------------------- */}
              <motion.h2
                data-testid="skillTitle"
                key={currentSkill}
                variants={{
                  hide: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                // exit="hide"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-3xl md:text-4xl font-bold text-center lg:text-start capitalize"
              >
                {skill.title}
              </motion.h2>

              <motion.ul
                key={skill.alt}
                variants={{
                  hide: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                exit="hide"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" flex flex-col flex-wrap list-disc px-6 h-full overflow-scroll gap-6 md:gap-2 md:py-4 mt-4 md:mt-0"
              >
                {skill.features.map((item, index) => (
                  <li className="capitalize" key={uuid()}>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </div>
      </div>
      <ScrollDownIcon />
    </motion.section>
  );
};

export default Skills;
