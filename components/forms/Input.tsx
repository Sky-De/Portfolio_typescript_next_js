"use client";
import { InputProps } from "@/types/allTypes";
import { FC, useState } from "react";

export const CheckBox: FC<InputProps> = ({
  label,
  checkBoxChangeHandler,
  ...props
}) => {
  const [isChecked, setIschecked] = useState<boolean>(false);
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIschecked(!isChecked);
    checkBoxChangeHandler(e);
  };
  return (
    <label className="input__control flex gap-2 cursor-pointer select-none  text-heading-light dark:text-heading-dark">
      {label}
      <input
        className="cursor-pointer accent-green-400 scale-150"
        checked={isChecked}
        type="checkbox"
        {...props}
        onChange={handleCheckBox}
      />
    </label>
  );
};
