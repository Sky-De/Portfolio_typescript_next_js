"use client";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { useRef } from "react";
import { motion } from "framer-motion";
import ContactItem from "../contactItem/ContactItem";
import CallToActionBtn from "../buttons/CallToActionBtn";
import Image from "next/image";
import "./style.css";

const Contact = () => {
  const projectsRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Contact", ref: projectsRef });
  return (
    <motion.section
      ref={projectsRef}
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      // viewport={{ amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.5 }}
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
      <div className="w-full grid place-items-center">
        <Image
          title="https://storyset.com/job"
          className="hidden lg:block w-2/3 mx-auto"
          width={200}
          height={200}
          src="./Hiring.svg"
          alt="Hiring Svg"
        />
        <CallToActionBtn label="Scale your hiring" />
      </div>
    </motion.section>
  );
};

export default Contact;
