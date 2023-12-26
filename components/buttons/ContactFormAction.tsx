"use client";
import { useAppDispatch } from '@/hooks/reduxHooks';
import { closeContatctModel } from '@/redux/features/models/modelSlice';
import React, { MouseEventHandler } from 'react';
type ContactFormActionProps = {
  step: number;
  handlePreStep: MouseEventHandler<HTMLButtonElement>;
  handleNextStep: MouseEventHandler<HTMLButtonElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  captcha: string | null | undefined;
};

const ContactFormAction = ({step, captcha, handlePreStep, handleNextStep, handleSubmit}:ContactFormActionProps) => {
  const dispatch = useAppDispatch();
  const handleCloseModel = () => dispatch(closeContatctModel());
  return (
    <div className="formAction gap-3 absolute bottom-0 w-full flex justify-around py-4">
      {step < 4 && (
        <button
          disabled={step === 1 || captcha ? true: false}
          onClick={handlePreStep}
        >
          Back
        </button>
      )}
      {step < 3 && (
        <button
         
          onClick={handleNextStep}
        >
          Next
        </button>
      )}
      {step === 3 && (
        <button
          disabled={captcha ? false : true} 
          onClick={handleSubmit}
        >
          SEND
        </button>
      )}
      {step > 3 && (
        <button
          onClick={handleCloseModel}
        >
          close
        </button>
      )}
    </div>
  );
}

export default ContactFormAction;