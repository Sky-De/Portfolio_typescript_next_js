"use client";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setActiveProject,
  setNextProject,
  setPreProject,
} from "@/redux/features/projects/projectSlice";
import { v4 as uuid } from "uuid";
import { openfeatureModel } from "@/redux/features/models/modelSlice";
import Image from "next/image";
import Link from "next/link";
import Mockup from "../mockups/Mockup";
import {
  fade_In_Veiw_Animation_Props,
  short_Slide_Up_Animation_Props,
  slide_Right_Animation_Props,
} from "@/constants/animationProps";

const Projects: FC = () => {
  const { projects, selectedProject, selectedProjectId } = useAppSelector(
    (state) => state.projects
  );

  const dispatch = useAppDispatch();

  const projectsRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Projects", ref: projectsRef });
  return (
    <motion.section
      ref={projectsRef}
      {...fade_In_Veiw_Animation_Props}
      viewport={{ amount: 0.5 }}
      id="projects"
      className="section snap-start snap-always relative"
    >
      {/* ABSOLUTE BTNS */}
      {/* controlls - middle------------ */}
      <button
        aria-label="pre-Project"
        onClick={() => {
          dispatch(setPreProject());
        }}
        className="apply__carousel--btn left-0"
      >
        <i className="bx bx-chevron-left apply__carousel--btnIcon"></i>
      </button>
      <button
        aria-label="next-Project"
        onClick={() => {
          dispatch(setNextProject());
        }}
        className="apply__carousel--btn right-0"
      >
        <i className="bx bx-chevron-right apply__carousel--btnIcon"></i>
      </button>
      {/* controlls - bottom -----------------------------------*/}
      {projects && (
        <div className="flex absolute bottom-4 md:bottom-10 flex-col items-center  w-full justify-center gap-2">
          <div className="hidden md:flex  w-full justify-center gap-2">
            {projects.map((pro) => (
              <span
                onClick={() => dispatch(setActiveProject(pro.id))}
                title={pro.id + ""}
                className={`transition-all duration-700 rounded-full cursor-pointer block px-[0.30rem] py-[0.30rem] border border-heading-light dark:border-heading-dark ${
                  pro.id === selectedProjectId
                    ? "bg-bg-primary-dark px-[0.60rem] dark:bg-bg-primary-light"
                    : ""
                }`}
                key={uuid()}
              ></span>
            ))}
          </div>
          {selectedProject && (
            <p
              className="text-body-light dark:text-body-dark mt-0 md:mt-2 text-sm"
              key={uuid()}
            >
              {selectedProject.id} of {projects.length}
            </p>
          )}
        </div>
      )}

      {/* Project content------------------------------------------------- */}
      <div
        key={selectedProjectId}
        className="flex flex-col items-center gap-5  w-full  mx-12 py-5"
      >
        {selectedProject && (
          <div className="flex flex-col lg:flex-row md:mt-auto md:px-16 items-center  md:justify-evenly lg:gap-4">
            <motion.div
              {...slide_Right_Animation_Props}
              // viewport={{ amount: 1 }}
              className="project--info flex flex-col gap-1 items-center lg:items-start lg:w-2/5 md:gap-4"
            >
              <h2
                className="apply__title font-semibold text-3xl md:text-4xl py-4 transition-colors"
                key={uuid()}
              >
                {selectedProject.title}
              </h2>

              <div className=" flex gap-3 items-center mb-2 flex-wrap justify-center md:justify-start">
                {selectedProject.techIcons.length > 0 &&
                  selectedProject.techIcons.map((icon) => (
                    <Image
                      loading="lazy"
                      src={icon}
                      width={30}
                      height={30}
                      key={uuid()}
                      alt={icon.toString()}
                    />
                  ))}
                {selectedProject.otherTechs.map((tech) => (
                  <span
                    className="text-body-light dark:text-body-dark text-sm"
                    key={uuid()}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="hidden md:block text-center md:text-start w-3/4 mb-4 text-body-light dark:text-body-dark">
                {selectedProject.description}
              </p>
            </motion.div>
            {/* FIX--get make this dynamic */}

            <Mockup
              laptopCoverUrl={selectedProject.images.laptopCoverUrl}
              tableCoverUrl={selectedProject.images.tableCoverUrl}
              mobileCoverUrl={selectedProject.images.mobileCoverUrl}
            />
          </div>
        )}
        {/* project links------------------- */}
        <motion.div
          {...short_Slide_Up_Animation_Props}
          viewport={{ amount: 0.2 }}
          className="project--links flex flex-col justify-center items-center gap-3 lg:items-start md:w-full lg:ml-32 my-auto"
        >
          <span className="font-bold hidden md:inline">
            Explore more details
          </span>
          <button
            onClick={() => {
              dispatch(
                openfeatureModel({
                  features: selectedProject ? selectedProject.features : [],
                })
              );
            }}
            className="flex items-center opacity-100 md:opacity-70 gap-2 hover:opacity-100 transition-opacity"
          >
            <i className="bx bx-hive apply__footer--item"></i>
            Features{" "}
          </button>

          <Link
            href={selectedProject ? selectedProject.liveUrl : ""}
            target="_blank"
            className="flex items-center opacity-100 md:opacity-70 gap-2 hover:opacity-100 transition-opacity"
          >
            <i className="bx bxl-netlify apply__footer--item"></i>
            Live Demo
          </Link>
          <Link
            href={selectedProject ? selectedProject.repoUrl : ""}
            target="_blank"
            className="flex items-center opacity-100 md:opacity-70 gap-2 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <i className="bx bxl-github apply__footer--item "></i>
            Github Repositorty{" "}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
