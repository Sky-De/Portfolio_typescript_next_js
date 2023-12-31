import { useIsInView } from "@/hooks/useIsInVeiw";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  setActiveProject,
  setNextProject,
  setPreProject,
} from "@/redux/features/projects/projectSlice";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import Mockup from "../mockups/Mockup";
import { openfeatureModel } from "@/redux/features/models/modelSlice";

const Projects = () => {
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
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="projects"
      className="section snap-start snap-always relative"
    >
      {/* ABSOLUTE BTNS */}
      {/* controlls - middle------------ */}
      <button
        onClick={() => {
          dispatch(setPreProject());
        }}
        className="absolute bottom-[10%] sm:bottom-[40%] left-0 text-3xl dark:text-white hover:opacity-50"
      >
        <i className="bx bx-chevron-left apply__carousel--btn"></i>
      </button>
      <button
        onClick={() => {
          dispatch(setNextProject());
        }}
        className="absolute bottom-[10%] sm:bottom-[40%] right-0 dark:text-white hover:opacity-50"
      >
        <i className="bx bx-chevron-right apply__carousel--btn"></i>
      </button>
      {/* controlls - bottom -----------------------------------*/}
      {projects && (
        <div className="flex absolute bottom-4 md:bottom-10 flex-col items-center  w-full justify-center gap-2">
          <div className="hidden md:flex  w-full justify-center gap-2">
            {projects.map((pro) => (
              <span
                onClick={() => dispatch(setActiveProject(pro.id))}
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
          <div className="flex flex-col lg:flex-row md:mt-auto md:px-16 items-center md:justify-evenly lg:gap-4">
            <motion.div
              variants={{
                hide: { opacity: 0, x: -100 },
                show: { opacity: 1, x: 0 },
              }}
              initial="hide"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="project--info flex flex-col gap-1 items-center md:items-start lg:w-2/5 md:gap-4"
            >
              <h2
                className="text-heading-light dark:text-heading-dark font-bold text-3xl md:text-4xl py-4 transition-colors"
                key={uuid()}
              >
                {selectedProject.title}
              </h2>

              <div className=" flex gap-3 items-center mb-2 flex-wrap justify-center md:justify-start">
                {selectedProject.techIcons.length > 0 &&
                  selectedProject.techIcons.map((icon) => (
                    <Image
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
          variants={{
            hide: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hide"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="project--links flex flex-col justify-center items-center gap-3 md:items-start md:w-full md:ml-32 my-auto"
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
            href={"#"}
            target="_blank"
            className="flex items-center opacity-100 md:opacity-70 gap-2 hover:opacity-100 transition-opacity"
          >
            <i className="bx bxl-netlify apply__footer--item"></i>
            Live Demo
          </Link>
          <Link
            href={"#"}
            target="_blank"
            className="flex items-center opacity-100 md:opacity-70 gap-2 hover:opacity-100 transition-opacity"
          >
            <i className="bx bxl-github apply__footer--item "></i>
            Github Repositorty{" "}
          </Link>
          <Link href={"#"}></Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
