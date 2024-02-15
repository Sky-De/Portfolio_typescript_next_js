"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { closeContatctModel } from "@/redux/features/models/modelSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import OfferForm from "../forms/OfferForm";
import { fade_Animation_Props } from "@/constants/animationProps";
import CloseBtn from "../buttons/CloseBtn";

const ContactModel: FC = () => {
  const { contactModel } = useAppSelector((state) => state.models);
  const dispatch = useAppDispatch();
  const handleCloseModel = () => dispatch(closeContatctModel());
  return (
    <motion.div
      data-testid="contactModel"
      key={String(contactModel.isOpen)}
      {...fade_Animation_Props}
      className={`${
        contactModel.isOpen === false ? "hidden" : "block"
      } absolute top-0 left-0 w-full h-full z-40 backdrop-blur-xl flex items-center px-8`}
      onClick={handleCloseModel}
    >
      <CloseBtn handleClick={() => dispatch(closeContatctModel())} />
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-4/5 bg-bg-secondary-light dark:bg-bg-secondary-dark rounded-sm"
      >
        <OfferForm />
      </div>
    </motion.div>
  );
};

export default ContactModel;
