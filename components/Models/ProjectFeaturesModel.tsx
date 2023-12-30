"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closefeatureModel } from "@/redux/features/models/modelSlice";
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
      }  absolute top-0 left-0 w-full h-full z-40 backdrop-blur-sm flex items-center`}
      onClick={() => dispatch(closefeatureModel())}
    >
      <CloseBtn handleClick={()=> dispatch(closefeatureModel())}/>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full h-1/2 bg-bg-secondary-light dark:bg-bg-secondary-dark text-heading-light dark:text-heading-dark mx-2"
        >
        <h3 className="font-bold apply__title text-lg absolute top-3 left-3">Features</h3>
        <ol className="p-2 list-disc  m-auto grid md:grid-cols-2 ">
          {featuresModel.features.length > 0 && (
            featuresModel.features.map(feature => <li key={uuid()}>{feature}</li>)
          )}
        </ol>
      </div>
    </motion.div>
  );
};

export default ProjectFeaturesModel;
