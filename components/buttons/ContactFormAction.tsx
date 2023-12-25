import React, { MouseEventHandler } from 'react';
type ContactFormActionProps = {
  step: number;
  handlePreStep: MouseEventHandler<HTMLButtonElement>;
  handleNextStep: MouseEventHandler<HTMLButtonElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
};

const ContactFormAction = ({step, handlePreStep, handleNextStep, handleSubmit}:ContactFormActionProps) => {
  return (
    <div className="gap-3 absolute bottom-0 w-full flex justify-around py-4">
      <button
        className={` dark:text-heading-light border p-2 ${
          step === 1 ? "text-gray-600" : "text-heading-dark"
        }`}
        onClick={handlePreStep}
      >
        Back
      </button>
      {step < 3 && (
        <button
          className={`dark:text-heading-light border p-2 ${
            step === 3 ? "text-gray-600" : "text-heading-dark"
          }`}
          onClick={handleNextStep}
        >
          Next
        </button>
      )}
      {step >= 3 && (
        <button
          className={`dark:text-heading-light border p-2 ${step === 4 ? "text-red-500" : ""}`}
          onClick={handleSubmit}
        >
          SEND
        </button>
      )}
    </div>
  );
}

export default ContactFormAction;