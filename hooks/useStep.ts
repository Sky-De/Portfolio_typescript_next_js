import { UseStepReturn } from "@/types/allTypes";
import { useState } from "react";

export const useStep = (): UseStepReturn => {
  const [step, setStep] = useState<number>(1);
  const handleNextStep = () => {
    if (step === 3) return;
    setStep(step + 1);
  };
  const handlePreStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };
  const submitIsDone = () => {
    setStep(4);
  };

  return { step, handleNextStep, handlePreStep, submitIsDone };
};
