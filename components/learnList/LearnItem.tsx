import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { FC } from "react";
import { LearnItemProps } from "@/types/allTypes";
import { fade_Scale_item_Animation_Props } from "@/constants/animationProps";
import "./style.css";

const LearnItem: FC<LearnItemProps> = ({ index, item }) => {
  return (
    <motion.li
      data-testid="learnItem"
      {...fade_Scale_item_Animation_Props}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      key={uuid()}
      className={`apply__learn--item `}
    >
      {item}
    </motion.li>
  );
};

export default LearnItem;
