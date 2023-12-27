import { useRef, useState } from "react";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { motion } from "framer-motion";
import Image from "next/image";
import { AboutItemsData } from "@/constants/aboutItems";
import AboutItem from "../aboutItem/AboutItem";
import { v4 as uuid } from "uuid";

const About = () => {
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
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      animate="show"
      // whileInView="show"
      viewport={{ amount: 0.01 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="about"
      className="section snap-start snap-always"
    >
      <div className="about flex flex-col items-center justify-evenly w-full md:flex-row-reverse">
        <div className="about--image w-[250px] h-[250px] border grid place-content-center">
          <Image
            src="/avatar.jpg"
            alt="psk"
            width={250}
            height={250}
            className="about--image"
          />
        </div>
        <div className="about__content  w-[350px] h-[400px] max-w-full overflow-scroll my-4 flex flex-col gap-1">
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
        </div>
      </div>
    </motion.section>
  );
};

export default About;
