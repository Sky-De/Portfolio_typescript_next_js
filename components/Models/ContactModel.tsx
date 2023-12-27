"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closeContatctModel } from "@/redux/features/models/modelSlice";
import { motion } from "framer-motion";
import OfferForm from "../forms/OfferForm";
import CloseBtn from "../buttons/CloseBtn";

const ContactModel = () => {
  const { contactModel } = useAppSelector((state) => state.models);
  const dispatch = useAppDispatch();
  const handleCloseModel = () => dispatch(closeContatctModel());
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      key={String(contactModel.isOpen)}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: 0 }}
      className={`${
        contactModel.isOpen === false ? "hidden" : "block"
      } absolute top-0 left-0 w-full h-full z-40 backdrop-blur-xl flex items-center px-8`}
      onClick={handleCloseModel}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-4/5 bg-bg-secondary-light dark:bg-bg-secondary-dark"
      >
        <OfferForm />
        {/* <CloseBtn handleClick={handleCloseModel} /> */}
      </div>
    </motion.div>
  );
};

export default ContactModel;
