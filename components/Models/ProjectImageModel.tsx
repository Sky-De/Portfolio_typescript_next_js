
"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { closeContatctModel, closeImageModel } from "@/redux/features/models/modelSlice";
import { motion } from "framer-motion";
import CloseBtn from "../buttons/CloseBtn";

const ProjectImageModel = () => {
  const { imageModel } = useAppSelector((state) => state.models);
  const dispatch = useAppDispatch();
  const closeModelHandler = () => dispatch(closeImageModel());
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
        imageModel.isOpen === false ? "hidden" : "block"
      } absolute top-0 left-0 w-full h-full z-40 backdrop-blur-sm flex items-center`}
      onClick={() => dispatch(closeImageModel())}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-full bg-[background-color: rgb(0 0 0 / 0.2)] px-8 md:px-16"
      >
        {/* FIX-- replace all img tag with Image from next js */}
        <img
          className="max-h-[90svh] md:p-8 m-auto"
          src={imageModel.imageUrl}
          alt="project"
        />
        <CloseBtn handleClick={closeModelHandler} />
      </div>
    </motion.div>
  );
};

export default ProjectImageModel;
