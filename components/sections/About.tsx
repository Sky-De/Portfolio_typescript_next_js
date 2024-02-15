"use client";
import { motion } from "framer-motion";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { FC, useRef } from "react";
import Image from "next/image";
import {
  fade_In_Veiw_Animation_Props,
  fade_Scale_Animation_Props,
} from "@/constants/animationProps";
import AboutItems from "../aboutItems/AboutItems";

const About: FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "About", ref: aboutRef });
  return (
    <motion.section
      ref={aboutRef}
      id="about"
      className="section snap-start snap-always relative"
    >
      <span className="section__title">About</span>
      <div className="about flex flex-col items-center justify-evenly w-full md:flex-row-reverse tall:flex-col">
        <motion.div
          {...fade_Scale_Animation_Props}
          className="hidden border md:grid place-content-center rounded-full"
        >
          <Image
            loading="lazy"
            src="/avatar.jpg"
            alt="psk"
            width={150}
            height={150}
            className="mt-2 md:w-[250px] md:h-[250px] object-cover rounded-full"
          />
        </motion.div>
        <motion.div
          {...fade_In_Veiw_Animation_Props}
          className="about__content w-[350px] lg:w-[600px] h-[700px] max-w-full overflow-scroll my-4 flex flex-col lg:justify-center gap-1"
        >
          {/* FIX--change this name to AboutITems */}
          <AboutItems />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
