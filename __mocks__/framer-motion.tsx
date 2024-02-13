import React from "react";

interface MotionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

export const motion = {
  button: ({
    onClick,
    variants,
    initial,
    whileInView,
    viewport,
    transition,
    className,
    children,
    ...rest
  }: MotionButtonProps) => (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  ),
};
