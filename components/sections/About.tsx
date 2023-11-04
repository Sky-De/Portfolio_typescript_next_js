import { useRef } from "react";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { motion } from "framer-motion";

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
      About
    </motion.section>
  );
};

export default About;
