import {
  Dispatch,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  RefObject,
  SetStateAction,
} from "react";

// All types are here exept redux types that are defined within thier files

// contact section --------------------------------
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

// btns------------------
export type CloseBtnProps = {
  handleClick: () => void;
};

export type ThemeBtnProps = {
  type: "mobile" | "desktop";
};

// form and input---------------------
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checkBoxChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

// ---------------learn section

export type LearnItemProps = {
  index: number;
  item: string;
};

export type LearnListProps = {
  title: string;
  learnListItems: string[];
};

// message----------------------
export type MessageType = {
  type: "error" | "success";
  messagge: string;
};

// google
export type GoogleReCAPTCHAProps = {
  setCaptcha: Dispatch<SetStateAction<string | null | undefined>>;
};

// about--------------
export type AboutProps = {
  title: string;
  desc: string[];
  isOpan?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLDetailsElement, MouseEvent>) => void;
};

// skill--------------
export type skillsDetailsPops = {
  id: string;
  alt: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};

//--- hooks-------------
export interface FormSenderReturn {
  isLoading: boolean;
  isError: boolean;
  isSended: boolean;
  formData: FormDataState;
  setFormData: Dispatch<SetStateAction<FormDataState>>;
  sendForm: () => Promise<void>;
}

export type UseIsInViewProps = {
  ref: RefObject<HTMLElement>;
  navName: string;
};

export interface UseStepReturn {
  step: number;
  handleNextStep: () => void;
  handlePreStep: () => void;
  submitIsDone: () => void;
}

// ---project section
export type MockupProps = {
  mobileCoverUrl: string;
  tableCoverUrl: string;
  laptopCoverUrl: string;
};
