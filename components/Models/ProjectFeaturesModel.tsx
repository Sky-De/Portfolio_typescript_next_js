"use client";
import { FC } from "react";
import { v4 as uuid } from "uuid";
import { closefeatureModel } from "@/redux/features/models/modelSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import CloseBtn from "../buttons/CloseBtn";

const ProjectFeaturesModel: FC = () => {
  const { featuresModel } = useAppSelector((state) => state.models);

  const dispatch = useAppDispatch();
  return (
    <div
      className={`${
        featuresModel.isOpen === false ? "hidden" : "block"
      }  absolute top-0 left-0 w-full h-full z-40 backdrop-blur-sm flex items-center`}
      onClick={() => dispatch(closefeatureModel())}
    >
      <CloseBtn handleClick={() => dispatch(closefeatureModel())} />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full lg:w-1/2 lg:mx-auto h-1/2 bg-bg-secondary-light dark:bg-bg-secondary-dark text-heading-light dark:text-heading-dark mx-2"
      >
        <h3 className="font-bold apply__title text-lg absolute top-3 left-3">
          Features
        </h3>
        <ol className="p-2 list-disc  m-auto grid md:grid-cols-2 ">
          {featuresModel.features.length > 0 &&
            featuresModel.features.map((feature) => (
              <li key={uuid()}>{feature}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default ProjectFeaturesModel;
