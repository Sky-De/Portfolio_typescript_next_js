"use client";
import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import TextMarker from "../textMarker/TextMarker";
import { AboutItemsData } from "@/constants/aboutItems";
// import { motion } from "framer-motion";

const AboutItems: FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  return (
    <div className="h-[80vh] flex flex-col justify-evenly">
      <div className="flex flex-col gap-2 items-center md:items-start">
        {AboutItemsData &&
          AboutItemsData.map((item, index) => (
            <h3
              className={`cursor-pointer font-semibold text-2xl border-b-2 p-1 w-fit ${
                selectedItemIndex === index ? "text-red-700" : ""
              }`}
              key={uuid()}
              onClick={() => setSelectedItemIndex(index)}
            >
              {item.title}
            </h3>
          ))}
      </div>
      <div className="list-disc flex flex-col gap-[1px] md:gap-3 sm:my-1 lg:my-3 h-[40svh]">
        {AboutItemsData[selectedItemIndex].desc.length > 0 &&
          AboutItemsData[selectedItemIndex].desc.map((item) => (
            <TextMarker key={uuid()} text={item} />
          ))}
      </div>
    </div>
  );
};

export default AboutItems;
