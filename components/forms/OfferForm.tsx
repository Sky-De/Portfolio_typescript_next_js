import { useState } from "react";
import Input, { CheckBox } from "./Input";
import JobForm from "./JobForm";
import CompanyForm from "./CompanyForm";
import Stepper from "../stepper/Stepper";
import ContactFromAction from "../buttons/ContactFromAction";

const OfferForm = () => {
  const [step, setStep] = useState<number>(1);
   const handleNextStep = () => {
    if(step === 3) return;
    setStep(step + 1);
   }
   const handlePreStep = () => {
    if (step === 1) return;
    setStep(step - 1);
   }
   const handleSubmit = () => {
    setStep(4)
   }
   
  return (
    <section className="border relative h-full">
      <Stepper step={step} />
      {step === 1 && <JobForm />}
      {step === 2 && <CompanyForm />}
      {step === 3 && (
        <h2 className="flex flex-col justify-center items-center h-full">
          Review
        </h2>
      )}

      <ContactFromAction
        handleNextStep={handleNextStep}
        handlePreStep={handlePreStep}
        handleSubmit={handleSubmit}
        step={step}
      />
    </section>
  );
}

export default OfferForm;