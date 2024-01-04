"use client";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { FC } from "react";
import { LearnItemProps } from "@/types/allTypes";
import { fade_Up_Animation_Props } from "@/constants/animationProps";

const LearnItem: FC<LearnItemProps> = ({ index, item }) => {
  return (
    <motion.li
      {...fade_Up_Animation_Props}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      key={uuid()}
      className={`apply__learn--item bg-bg-secondary-dark dark:bg-bg-secondary-light dark:text-heading-light text-sm md:text-base transition-colors`}
    >
      {item}
    </motion.li>
  );
};

export default LearnItem;
