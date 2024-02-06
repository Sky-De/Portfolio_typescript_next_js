"use client";
import { useStep } from "@/hooks/useStep";
import { FC, useState } from "react";
import { useFormSender } from "@/hooks/useFormSender";
import { CheckBox } from "./Input";
import { FormDataState, initialFormDataState } from "@/types/allTypes";
import ContactFromAction from "../buttons/ContactFormAction";
import InputWrapper from "./InputWrapper";
import ReactSlider from "react-slider";
import GoogleReCAPTCHA from "../reCAPTCHA/GoogleReCAPTCHA";
import LoaderCube from "../loader/LoaderCube";
import Message from "../message/Message";
import Stepper from "../stepper/Stepper";
import "./style.css";

const OfferForm: FC = () => {
  const [captcha, setCaptcha] = useState<string | null>();
  const { step, handleNextStep, handlePreStep, submitIsDone } = useStep();
  const { isError, isLoading, isSended, sendForm, formData, setFormData } =
    useFormSender();

  const handleSliderChange = (newValue: any) => {
    setFormData({ ...formData, salaryRange: newValue });
    console.log(formData);
  };

  const handleFormSubmit = () => {
    if (!captcha) return;
    // console.log(formData);

    sendForm();
    submitIsDone();
    setFormData(initialFormDataState);
  };

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      type: { ...formData.type, [e.target.name]: e.target.checked },
    });
  };
  return (
    <section className="relative h-full flex flex-col rounded-sm model__shadow">
      <Stepper step={step} isDone={isSended} />

      <form className="pt-4 pb-6" onSubmit={handleFormSubmit}>
        {/* step ----------------------------------- 1 */}
        <div
          className={`flex flex-col justify-center items-center mt-2 ${
            step !== 1 ? "hidden" : ""
          }`}
        >
          <em className="text-lg mb-4 apply__mainColor lg:hidden">
            ** About Positon **
          </em>
          <InputWrapper title="type" iconClass="bx-time-five">
            <div className="flex gap-4 items-center flex-wrap justify-center">
              <CheckBox
                checkBoxChangeHandler={checkBoxHandler}
                label="Part-time"
                name="partTime"
                onChange={() => console.log("dsd")}
                key={"part-time"}
              />
              <CheckBox
                checkBoxChangeHandler={checkBoxHandler}
                label="Full-time"
                name="fullTime"
                onChange={checkBoxHandler}
                key={"full-time"}
              />
              <CheckBox
                checkBoxChangeHandler={checkBoxHandler}
                label="Contract"
                name="contract"
                onChange={checkBoxHandler}
                key={"contract"}
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

          <InputWrapper
            title="description"
            iconClass="bx-message-square-dots"
            exteraStyle=""
          >
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
                max={40}
                // defaultValue={[20, 50]}
                ariaLabel={["Lower thumb", "Upper thumb"]}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => {
                  // key extracted to prevent key spreed warning
                  const { key, ...otherProps } = props;
                  return (
                    <div key={key} {...otherProps}>
                      {state.valueNow}
                    </div>
                  );
                }}
                pearling
                minDistance={4}
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
          className={`flex flex-col justify-center items-center gap-1 lg:gap-2 mt-0 lg:mt-4 ${
            step !== 2 ? "hidden" : ""
          }`}
        >
          <em className="text-lg mb-4 apply__mainColor lg:hidden">
            ** About Company **
          </em>
          <InputWrapper title="your role" iconClass="bx-user">
            <input
              type="text"
              name="userRole"
              value={formData.userRole}
              onChange={handelChange}
            />
          </InputWrapper>

          <InputWrapper title="name" iconClass="bx-info-circle" exteraStyle="">
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
          <GoogleReCAPTCHA setCaptcha={setCaptcha} />
        </div>
      </form>
      {step > 3 && (
        <>
          {isLoading && (
            <div className="flex flex-col items-center h-[200px]">
              <p className="font-semibold">Submitting</p>
              <LoaderCube />
            </div>
          )}

          {isSended && (
            <Message
              type="success"
              messagge="Form submitted successfully, i will make sure to respond, thanks!"
            />
          )}
          {isError && (
            <Message
              type="error"
              messagge="Check your connection and try again!"
            />
          )}
        </>
      )}

      <ContactFromAction
        handleNextStep={handleNextStep}
        handlePreStep={handlePreStep}
        handleSubmit={handleFormSubmit}
        step={step}
        captcha={captcha}
        isLoading={isLoading}
      />
    </section>
  );
};

export default OfferForm;
