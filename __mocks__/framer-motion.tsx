import React from "react";

interface MotionFooterProps extends React.HTMLAttributes<HTMLElement> {
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}
interface MotionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}
interface MotionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

interface MotionLiProps extends React.LiHTMLAttributes<HTMLLIElement> {
  iconClass: string;
  title: string;
  link: string;
  delay: number;
  areaTitle: string;
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
  li: ({
    iconClass,
    title,
    link,
    delay,
    areaTitle,
    variants,
    initial,
    whileInView,
    transition,
    className,
    children,
    ...rest
  }: MotionLiProps) => <li {...rest}>{children}</li>,
  footer: ({
    variants,
    initial,
    whileInView,
    transition,
    className,
    children,
    ...rest
  }: MotionFooterProps) => <footer {...rest}>{children}</footer>,
  header: ({
    variants,
    initial,
    whileInView,
    transition,
    className,
    children,
    ...rest
  }: MotionHeaderProps) => <header {...rest}>{children}</header>,
  section: ({
    variants,
    initial,
    whileInView,
    transition,
    className,
    children,
    ...rest
  }: MotionHeaderProps) => <section {...rest}>{children}</section>,
};
