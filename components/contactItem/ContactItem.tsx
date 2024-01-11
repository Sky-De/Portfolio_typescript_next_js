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
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="apply__contact--link font-bold"
      href={link}
      title={areaTitle}
    >
      <motion.li
        variants={{
          hide: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
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
