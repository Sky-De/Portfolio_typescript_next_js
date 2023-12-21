"use client";
import React, { FC, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}


const Input: FC<InputProps> = ({ label, ...props }) => (
  <div className="input__control flex gap-2 cursor-pointer">
    <label>{label}</label>
    <input {...props} />
  </div>
);

export default Input;


export const CheckBox: FC<InputProps> = ({ label, ...props }) => { 
  const [isChecked, setIschecked] = useState<boolean>(false);
  const handleCheckBox = () => setIschecked(!isChecked);
  return(
  <div className="input__control flex gap-2 cursor-pointer select-none" onClick={handleCheckBox}>
    <label>{label}</label>
    <input checked={isChecked} type="checkbox" {...props} />
  </div>
);}


