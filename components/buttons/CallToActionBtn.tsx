"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { openContatctModel } from "@/redux/features/models/modelSlice";

const CallToActionBtn: FC<{ label: string }> = ({ label }) => {
  const dispatch = useAppDispatch();
  return (
    <motion.button
      onClick={() => dispatch(openContatctModel())}
      variants={{
        hide: { x: 50, opacity: 0 },
        show: { x: 0, opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      className="callToActionBtn text-white bg-black dark:text-black dark:bg-white px-4 py-4 w-2/3 md:w-1/2 lg:w-[78%] rounded-2xl font-semibold transition-colors"
    >
      {label.toUpperCase()}
    </motion.button>
  );
};

export default CallToActionBtn;
