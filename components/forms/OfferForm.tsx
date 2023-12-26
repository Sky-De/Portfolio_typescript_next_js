import { CheckBox } from "./Input";
import Stepper from "../stepper/Stepper";
import ContactFromAction from "../buttons/ContactFormAction";
import InputWrapper from "./InputWrapper";
import ReactSlider from "react-slider";
import { useStep } from "@/hooks/useStep";
import { useState } from "react";
import GoogleReCAPTCHA from "../reCAPTCHA/GoogleReCAPTCHA";

export type FormDataState = {
  type: {
    partTime: boolean;
    fullTime: boolean;
    contract: boolean;
  };
  role: string;
  description: string;
  salaryRange: [number,number];
  userRole: string;
  userName: string;
  userEmail: string;
  timeZone: string;
  userWebsiteUrl: string;
};

const initialFormDataState: FormDataState = {
  type: {
    contract:false,
    fullTime:false,
    partTime:false
  },
  role: "",
  description: "",
  timeZone: "",
  userEmail: "",
  userName: "",
  userRole: "",
  userWebsiteUrl: "",
  salaryRange: [22, 25],
};

const OfferForm = () => {
  const { step, handleNextStep, handlePreStep, submitIsDone } = useStep();
  const [formData, setFormData] = useState<FormDataState>(initialFormDataState);
  const [captcha, setCaptcha] = useState<string | null>();
  
  const handleSliderChange = (newValue:any) => {
    setFormData({...formData, salaryRange: newValue});
  };

  const handleFormSubmit = () => {
    if(!captcha) return 
    submitIsDone();
    setFormData(initialFormDataState);
    console.log(formData);
  }
  
  const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   setFormData({...formData, [e.target.name] : e.target.value});
  }

  const checkBoxHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, type: {...formData.type ,[e.target.name] : e.target.checked}})
  }
  return (
    <section className="relative h-full my-auto border-2 flex flex-col">
      <Stepper step={step} />

      <form className="" onSubmit={handleFormSubmit}>
        {/* step ----------------------------------- 1 */}
        <div
          className={`flex flex-col justify-center items-center gap-6 lg:gap-2 mt-4 ${
            step !== 1 ? "hidden" : ""
          }`}
        >
          <InputWrapper title="type" iconClass="bx-time-five">
            <div className="flex gap-4 items-center flex-wrap justify-center">
              <CheckBox
                label="Part-time"
                name="partTime"
                onChange={checkBoxHandler}
              />
              <CheckBox
                label="Full-time"
                name="fullTime"
                onChange={checkBoxHandler}
              />
              <CheckBox
                label="Contract"
                name="contract"
                onChange={checkBoxHandler}
              />
            </div>
          </InputWrapper>

          <InputWrapper title="role" iconClass="bx-laptop">
            <input
              type="text"
              name="role"
              id=""
              value={formData.role}
              onChange={handelChange}
            />
          </InputWrapper>

          <InputWrapper title="description" iconClass="bx-message-square-dots">
            <textarea
              name="description"
              id=""
              value={formData.description}
              onChange={handelChange}
            ></textarea>
          </InputWrapper>

          <InputWrapper
            title="salary range"
            iconClass="bx-dollar-circle"
            exteraStyle="hidden lg:flex"
          >
            <div className="flex flex-row-reverse items-center">
              <ReactSlider
                className="slider border"
                thumbClassName="slider__thumb"
                trackClassName="slider__track"
                onChange={handleSliderChange}
                value={formData.salaryRange}
                min={15}
                max={30}
                defaultValue={[20, 50]}
                ariaLabel={["Lower thumb", "Upper thumb"]}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
                pearling
                minDistance={3}
                step={1}
              />
              <span className="text-sm text-body-light dark:text-body-dark">
                $ Hourly
              </span>
            </div>
          </InputWrapper>
        </div>

        {/* step ----------------------------------- 2 */}
        <div
          className={`flex flex-col justify-center items-center gap-3 lg:gap-2 mt-4 ${
            step !== 2 ? "hidden" : ""
          }`}
        >
          <InputWrapper title="your role" iconClass="bx-user">
            <input
              type="text"
              name="userRole"
              value={formData.userRole}
              onChange={handelChange}
            />
          </InputWrapper>

          <InputWrapper title="name" iconClass="bx-info-circle">
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handelChange}
            />
          </InputWrapper>

          <InputWrapper title="email" iconClass="bx-envelope">
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handelChange}
            />
          </InputWrapper>

          <InputWrapper
            title="time-zone"
            exteraStyle="hidden lg:flex"
            iconClass="bx-time"
          >
            <input
              type="text"
              name="timeZone"
              value={formData.timeZone}
              onChange={handelChange}
            />
          </InputWrapper>

          <InputWrapper title="company-website / linkedin" iconClass="bx-world">
            <input
              type="text"
              name="userWebsiteUrl"
              value={formData.userWebsiteUrl}
              onChange={handelChange}
            />
          </InputWrapper>
        </div>

        {/* step ----------------------------------- 3 */}
        <div
          className={`flex flex-col justify-center items-center gap-6 lg:gap-2 mt-4 ${
            step !== 3 ? "hidden" : ""
          }`}
        >
          
          <GoogleReCAPTCHA setCaptcha={setCaptcha}/>
        </div>
      </form>
      {
        step > 3 && (
          <h2 className="text-center font-bold my-auto">Thanks for submition, i will make sure to respond</h2>
        ) 
      }

      <ContactFromAction
        handleNextStep={handleNextStep}
        handlePreStep={handlePreStep}
        handleSubmit={handleFormSubmit}
        step={step}
        captcha={captcha}
      />
    </section>
  );
}

export default OfferForm;