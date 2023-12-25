import { useState } from "react";


export const useStep = () => {
  const [step, setStep] = useState<number>(1);
  const handleNextStep = () => {
    if (step === 3) return;
    setStep(step + 1);
  };
  const handlePreStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };
  const handleSubmit = () => {
    setStep(4);
  };

  return { step, handleNextStep, handlePreStep, handleSubmit }

}