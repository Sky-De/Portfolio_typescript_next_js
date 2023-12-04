import { createSlice } from "@reduxjs/toolkit";

type ModelState = {
  contactModel: {
    isOpen: boolean;
  };
};

const initialModelState: ModelState = {
  contactModel: {
    isOpen: false,
  },
};

const modelSlice = createSlice({
  name: "models",
  initialState: initialModelState,
  reducers: {
    openContatctModel(state) {
      state.contactModel.isOpen = true;
    },
    closeContatctModel(state) {
      state.contactModel.isOpen = false;
    },
  },
});

export const { closeContatctModel, openContatctModel } = modelSlice.actions;
export default modelSlice.reducer;
