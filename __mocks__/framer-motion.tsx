import React from "react";
// refactore types - remove and use global type for same types

interface MotionSpanProps extends React.HTMLAttributes<HTMLElement> {
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}
interface MotionSvgProps extends React.SVGProps<SVGSVGElement> {
  variants?: any;
  initial?: any;
  whileInView?: any;
  transition?: any;
}
interface MotionDivProps extends React.HTMLAttributes<HTMLElement> {
  onClick: () => void;
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}
interface MotionFooterProps extends React.HTMLAttributes<HTMLElement> {
  variants?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}
interface MotionSectionProps extends React.HTMLAttributes<HTMLElement> {
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
  }: MotionSectionProps) => <section {...rest}>{children}</section>,
  svg: ({
    variants,
    initial,
    whileInView,
    transition,
    className,
    children,
    ...rest
  }: MotionSvgProps) => (
    <svg className={className} {...rest}>
      {children}
    </svg>
  ),
  span: ({
    variants,
    initial,
    whileInView,
    transition,
    className,
    children,
    ...rest
  }: MotionSpanProps) => (
    <span className={className} {...rest}>
      {children}
    </span>
  ),
  div: ({
    variants,
    onClick,
    initial,
    whileInView,
    transition,
    className,
    children,
    ...rest
  }: MotionDivProps) => (
    <div onClick={onClick} {...rest}>
      {children}
    </div>
  ),
};

// export const useInView = jest.fn();
// export const useInView = jest.mock("framer-motion", () => ({
//   useInView: jest.fn(() => ({ ref: {}, inView: true })),
// }));

export const useInView = jest
  .fn()
  .mockImplementation(() => ({ sectionRef: {}, inView: true }));
