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
      {/* temprary--replace these btns--FIX */}
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

      <motion.div
        key={selectedProjectId}
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-5 border w-full border-red-500 mx-12 py-5"
      >
        {selectedProject && (
          <>
            <p
              className="text-heading-light dark:text-heading-dark"
              key={selectedProject.id}
            >
              {selectedProject.id}
            </p>
            <div className="border flex gap-3 justify-center">
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
            </div>
          </>
        )}
      </motion.div>
      {projects && (
        <div className=" absolute bottom-10 flex flex-col items-center  w-full justify-center gap-2">
          <div className="flex  w-full justify-center gap-2">
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
              className="text-heading-light dark:text-heading-dark mt-2"
              key={selectedProject.id}
            >
              {selectedProject.id} of {projects.length}
            </p>
          )}
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
