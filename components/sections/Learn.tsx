import { useIsInView } from "@/hooks/useIsInVeiw";
import { useRef } from "react";
import { motion } from "framer-motion";

const Learn = () => {
  const learnRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Learn", ref: learnRef });
  return (
    <motion.section
      ref={learnRef}
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="learn"
      className="section snap-start snap-always"
    >
      Learn
    </motion.section>
  );
};

export default Learn;
