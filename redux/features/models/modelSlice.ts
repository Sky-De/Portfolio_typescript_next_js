import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ImageModelPayload = {
  imageUrl: string;
}
type FeaturesModelPayload = {
  features: string[];
}

type ModelState = {
  contactModel: {
    isOpen: boolean;
  };
  imageModel: {
    isOpen: boolean;
    imageUrl: string;
  };
  featuresModel: {
    isOpen: boolean;
    features: string[];
  };
};

const initialModelState: ModelState = {
  contactModel: {
    isOpen: false,
  },
  imageModel: {
    isOpen: false,
    imageUrl: ""
  },
  featuresModel: {
    isOpen:false,
    features:[]
  }
};

const modelSlice = createSlice({
  name: "models",
  initialState: initialModelState,
  reducers: {
    // Contact
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
    //Project features
    openfeatureModel(state, action: PayloadAction<FeaturesModelPayload>) {
      state.featuresModel.features = action.payload.features;
      state.featuresModel.isOpen = true;
    },
    closefeatureModel(state) {
      state.featuresModel.isOpen = false;
      state.featuresModel.features = [];
    },
  },
});

export const { closeContatctModel, openContatctModel, closeImageModel, openImageModel, closefeatureModel, openfeatureModel } = modelSlice.actions;
export default modelSlice.reducer;
