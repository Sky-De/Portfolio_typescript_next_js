import React, { FC } from "react";
import { motion } from "framer-motion";

const CallToActionBtn: FC<{ label: string }> = ({ label }) => {
  return (
    <motion.button
      variants={{
        hide: { x: 50, opacity: 0 },
        show: { x: 0, opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      className="hover:opacity-10 mt-6 text-white bg-black dark:text-black dark:bg-white px-4 py-3 w-2/3 md:w-1/2 rounded-2xl"
    >
      {label.toUpperCase()}
    </motion.button>
  );
};

export default CallToActionBtn;
