"use client";
import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import TextMarker from "../textMarker/TextMarker";
import { AboutItemsData } from "@/constants/aboutItems";

const AboutItems: FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(1);
  return (
    <div className="h-[80vh] flex flex-col justify-evenly">
      <p role="alert">{selectedItemIndex}</p>
      <div className="flex flex-col gap-2 items-center md:items-start">
        {AboutItemsData &&
          AboutItemsData.map((item, index) => (
            <h3
              className={`cursor-pointer  text-2xl border-b-2 p-1 w-fit ${
                selectedItemIndex === index
                  ? "text-stepColor border-b-stepColor font-bold"
                  : "font-semibold"
              }`}
              key={uuid()}
              onClick={() => setSelectedItemIndex(index)}
            >
              {item.title}
            </h3>
          ))}
      </div>
      <ul className="list-disc flex flex-col gap-[1px] md:gap-3 sm:my-1 lg:my-3 h-[40svh] tall:mt-8">
        {AboutItemsData[selectedItemIndex].desc.length > 0 &&
          AboutItemsData[selectedItemIndex].desc.map((itemText) => (
            <li className="border-b-2 border-dashed pb-2 mb-1" key={uuid()}>
              <TextMarker text={itemText} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AboutItems;
