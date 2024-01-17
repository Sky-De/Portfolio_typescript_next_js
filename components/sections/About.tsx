"use client";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { AboutItemsData } from "@/constants/aboutItems";
import { FC, useRef, useState } from "react";
import Image from "next/image";
import AboutItem from "../aboutItem/AboutItem";
import {
  fade_Animation_Props,
  fade_Scale_Animation_Props,
  slide_Right_Animation_Props,
} from "@/constants/animationProps";

const About: FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "About", ref: aboutRef });
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleItemClick = (
    index: number,
    e: React.MouseEvent<HTMLDetailsElement, MouseEvent>
  ) => {
    e.preventDefault(); // Prevents default open/close behavior
    setOpenIndex(index === openIndex ? openIndex : index);
  };
  return (
    <motion.section
      ref={aboutRef}
      {...fade_Animation_Props}
      id="about"
      className="section snap-start snap-always"
    >
      <div className="about flex flex-col items-center justify-evenly w-full md:flex-row-reverse">
        <motion.div
          {...fade_Scale_Animation_Props}
          className="hidden border md:grid place-content-center rounded-full"
        >
          <Image
            src="/avatar.jpg"
            alt="psk"
            width={150}
            height={150}
            className="mt-2 md:w-[250px] md:h-[250px] object-cover rounded-full"
          />
        </motion.div>
        <motion.div
          {...slide_Right_Animation_Props}
          className="about__content w-[350px] lg:w-[400px] h-[700px] max-w-full overflow-scroll my-4 flex flex-col lg:justify-center gap-1"
        >
          {AboutItemsData.map((item, i) => (
            <AboutItem
              key={uuid()}
              {...item}
              isOpan={i === openIndex}
              handleClick={(
                e: React.MouseEvent<HTMLDetailsElement, MouseEvent>
              ) => handleItemClick(i, e)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
