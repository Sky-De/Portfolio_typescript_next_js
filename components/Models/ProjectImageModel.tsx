"use client";
import { FC } from "react";
import { closeImageModel } from "@/redux/features/models/modelSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import CloseBtn from "../buttons/CloseBtn";

const ProjectImageModel: FC = () => {
  const { imageModel } = useAppSelector((state) => state.models);
  const dispatch = useAppDispatch();
  const closeModelHandler = () => dispatch(closeImageModel());
  return (
    <div
      data-testid="projectImageModel"
      className={`${
        imageModel.isOpen === false ? "hidden" : "block"
      } absolute top-0 left-0 w-full h-full z-40 backdrop-blur-3xl flex items-center`}
      onClick={() => dispatch(closeImageModel())}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-full bg-[background-color: rgb(0 0 0 / 0.2)] px-8 md:px-16"
      >
        {/* FIX-- replace all img tag with Image from next js */}
        <CloseBtn handleClick={closeModelHandler} />
        <img
          className="max-h-[90svh] md:p-8 m-auto"
          src={imageModel.imageUrl}
          alt="project"
        />
      </div>
    </div>
  );
};

export default ProjectImageModel;
