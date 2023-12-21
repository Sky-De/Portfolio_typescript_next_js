import { useIsInView } from "@/hooks/useIsInVeiw";
import { useRef } from "react";
import { motion } from "framer-motion";
import LearnList from "../learnList/LearnList";
import {
  DeepenListData,
  ExploreListData,
  MasterListData,
} from "@/constants/learnItems";

const Learn = () => {
  const learnRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Learn", ref: learnRef });
  return (
    <motion.section
      ref={learnRef}
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0 }}
      id="learn"
      className="section snap-start snap-always"
    >
      <div className="flex w-full items-center flex-col lg:flex-row px-2 md:justify-center my-auto">
        <div className="learn__intro lg:w-2/3">
          <motion.h2  className=" mx-auto font-extrabold lg:mx-0 mb-8 md:mb-0 pt-8 md:pt-10 text-2xl md:text-3xl xl:text-4xl text-center sm:w-2/3 lg:text-start lg:w-2/3">
            {`A Journey of Continuous
          Learning`}
          </motion.h2>
          <p className="hidden sm:block w-2/3 lg:w-4/5 text-center lg:text-start  mx-auto lg:mx-0 lg:block apply__body  pb-8 md:pb-10 pt-4">
            As a web developer, I am committed to lifelong learning and
            continuous professional development.{" "}
            <span className="hidden lg:inline">
              I am always seeking out new opportunities to expand my knowledge
              and skills, ensuring that I remain at the forefront of the
              ever-evolving tech landscape. My passion for learning is fueled by
              my curiosity and desire to create innovative and impactful web
              solutions.
            </span>
          </p>
        </div>
        <div className="lg:pt-8">
          <LearnList title="Master" learnListItems={MasterListData} />
          <LearnList title="Deepen" learnListItems={DeepenListData} />
          <LearnList title="Explore" learnListItems={ExploreListData} />
        </div>
      </div>
    </motion.section>
  );
};

export default Learn;
