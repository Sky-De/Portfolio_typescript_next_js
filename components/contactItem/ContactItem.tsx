import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
type ContactItemProps = {
  iconClass: string;
  title: string;
  link: string;
  areaTitle: string;
  delay: number;
};

const ContactItem = ({
  iconClass,
  title,
  link,
  delay,
  areaTitle,
}: ContactItemProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="apply__contact--link font-bold"
      href={link}
      title={areaTitle}
    >
      <motion.li
        variants={{
          hide: { opacity: 0, x: -100 },
          show: { opacity: 1, x: 0 },
        }}
        initial="hide"
        whileInView="show"
        // viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.1 * delay }}
        className="apply__contact--item"
      >
        <i className={`bx ${iconClass}`}></i>
        {title}
      </motion.li>
    </Link>
  );
};

export default ContactItem;