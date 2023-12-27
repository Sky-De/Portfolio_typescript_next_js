import { AboutProps } from "@/constants/aboutItems";
import React from "react";

const AboutItem = ({ desc, title, isOpan, handleClick }: AboutProps) => {
  return (
    <details className="" open={isOpan} onClick={handleClick}>
      <summary
        className={`text-xl md:text-2xl font-bold mb-1 ${
          isOpan ? "border-stepColor dark:border-stepColor" : ""
        }`}
      >
        {title}
      </summary>
      <p className={`text-body-light dark:text-body-dark text-sm ml-1 mb-1 first-letter:ml-1`}>
        {desc}
      </p>
    </details>
  );
};

export default AboutItem;
