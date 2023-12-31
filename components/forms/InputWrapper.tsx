import React, { ReactNode } from "react";

interface InputWrapperProps {
  title: string;
  iconClass?: string;
  children: ReactNode;
  exteraStyle?: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  title,
  iconClass="",
  exteraStyle,
  children,
}) => {
  return (
    <div
      className={`${
        exteraStyle && exteraStyle + " "
      }input-wrapper py-1 px-3 flex w-fll md:w-1/2  flex-col items-center lg:flex-row md:justify-between gap-2`}
    >
      <div className="input-header flex flex-col lg:flex-row gap-2 items-center p-1 rounded-sm">
        <i className={`bx ${iconClass} apply__mainColor wideOnly`}></i>
        <h3 className="capitalize font-semibold">{title}</h3>
      </div>
      <div className="input-content">{children}</div>
    </div>
  );
};

export default InputWrapper;
