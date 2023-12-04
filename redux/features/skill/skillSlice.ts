import { skillsDetails } from "@/constants/skillsDetail";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SkillType = {
  id: string;
  alt: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};
export const InitialSkill: SkillType = {
  id: "",
  alt: "",
  title: "",
  icon: "",
  description: "",
  features: [],
};

type SkillState = {
  currentSkill: string;
  currentSkillData: SkillType;
};

type SkillPayload = string;

const SkillInitialState: SkillState = {
  currentSkill: "SKY",
  currentSkillData: InitialSkill,
};

const skillSlice = createSlice({
  name: "skill",
  initialState: SkillInitialState,
  reducers: {
    setActiveSkill(state, action: PayloadAction<SkillPayload>) {
      state.currentSkill = action.payload;
      const skill = skillsDetails.find(
        (skill) => skill.id === state.currentSkill
      );
      if (skill) state.currentSkillData = skill;
    },
  },
});

export const { setActiveSkill } = skillSlice.actions;
export default skillSlice.reducer;
