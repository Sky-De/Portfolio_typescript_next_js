import { FC } from "react";
import { motion } from "framer-motion";
import { ContactItemProps } from "@/types/allTypes";
import Link from "next/link";

const ContactItem: FC<ContactItemProps> = ({
  iconClass,
  title,
  link,
  delay,
  areaTitle,
}) => {
  return (
    <motion.li
      variants={{
        hide: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 },
      }}
      initial="hide"
      whileInView="show"
      // viewport={{ amount: 0.8 }}
      transition={{ duration: 0.5, delay: 0.1 * delay }}
      className="apply__contact--link font-bold border"
    >
      <Link
        className="apply__contact--item"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        title={areaTitle}
      >
        <i className={`bx ${iconClass}`}></i>
        {title}
      </Link>
    </motion.li>
  );
};

export default ContactItem;
