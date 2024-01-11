"use client";
import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { fade_In_Veiw_Animation_Props } from "@/constants/animationProps";
import CallToActionBtn from "../buttons/CallToActionBtn";
import ContactItem from "../contactItem/ContactItem";
import Image from "next/image";
import "./style.css";

const Contact: FC = () => {
  const projectsRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Contact", ref: projectsRef });
  return (
    <motion.section
      ref={projectsRef}
      {...fade_In_Veiw_Animation_Props}
      id="contact"
      className="section contactSection snap-start snap-always"
    >
      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold text-center lg:text-start">Connect Now</h3>
        <ContactItem
          areaTitle="link to my linkedin"
          delay={1}
          iconClass="bxl-linkedin-square"
          link="https://www.linkedin.com/in/sky-de-763248228"
          title="LinkedIn"
        />
        <ContactItem
          areaTitle="link to my github"
          delay={2}
          iconClass="bxl-github"
          link="https://github.com/Sky-De"
          title="Github"
        />
        <ContactItem
          areaTitle="link to my gmail"
          delay={3}
          iconClass="bxl-google"
          link="mailto:sky.de1991@gmail.com"
          title="Gmail"
        />
        <ContactItem
          areaTitle="link to my outlook"
          delay={4}
          iconClass="bx-mail-send"
          link="mailto:sky_de1991@outlook.com"
          title="Outlook"
        />
        <ContactItem
          areaTitle="link to my telegram"
          delay={5}
          iconClass="bxl-telegram"
          link="https://t.me/SkyDe1991"
          title="Telegram"
        />
      </div>
      <div className="m-4 font-light text-xl">OR</div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.75, delay: 0.5 }}
        viewport={{ amount: 1 }}
        className="w-full grid place-items-center"
      >
        <Image
          title="https://storyset.com/job"
          className="hidden lg:block w-2/3 mx-auto"
          width={200}
          height={200}
          src="./Hiring.svg"
          alt="Hiring Svg"
        />
        <CallToActionBtn label="Scale your hiring" />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
