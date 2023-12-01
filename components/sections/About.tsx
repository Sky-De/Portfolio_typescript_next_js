import { useRef } from "react";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "About", ref: aboutRef });
  return (
    <motion.section
      ref={aboutRef}
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="about"
      className="section snap-start snap-always"
    >
      <div className="about flex flex-col items-center justify-evenly w-full md:flex-row-reverse">
        <div className="about--image w-[350px] h-[350px] border grid place-content-center">
          <Image
            src="/avatar.jpg"
            alt="psk"
            width={350}
            height={350}
            className="about--image border"
          />
        </div>
        <div className="about__content border-2 border-blue-700 w-[350px] max-w-full h-[300px] "></div>
      </div>
    </motion.section>
  );
};

export default About;
