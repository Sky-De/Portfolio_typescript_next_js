import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "../features/skill/skillSlice";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
