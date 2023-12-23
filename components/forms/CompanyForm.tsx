import InputWrapper from "./InputWrapper";

const CompanyForm = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-2">
      <h2 className="border-b my-2">Company Form</h2>
      <InputWrapper title="your name">
        <input type="text" />
      </InputWrapper>
      <InputWrapper title="your role">
        <input type="text" />
      </InputWrapper>
      <InputWrapper title="your email">
        <input type="email" />
      </InputWrapper>
      <InputWrapper title="time-zone" exteraStyle="hidden md:flex">
        <input type="text" />
      </InputWrapper>
      <InputWrapper title="company-website">
        <input type="text" />
      </InputWrapper>
      <InputWrapper title="description">
        <textarea name="" id=""></textarea>
      </InputWrapper>
    </form>
  );
}

export default CompanyForm;