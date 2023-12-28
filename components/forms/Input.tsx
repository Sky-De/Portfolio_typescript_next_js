"use client";
import React, { FC, InputHTMLAttributes, useState } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CheckBox: FC<InputProps> = ({ label, ...props }) => { 
  const [isChecked, setIschecked] = useState<boolean>(false);
  const handleCheckBox = () => setIschecked(!isChecked);
  return(
  <div className="input__control flex gap-2 cursor-pointer select-none  text-heading-light dark:text-heading-dark" onClick={handleCheckBox}>
    <label className="cursor-pointer">{label}</label>
    <input className="cursor-pointer" checked={isChecked} type="checkbox" {...props} />
  </div>
);}




