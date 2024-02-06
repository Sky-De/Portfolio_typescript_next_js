import { skillsDetails } from "@/constants/skillsDetail";
import { skillsDetailsPops } from "@/types/allTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const InitialSkill: skillsDetailsPops = {
  id: "",
  alt: "",
  title: "",
  icon: "",
  features: [],
};

type SkillState = {
  currentSkill: string;
  currentSkillData: skillsDetailsPops;
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
