import { slide_Up_Animation_Props } from "@/constants/animationProps";
import { motion } from "framer-motion";
import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <motion.footer {...slide_Up_Animation_Props} className="apply__footer">
      <Link href="https://www.linkedin.com/in/sky-de-763248228">
        <i className="bx bxl-linkedin-square apply__footer--item"></i>
      </Link>
      <Link href="mailto:sky.de1991@gmail.com">
        <i className="bx bxl-google apply__footer--item"></i>
      </Link>
      <Link href="https://github.com/Sky-De">
        <i className="bx bxl-github apply__footer--item"></i>
      </Link>
    </motion.footer>
  );
};

export default Footer;
