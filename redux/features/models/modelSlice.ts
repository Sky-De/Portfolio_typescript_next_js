import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ImageModelPayload = {
  imageUrl: string;
}

type ModelState = {
  contactModel: {
    isOpen: boolean;
  };
  imageModel: {
    isOpen: boolean;
    imageUrl: string;
  }
};

const initialModelState: ModelState = {
  contactModel: {
    isOpen: false,
  },
  imageModel: {
    isOpen: false,
    imageUrl: ""
  }
};

const modelSlice = createSlice({
  name: "models",
  initialState: initialModelState,
  reducers: {
    // Contct
    openContatctModel(state) {
      state.contactModel.isOpen = true;
    },
    closeContatctModel(state) {
      state.contactModel.isOpen = false;
    },
    //Project image
    openImageModel(state, action: PayloadAction<ImageModelPayload>) {
      state.imageModel.imageUrl = action.payload.imageUrl;
      state.imageModel.isOpen = true;
    },
    closeImageModel(state) {
      state.imageModel.isOpen = false;
      state.imageModel.imageUrl = "";
    },
  },
});

export const { closeContatctModel, openContatctModel, closeImageModel, openImageModel } = modelSlice.actions;
export default modelSlice.reducer;
