"use client";
import { InputProps } from "@/types/allTypes";
import { FC, useState } from "react";

export const CheckBox: FC<InputProps> = ({ label, ...props }) => {
  const [isChecked, setIschecked] = useState<boolean>(false);
  const handleCheckBox = () => setIschecked(!isChecked);
  return (
    <div
      className="input__control flex gap-2 cursor-pointer select-none  text-heading-light dark:text-heading-dark"
      onClick={handleCheckBox}
    >
      <label className="cursor-pointer">{label}</label>
      <input
        className="cursor-pointer"
        checked={isChecked}
        type="checkbox"
        {...props}
      />
    </div>
  );
};
