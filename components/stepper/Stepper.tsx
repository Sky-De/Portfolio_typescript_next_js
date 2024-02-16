import React, { FC } from "react";

const Stepper: FC<{ step: number; isDone: boolean }> = ({
  step = 1,
  isDone,
}) => {
  return (
    <div
      data-testid="stepper"
      className="steps stepper pb-6 apply__dashBorder--bot"
    >
      <div className={`activeStep ${step > 1 ? "activeLine" : ""}`}>
        <p className=" text-white dark:text-white stepper__item">
          {step > 1 ? (
            <i data-testid="check-icon" className="bx bx-check "></i>
          ) : (
            1
          )}
        </p>
        <h4 className="apply__stepperTitle">POSITION</h4>
      </div>

      <div
        className={`${step > 1 ? "activeStep" : ""} ${
          step > 2 ? "activeLine" : ""
        }`}
      >
        <p className=" text-white dark:text-white stepper__item">
          {step > 2 ? (
            <i data-testid="check-icon" className="bx bx-check "></i>
          ) : (
            2
          )}
        </p>
        <h4 className="apply__stepperTitle">COMPANY</h4>
      </div>

      <div className={`${step > 2 ? "activeStep" : ""}`}>
        <p className=" text-white dark:text-white stepper__item">
          {step > 3 && isDone ? (
            <i data-testid="check-icon" className="bx bx-check text-red-50"></i>
          ) : (
            3
          )}
        </p>
        <h4 className="apply__stepperTitle">SUBMIT</h4>
      </div>
    </div>
  );
};

export default Stepper;
