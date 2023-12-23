import React from 'react';

const Stepper = ({step = 1 } :{ step:number }) => {
    console.log(step);
  return (
    <div className="steps stepper">
      <div className={`activeStep ${step > 1 ? "activeLine" : ""}`}>
        <p className="apply__mainColorOp text-white">
          {step > 1 ? <i className="bx bx-check "></i> : 1}
        </p>
        <h4 className="hidden md:block">POSITION</h4>
      </div>

      <div
        className={`${step > 1 ? "activeStep" : ""} ${
          step > 2 ? "activeLine" : ""
        }`}
      >
        <p className="apply__mainColorOp text-white">
          {step > 2 ? <i className="bx bx-check "></i> : 2}
        </p>
        <h4 className="hidden md:block">COMPANY</h4>
      </div>

      <div className={`${step > 2 ? "activeStep" : ""}`}>
        <p className="apply__mainColorOp text-white">
          {step > 3 ? <i className="bx bx-check text-red-50"></i> : 3}
        </p>
        <h4 className="hidden md:block">SUBMIT</h4>
      </div>
    </div>
  );
}

export default Stepper;




