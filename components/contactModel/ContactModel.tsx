"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closeContatctModel } from "@/redux/features/models/modelSlice";
import { motion } from "framer-motion";

const ContactModel = () => {
  const { contactModel } = useAppSelector((state) => state.models);
  const dispatch = useAppDispatch();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, delay: 1.25 }}
      className={`${
        contactModel.isOpen === false ? "hidden" : "block"
      } border absolute top-0 left-0 w-full h-full z-40 backdrop-blur-3xl`}
      onClick={() => dispatch(closeContatctModel())}
    >
      <div onClick={(e) => e.stopPropagation()} className="border w-full h-1/2">
        form
      </div>
    </motion.div>
  );
};

export default ContactModel;
