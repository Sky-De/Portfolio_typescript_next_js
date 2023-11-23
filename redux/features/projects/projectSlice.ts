import { projectsData } from "@/constants/projectsData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProjectState = {
  title: string;
  techIcons: string[];
  images: string[];
  features: string[];
  id: number;
  description: string;
};
type ProjectsState = {
  projects: ProjectState[];
  selectedProject: ProjectState | undefined;
  selectedProjectId: number;
};

type ProjectId = number;

const ProjectsInitialState: ProjectsState = {
  projects: projectsData,
  selectedProject: projectsData[0],
  selectedProjectId: 1,
};

const projectSlice = createSlice({
  name: "projects",
  initialState: ProjectsInitialState,
  reducers: {
    setActiveProject(state, action: PayloadAction<ProjectId>) {
      state.selectedProjectId = action.payload;
      state.selectedProject = state.projects.find(
        (project) => project.id === action.payload
      );
    },
    setNextProject(state) {
      if (state.selectedProjectId >= state.projects.length) {
        state.selectedProjectId = 1;
        state.selectedProject = state.projects.find(
          (project) => project.id === state.selectedProjectId
        );
      } else {
        state.selectedProjectId += 1;
        state.selectedProject = state.projects.find(
          (project) => project.id === state.selectedProjectId
        );
      }
    },
    setPreProject(state) {
      if (state.selectedProjectId <= 1) {
        state.selectedProjectId = state.projects.length;
        state.selectedProject = state.projects.find(
          (project) => project.id === state.selectedProjectId
        );
      } else {
        state.selectedProjectId -= 1;
        state.selectedProject = state.projects.find(
          (project) => project.id === state.selectedProjectId
        );
      }
    },
  },
});

export const { setActiveProject, setNextProject, setPreProject } =
  projectSlice.actions;
export default projectSlice.reducer;
