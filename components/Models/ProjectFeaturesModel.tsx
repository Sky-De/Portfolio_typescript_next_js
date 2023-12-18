"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closeContatctModel, closefeatureModel } from "@/redux/features/models/modelSlice";
import { motion } from "framer-motion";
import CloseBtn from "../buttons/CloseBtn";
import { v4 as uuid } from "uuid";

const ProjectFeaturesModel = () => {
  const { featuresModel } = useAppSelector((state) => state.models);
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
        featuresModel.isOpen === false ? "hidden" : "block"
      } border absolute top-0 left-0 w-full h-full z-40 backdrop-blur-sm flex items-center`}
      onClick={() => dispatch(closefeatureModel())}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="border w-full h-1/2 bg-black text-white"
      >
        <CloseBtn handleClick={()=> dispatch(closefeatureModel())}/>
        <ol className="p-2 ml-6 list-disc">
          {featuresModel.features.length > 0 && (
            featuresModel.features.map(feature => <li key={uuid()}>{feature}</li>)
          )}
        </ol>
      </div>
    </motion.div>
  );
};

export default ProjectFeaturesModel;
