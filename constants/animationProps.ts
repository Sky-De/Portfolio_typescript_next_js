export const slideUpAnimationProps = {
  variants: {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 0.8 },
};

export const slideDownAnimationProps = {
  variants: {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 0.8 },
};

export const fadeAnimationProps = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  transition: { duration: 0.5, delay: 0.25 },
};
