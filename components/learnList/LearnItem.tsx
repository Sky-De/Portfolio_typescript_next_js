"use client";
import { v4 as uuid } from "uuid";
import { motion} from "framer-motion";

type LearnItemProps = {
    index: number;
    item: string;
}

const LearnItem = ({ index, item }: LearnItemProps) => {
  return (
    <motion.li
      variants={{
        hide: { opacity: 0, x: -100, y: 100 },
        show: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hide"
      whileInView="show"
      // viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      key={uuid()}
      className={`apply__learn--item bg-bg-secondary-dark dark:bg-bg-secondary-light dark:text-heading-light text-sm md:text-base`}
    >
      {item}
    </motion.li>
  );
};

export default LearnItem