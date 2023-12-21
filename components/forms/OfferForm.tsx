import { useState } from "react";
import Input, { CheckBox } from "./Input";

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
    <section className="">
      <div className="steps">
        <div className={`activeStep`}>
          <p>1</p>
          <h4>JOB</h4>
        </div>
        <div className={`${step > 1 ? "activeStep" : ""}`}>
          <p>2</p>
          <h4>COMPANY</h4>
        </div>
        <div className={`${step > 2 ? "activeStep" : ""}`}>
          <p>3</p>
          <h4>SEND</h4>
        </div>
      </div>

      <div className="gap-3 flex border justify-between">
        <button className={`${step === 3 ? "text-gray-600" : ""}`} onClick={handleNextStep}>Next</button>
        <button className={`${step === 1 ? "text-gray-600" : ""}`} onClick={handlePreStep}>Back</button>
      </div>
    </section>
  );
}

export default OfferForm