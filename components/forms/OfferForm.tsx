import { CheckBox } from "./Input";
import Stepper from "../stepper/Stepper";
import ContactFromAction from "../buttons/ContactFormAction";
import InputWrapper from "./InputWrapper";
import ReactSlider from "react-slider";
import { useStep } from "@/hooks/useStep";

const OfferForm = () => {
  const {step, handleNextStep, handlePreStep, handleSubmit} = useStep();
   
  return (
    <section className="relative h-full my-auto border-2 flex flex-col border-green-900">
      <Stepper step={step} />

      <form className="">
        <div
          className={`flex flex-col justify-center items-center gap-6 lg:gap-2 mt-4 ${
            step !== 1 ? "hidden" : ""
          }`}
        >
          <InputWrapper title="type" iconClass="bx-time-five" >
            <div className="flex gap-4 items-center flex-wrap justify-center">
              <CheckBox label="Part-time" />
              <CheckBox label="Full-time" />
              <CheckBox label="Contract" />
            </div>
          </InputWrapper>
          <InputWrapper title="role" iconClass="bx-laptop">
            <input type="text" name="" id="" />
          </InputWrapper>
          <InputWrapper title="description" iconClass="bx-message-square-dots">
            <textarea name="" id=""></textarea>
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

        <div
          className={`flex flex-col justify-center items-center gap-6 lg:gap-2 mt-4 ${
            step !== 2 ? "hidden" : ""
          }`}
        >
          <InputWrapper title="your role" iconClass="bx-user">
            <input type="text" />
          </InputWrapper>
          <InputWrapper title="name" iconClass="bx-info-circle">
            <input type="text" />
          </InputWrapper>
          <InputWrapper title="email" iconClass="bx-envelope">
            <input type="email" />
          </InputWrapper>
          <InputWrapper
            title="time-zone"
            exteraStyle="hidden lg:flex"
            iconClass="bx-time"
          >
            <input type="text" />
          </InputWrapper>
          <InputWrapper title="company-website / linkedin" iconClass="bx-world">
            <input type="text" />
          </InputWrapper>
        </div>


        <div
          className={`flex flex-col justify-center items-center gap-6 lg:gap-2 mt-4 ${
            step !== 3 ? "hidden" : ""
          }`}
        >
          dskfj
        </div>

        
      </form>


      <ContactFromAction
        handleNextStep={handleNextStep}
        handlePreStep={handlePreStep}
        handleSubmit={handleSubmit}
        step={step}
      />
    </section>
  );
}

export default OfferForm;