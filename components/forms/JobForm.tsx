import Input, { CheckBox } from "./Input";
import InputWrapper from "./InputWrapper";

const JobForm = () => {
     
  return (
    <form className="flex flex-col justify-center items-center gap-2">
      <h2 className="border-b border-b-red-700 my-2">Offer Form</h2>
      <InputWrapper title="role">
        <input type="text" name="" id="" />
      </InputWrapper>
      <InputWrapper title="type">
        <div className="flex gap-4">
          <CheckBox label="Part-time" />
          <CheckBox label="Full-time" />
          <CheckBox label="Contract" />
        </div>
      </InputWrapper>
      <InputWrapper title="description">
        <textarea name="" id=""></textarea>
      </InputWrapper>
      <InputWrapper title="salary range">
        <input type="range" />
      </InputWrapper>
    </form>
  );
}

export default JobForm