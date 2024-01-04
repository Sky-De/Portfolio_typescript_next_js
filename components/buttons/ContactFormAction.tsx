"use client";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { closeContatctModel } from "@/redux/features/models/modelSlice";
import { ContactFormActionProps } from "@/types/allTypes";
import { FC } from "react";
import "./style.css";

const ContactFormAction: FC<ContactFormActionProps> = ({
  step,
  captcha,
  handlePreStep,
  handleNextStep,
  handleSubmit,
  isLoading,
}) => {
  const dispatch = useAppDispatch();
  const handleCloseModel = () => dispatch(closeContatctModel());
  return (
    <div className="formAction border-t w-full apply__dashBorder--top gap-3 absolute bottom-0 flex  justify-between py-4 pt-5 px-4 lg:justify-around left-[50%] translate-x-[-50%]">
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
        <button
          disabled={captcha || isLoading ? false : true}
          onClick={handleSubmit}
        >
          Send
        </button>
      )}
      {step > 3 && (
        <button
          disabled={isLoading}
          className="mx-auto"
          onClick={handleCloseModel}
        >
          close
        </button>
      )}
    </div>
  );
};

export default ContactFormAction;
