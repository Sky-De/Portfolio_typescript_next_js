import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type NavState = {
  currentPath: string;
};

type NavPayload = string;

const NavInitialState: NavState = {
  currentPath: "Skills",
};

const navSlice = createSlice({
  name: "nav",
  initialState: NavInitialState,
  reducers: {
    setActiveNav(state, action: PayloadAction<NavPayload>) {
      state.currentPath = action.payload;
      console.log(state.currentPath);
    },
  },
});

export const { setActiveNav } = navSlice.actions;
export default navSlice.reducer;
