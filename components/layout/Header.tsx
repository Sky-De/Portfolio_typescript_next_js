"use client";
import "./style.css";
import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { NavItems } from "@/constants/navItems";
import { useAppSelector } from "@/hooks/reduxHooks";
import { LogoThemeBtn } from "../buttons/LogoThemeBtn";
import { motion, AnimatePresence } from "framer-motion";
import {
  fade_Animation_Props,
  slide_Down_Animation_Props,
} from "@/constants/animationProps";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentPath } = useAppSelector((state) => state.nav);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  // navigates to selected section and closes menu of mobile with delay
  const navAndCloseHandler = () => {
    const delayToClose = setTimeout(() => {
      setIsOpen(false);
    }, 800);
    delayToClose;
  };

  return (
    <motion.header
      data-testid="header"
      {...slide_Down_Animation_Props}
      className="header sticky top-0 w-ful after:bg-bg-secondary-light dark:after:bg-bg-secondary-dark z-30"
    >
      <div className="header__content flex items-center h-full relative mx-auto px-2">
        <LogoThemeBtn type="desktop" />
        {/* MOBILE NAV---------------------------- */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              {...fade_Animation_Props}
              className="absolute py-8 overflow-hidden bg-bg-secondary-light dark:bg-bg-secondary-dark w-full h-auto top-[100%] left-0 md:hidden flex flex-col items-center gap-2 z-20 "
            >
              {NavItems.map((item) => (
                <a
                  data-testid="desktop-navItem"
                  onClick={navAndCloseHandler}
                  className={`apply__navItem ${
                    currentPath === item.name ? "active" : ""
                  }`}
                  href={item.path}
                  key={uuid()}
                >
                  {item.name}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* !MOBILE NAV---------------------------- */}
        <nav className="hidden md:flex sm:items-center sm:ml-auto absolute right-0 bottom-[-6px] apply__nav z-10 drop-shadow-light dark:drop-shadow-dark">
          {NavItems.map((item) => (
            <a
              data-testid="mobile-navItem"
              className={`apply__navItem ${
                currentPath === item.name ? "active" : ""
              }`}
              href={item.path}
              key={uuid()}
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Ham-------------- */}
        <div
          className={`apply__ham md:hidden ml-auto ${isOpen ? "active" : ""}`}
          onClick={handleClose}
        ></div>
      </div>
    </motion.header>
  );
};

export default Header;
