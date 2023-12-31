import React from 'react';

const Stepper = ({step = 1, isDone } :{ step:number, isDone:boolean }) => {
  return (
    <div className="steps stepper pb-6 apply__dashBorder--bot">
      <div className={`activeStep ${step > 1 ? "activeLine" : ""}`}>
        <p className="apply__mainColorOp text-white">
          {step > 1 ? <i className="bx bx-check "></i> : 1}
        </p>
        <h4 className="apply__stepperTitle">POSITION</h4>
      </div>

      <div
        className={`${step > 1 ? "activeStep" : ""} ${
          step > 2 ? "activeLine" : ""
        }`}
      >
        <p className="apply__mainColorOp text-white">
          {step > 2 ? <i className="bx bx-check "></i> : 2}
        </p>
        <h4 className="apply__stepperTitle">COMPANY</h4>
      </div>

      <div className={`${step > 2 ? "activeStep" : ""}`}>
        <p className="apply__mainColorOp text-white">
          {step > 3 && isDone ? <i className="bx bx-check text-red-50"></i> : 3}
        </p>
        <h4 className="apply__stepperTitle">SUBMIT</h4>
      </div>
    </div>
  );
}

export default Stepper;




