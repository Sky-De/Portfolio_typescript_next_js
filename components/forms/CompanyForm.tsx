import InputWrapper from "./InputWrapper";

const CompanyForm = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-2 mt-4">
      {/* <h2 className="border-b my-2">Company Form</h2> */}
      <InputWrapper title="your role" iconClass="bx-user">
        <input type="text" />
      </InputWrapper>
      <InputWrapper title="name" iconClass="bx-info-circle">
        <input type="text" />
      </InputWrapper>
      <InputWrapper title="email" iconClass="bx-envelope">
        <input type="email" />
      </InputWrapper>
      <InputWrapper title="time-zone" exteraStyle="hidden lg:flex" iconClass="bx-time">
        <input type="text" />
      </InputWrapper>
      <InputWrapper title="company-website / linkedin" iconClass="bx-world">
        <input type="text" />
      </InputWrapper>
    </form>
  );
}

export default CompanyForm;