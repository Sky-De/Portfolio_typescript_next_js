import BrainOfSkills from "../skillsHero/BrainOfSkills";
import { skillsDetails } from "@/constants/skillsDetail";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import JobOfferBtn from "../buttons/JobOfferBtn";

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
      transition={{ duration: 0.75, delay: 0.25 }}
      id="1"
      className="section snap-start snap-always w-full"
    >
      <div className="skills flex flex-col lg:flex-row-reverse items-center px-4 justify-evenly w-full">
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
                className="font-bold text-3xl"
                variants={{
                  hide: { x: -50, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.25, delay: 0.25 }}
              >
                SkyDe | Briliant, Self-Taught <p>Web Developer</p>
              </motion.h2>
              <motion.p
                className="w-2/3 lg:w-1/2 text-lg text-gray-500 mt-3 mx-auto lg:mx-0 hidden sm:block"
                variants={{
                  hide: { x: -50, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Supercharge your business growth with my innovative web
                development solutions
              </motion.p>
              <motion.button
                variants={{
                  hide: { x: 50, opacity: 0 },
                  show: { x: 0, opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                className="mt-6 text-white bg-black px-4 py-3 w-1/2 rounded-2xl"
              >
                JOB OFFER
              </motion.button>
              {/* <JobOfferBtn /> */}
            </motion.div>
          ) : (
            <>
              <motion.h2
                key={currentSkill}
                variants={{
                  hide: { y: -10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                initial="hide"
                whileInView="show"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-4xl font-bold text-center lg:text-start"
              >
                {skill.title}
              </motion.h2>

              <motion.ul
                key={skill.alt}
                variants={{
                  hide: { opacity: 0, x: -25 },
                  show: { opacity: 1, x: 0 },
                }}
                initial="hide"
                whileInView="show"
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className=" flex flex-col flex-wrap list-disc px-6 h-full overflow-scroll gap-6 md:gap-2 md:py-4 mt-4 md:mt-0"
              >
                {skill.features.map((item, index) => (
                  <li className="" key={index}>
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
