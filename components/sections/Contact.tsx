import { useIsInView } from "@/hooks/useIsInVeiw";
import { useRef } from "react";
import { motion } from "framer-motion";

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
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="contact"
      className="section snap-start snap-always"
    >
      Contact
    </motion.section>
  );
};

export default Contact;
