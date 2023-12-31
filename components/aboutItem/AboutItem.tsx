"use client";
import { AboutProps } from "@/constants/aboutItems";
import React from "react";
import TextMarker from "../textMarker/TextMarker";
import {v4 as uuid} from "uuid";

const AboutItem = ({ desc, title, isOpan, handleClick }: AboutProps) => {
  return (
    <details className="" open={isOpan} onClick={handleClick}>
      <summary
        className={`apply__title apply__neon text-lg md:text-xl font-bold mb-[0.1rem] md:mb-1 text-center ${
          isOpan ? "border-heading-light dark:border-heading-dark" : ""
        }`}
      >
        {title}
      </summary>
      <ul className="list-disc flex flex-col gap-[1px]  sm:my-1 lg:my-3">
        {desc.length > 0 &&
          desc.map((item) => <TextMarker key={uuid()} text={item} />)}
      </ul>
    </details>
  );
};

export default AboutItem;
