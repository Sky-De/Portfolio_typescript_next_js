import { useState } from "react";
import Input, { CheckBox } from "./Input";
import JobForm from "./JobForm";
import CompanyForm from "./CompanyForm";

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
   
  return (
    <section className="border relative h-full">
      <div className="steps">
        <div className={`activeStep ${step > 1 ? "activeLine" : ""}`}>
          <p>1</p>
          <h4>JOB</h4>
        </div>
        <div
          className={`${step > 1 ? "activeStep" : ""} ${
            step > 2 ? "activeLine" : ""
          }`}
        >
          <p>2</p>
          <h4>COMPANY</h4>
        </div>
        <div className={`${step > 2 ? "activeStep" : ""}`}>
          <p>3</p>
          <h4>SEND</h4>
        </div>
      </div>

      {step === 1 && <JobForm />}
      {step === 2 && <CompanyForm />}
      {step === 3 && (
        <h2 className="flex flex-col justify-center items-center h-full">
          Review
        </h2>
      )}

      <div className="gap-3 absolute bottom-0 border w-full flex justify-around">
        <button
          className={`border p-2 ${step === 1 ? "text-gray-600" : ""}`}
          onClick={handlePreStep}
        >
          Back
        </button>
        <button
          className={`border p-2 ${step === 3 ? "text-gray-600" : ""}`}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default OfferForm;