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
      {/* controlls middle------------ */}
      <button
        onClick={() => {
          dispatch(setPreProject());
        }}
        className="absolute top-[50%] left-0 text-3xl dark:text-white hover:opacity-50"
      >
        <i className="bx bx-chevron-left apply__carousel--btn"></i>
      </button>
      <button
        onClick={() => {
          dispatch(setNextProject());
        }}
        className="absolute top-[50%] right-0 dark:text-white hover:opacity-50"
      >
        <i className="bx bx-chevron-right apply__carousel--btn"></i>
      </button>
      {/* controlls bottoms -----------------------------------*/}
      {projects && (
        <div className="flex absolute bottom-4 md:bottom-10 flex-col items-center  w-full justify-center gap-2">
          <div className="hidden md:flex  w-full justify-center gap-2">
            {projects.map((pro) => (
              <span
                onClick={() => dispatch(setActiveProject(pro.id))}
                className={`transition-all duration-700 rounded-full cursor-pointer block p-1 border border-heading-light dark:border-heading-dark ${
                  pro.id === selectedProjectId
                    ? "bg-bg-primary-dark px-2 dark:bg-bg-primary-light"
                    : ""
                }`}
                key={pro.id}
              ></span>
            ))}
          </div>
          {selectedProject && (
            <p
              className="text-heading-light dark:text-heading-dark mt-0 md:mt-2"
              key={selectedProject.id}
            >
              {selectedProject.id} of {projects.length}
            </p>
          )}
        </div>
      )}

      {/* Project content------------------------------------------------- */}
      <motion.div
        key={selectedProjectId}
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center gap-5  w-full  mx-12 py-5"
      >
        {selectedProject && (
          <div className="flex border flex-col md:flex-row md:mt-auto md:px-4 items-center md:justify-evenly">
            <div className="project--info flex flex-col gap-1 items-center md:items-start md:w-2/5 md:gap-4">
              <h2
                className="text-heading-light dark:text-heading-dark font-bold text-3xl md:text-4xl"
                key={selectedProject.id}
              >
                {selectedProject.title}
              </h2>

              <div className=" flex gap-3 items-center mb-2 flex-wrap">
                {selectedProject.techIcons.length > 0 &&
                  selectedProject.techIcons.map((icon) => (
                    <Image
                      src={icon}
                      width={40}
                      height={40}
                      key={icon.toString()}
                      alt={icon.toString()}
                    />
                  ))}
                {selectedProject.otherTechs.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <p className="text-center md:text-start md:w-3/4 mb-4">
                {selectedProject.description}
              </p>
            </div>
            <Image
              src="/adminDashboard.png"
              width={300}
              height={300}
              className="project--image w-[300px] h-auto md:w-[400px]"
              alt="project image"
            />
          </div>
        )}
        {/* project links------------------- */}
        <div className="project--links flex flex-col justify-center items-center gap-3 mb-auto md:items-start md:w-full md:ml-44">
          <span className="font-bold">More details :</span>
          <Link
            href={"#"}
            target="_blank"
            className="flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            <i className="bx bxl-github apply__footer--item "></i>
            Github Repositorty{" "}
          </Link>
          <Link
            href={"#"}
            target="_blank"
            className="flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            <i className="bx bxl-netlify apply__footer--item"></i>
            Live Demo
          </Link>
          <Link href={"#"}></Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
