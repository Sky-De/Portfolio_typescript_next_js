import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "../features/skill/skillSlice";
import navReducer from "../features/nav/navSlice";
import projectsReducer from "../features/projects/projectSlice";
import modelReducer from "../features/models/modelSlice";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
    nav: navReducer,
    projects: projectsReducer,
    models: modelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
