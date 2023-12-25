import ReactSlider from "react-slider";
import SalaryRangePicker from "../buttons/SalaryRangePicker";
import Input, { CheckBox } from "./Input";
import InputWrapper from "./InputWrapper";

const JobForm = () => {
     
  return (
    <form className="flex flex-col justify-center items-center gap-6 lg:gap-2 mt-4 ">
      {/* <h2 className="border-b border-b-red-700 my-2">Offer Form</h2> */}
      <InputWrapper title="type" iconClass="bx-time-five">
        <div className="flex gap-4 items-center">
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
          <span className="text-sm text-body-light dark:text-body-dark">$ Hourly</span>
        </div>
      </InputWrapper>
    </form>
  );
}

export default JobForm