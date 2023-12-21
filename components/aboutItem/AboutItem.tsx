import { AboutProps } from "@/constants/aboutItems";
import React from "react";

const AboutItem = ({ desc, title }: AboutProps) => {
  return (
    <details className="" open={title.startsWith("Web") ? true : false}>
      <summary className="text-xl md:text-2xl font-bold mb-2">{title}</summary>
      <p className="text-body-light dark:text-body-dark text-sm">{desc}</p>
    </details>
  );
};

export default AboutItem;
