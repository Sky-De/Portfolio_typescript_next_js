"use client";
import { slide_Up_Animation_Props } from "@/constants/animationProps";
import { motion } from "framer-motion";
import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <motion.footer
      {...slide_Up_Animation_Props}
      className="apply__footer mt-auto"
    >
      <Link
        aria-label="linkedin-link"
        href="https://www.linkedin.com/in/sky-de-763248228"
      >
        <i
          data-testid="footer-icon"
          className="bx bxl-linkedin-square apply__footer--item"
        ></i>
      </Link>
      <Link aria-label="email-link" href="mailto:sky.de1991@gmail.com">
        <i
          data-testid="footer-icon"
          className="bx bxl-google apply__footer--item"
        ></i>
      </Link>
      <Link aria-label="github-link" href="https://github.com/Sky-De">
        <i
          data-testid="footer-icon"
          className="bx bxl-github apply__footer--item"
        ></i>
      </Link>
    </motion.footer>
  );
};

export default Footer;
