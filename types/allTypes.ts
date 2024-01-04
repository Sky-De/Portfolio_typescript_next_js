import { InputHTMLAttributes, MouseEventHandler, ReactNode } from "react";




export type ContactFormActionProps = {
  step: number;
  handlePreStep: MouseEventHandler<HTMLButtonElement>;
  handleNextStep: MouseEventHandler<HTMLButtonElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  captcha: string | null | undefined;
  isLoading: boolean;
};

export type ContactItemProps = {
  iconClass: string;
  title: string;
  link: string;
  areaTitle: string;
  delay: number;
};


export type CloseBtnProps = {
  handleClick: () => void;
};

export type ThemeBtnProps = {
  type: "mobile" | "desktop";
};


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface InputWrapperProps {
  title: string;
  iconClass?: string;
  children: ReactNode;
  exteraStyle?: string;
}



export type FormDataState = {
  type: {
    partTime: boolean;
    fullTime: boolean;
    contract: boolean;
  };
  role: string;
  description: string;
  salaryRange: [number, number];
  userRole: string;
  userName: string;
  userEmail: string;
  timeZone: string;
  userWebsiteUrl: string;
};


export const initialFormDataState: FormDataState = {
  type: {
    contract: false,
    fullTime: false,
    partTime: false,
  },
  role: "",
  description: "",
  timeZone: "",
  userEmail: "",
  userName: "",
  userRole: "",
  userWebsiteUrl: "",
  salaryRange: [23, 32],
};
