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
  isLoading: boolean;
};

const ContactFormAction = ({
  step,
  captcha,
  handlePreStep,
  handleNextStep,
  handleSubmit,
  isLoading,
}: ContactFormActionProps) => {
  const dispatch = useAppDispatch();
  const handleCloseModel = () => dispatch(closeContatctModel());
  return (
    <div className="formAction gap-3 absolute bottom-0 flex  w-[85%] justify-between py-4 lg:w-[48%] left-[50%] translate-x-[-50%]">
      {step < 4 && (
        <button
          disabled={step === 1 || captcha ? true : false}
          onClick={handlePreStep}
        >
          Back
        </button>
      )}
      {step < 3 && <button onClick={handleNextStep}>Next</button>}
      {step === 3 && (
        <button disabled={captcha || isLoading ? false : true} onClick={handleSubmit}>
          SEND
        </button>
      )}
      {(step > 3 && !isLoading) && (
        <button className="mx-auto" onClick={handleCloseModel}>
          close
        </button>
      )}
    </div>
  );
};

export default ContactFormAction;