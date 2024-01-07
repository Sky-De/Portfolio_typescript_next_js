export const slide_Up_Animation_Props = {
  variants: {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 0.8 },
};
export const short_Slide_Up_Animation_Props = {
  variants: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.5, delay: 0.5 },
};

export const slide_Down_Animation_Props = {
  variants: {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 0.8 },
};

export const slide_Left_Animation_Props = {
  variants: {
    hide: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0 },
  },
  initial: "hide",
  whileInView: "show",
  viewport: { amount: 0.3 },
  transition: { duration: 0.5, delay: 0.5 },
};
export const slide_Right_Animation_Props = {
  variants: {
    hide: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  },
  initial: "hide",
  whileInView: "show",
  transition: { duration: 0.5, delay: 0.5 },
};

export const fade_Animation_Props = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  transition: { duration: 0.5, delay: 0.25 },
};

export const fade_In_Veiw_Animation_Props = {
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  },
  initial: "hide",
  whileInView: "show",
  transition: { duration: 0.5, delay: 0.5 },
};

export const long_Fade_In_Veiw_Animation_Props = {
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  },
  initial: "hide",
  whileInView: "show",
  transition: { duration: 0.75, delay: 0.25 },
};

export const long_Fade_Animation_Props = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 1.5, delay: 1.25 },
};

export const fade_Up_Animation_Props = {
  variants: {
    hide: { opacity: 0, x: -100, y: 100 },
    show: { opacity: 1, x: 0, y: 0 },
  },
  initial: "hide",
  whileInView: "show",
};
export const fade_Scale_item_Animation_Props = {
  variants: {
    hide: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  },
  initial: "hide",
  whileInView: "show",
};

export const fade_Scale_Animation_Props = {
  variants: {
    hide: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  },
  initial: "hide",
  whileInView: "show",
  viewport: { amount: 0.8 },
  transition: { duration: 0.5, delay: 0.5 },
};

export const immediate_Fade_In_View_Animation_Props = {
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  },
  initial: "hide",
  whileInView: "show",
  viewport: { amount: 0.8 },
  transition: { duration: 0.5, delay: 0 },
};

export const Brain_Of_Skills_Animation_Props = {
  variants: {
    hide: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  },
  initial: "hide",
  whileInView: "show",
  viewport: { amount: 0.8 },
  transition: { duration: 0.75, delay: 0.25 },
};
