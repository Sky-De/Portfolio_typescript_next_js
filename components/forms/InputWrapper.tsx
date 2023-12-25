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
      }input-wrapper p-3 flex w-fll md:w-1/2  flex-col items-center lg:flex-row md:justify-between gap-2`}
    >
      <div className="input-header flex gap-2 items-center border p-1 rounded-sm">
        <i className={`icon bx ${iconClass} apply__mainColor`}></i>
        <h3 className="capitalize">{title}</h3>
      </div>
      <div className="input-content">{children}</div>
    </div>
  );
};

export default InputWrapper;
