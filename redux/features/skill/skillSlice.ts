import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SkillState = {
  currentSkill: string;
};

type SkillPayload = string;

const SkillInitialState: SkillState = {
  currentSkill: "SKY",
};

const skillSlice = createSlice({
  name: "skill",
  initialState: SkillInitialState,
  reducers: {
    setActiveSkill(state, action: PayloadAction<SkillPayload>) {
      state.currentSkill = action.payload;
    },
  },
});

export const { setActiveSkill } = skillSlice.actions;
export default skillSlice.reducer;
