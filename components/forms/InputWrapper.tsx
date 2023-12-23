import React, { ReactNode } from "react";

interface InputWrapperProps {
  title: string;
  svgIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  children: ReactNode;
  exteraStyle?: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  title,
  svgIcon: SvgIcon,
  exteraStyle,
  children,
}) => {
  return (
    <div
      className={`${
        exteraStyle && exteraStyle + " "
      }input-wrapper border p-2 flex w-fll md:w-2/5  flex-col items-center md:flex-row md:justify-between`}
    >
      <div className="input-header flex gap-2">
        <span className="icon">{SvgIcon && <SvgIcon />}icon</span>
        <h3>{title}</h3>
      </div>
      <div className="input-content">{children}</div>
    </div>
  );
};

export default InputWrapper;
