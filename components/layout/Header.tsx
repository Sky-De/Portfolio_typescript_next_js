"use client";
import { useState } from "react";
import { ThemeBtn } from "../buttons/ThemeBtn";
import Link from "next/link";
import { NavItems } from "@/constants/navItems";
import { useAppSelector } from "@/hooks/reduxHooks";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentPath } = useAppSelector((state) => state.nav);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" header sticky top-0 w-ful after:bg-bg-secondary-light dark:after:bg-bg-secondary-dark z-30">
      <div className="header__content flex items-center h-full relative mx-auto px-2">
        <Link
          href="/#skills"
          className="logo flex items-center justify-center text-5xl px-1 cursor-pointer"
        >
          DE{" "}
          <span className="inline-flex flex-col text-sm ml-1 font-bold">
            <span>SIGN</span>
            <span>VELOP</span>
          </span>
        </Link>
        <ThemeBtn type="desktop" />
        {/* MOBILE NAV---------------------------- */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="absolute py-8 overflow-hidden bg-bg-secondary-light dark:bg-bg-secondary-dark w-full h-auto top-[100%] left-0 md:hidden flex flex-col items-center gap-2 z-20 "
            >
              {NavItems.map((item) => (
                <Link
                  onClick={() => {
                    const delayToClose = setTimeout(() => {
                      setIsOpen(false);
                    }, 800);
                    delayToClose;
                  }}
                  className={`apply__navItem ${
                    currentPath === item.name ? "active" : ""
                  }`}
                  href={item.path}
                  key={item.id}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeBtn type="mobile" />
            </motion.nav>
          )}
        </AnimatePresence>

        {/* !MOBILE NAV---------------------------- */}
        <nav className="hidden md:flex sm:items-center sm:ml-auto absolute right-0 bottom-[-6px] apply__nav z-10 drop-shadow-light dark:drop-shadow-dark">
          {NavItems.map((item) => (
            <Link
              className={`apply__navItem ${
                currentPath === item.name ? "active" : ""
              }`}
              href={item.path}
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Ham-------------- */}
        <div
          className={`apply__ham md:hidden ml-auto ${isOpen ? "active" : ""}`}
          onClick={handleClose}
        ></div>
      </div>
    </header>
  );
};

export default Header;
