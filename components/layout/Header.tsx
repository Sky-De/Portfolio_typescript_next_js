"use client";
import { useEffect, useState } from "react";
import { ThemeBtn } from "../buttons/ThemeBtn";
import Link from "next/link";
import { NavItems } from "@/constants/navItems";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setActiveNav } from "@/redux/features/nav/navSlice";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentPath } = useAppSelector((state) => state.nav);
  const te = useSearchParams();
  console.log(te);

  const dispatch = useAppDispatch();

  return (
    <header className=" header sticky top-0 w-ful after:bg-bg-secondary-light dark:after:bg-bg-secondary-dark z-30">
      <div className="header__content flex items-center h-full relative mx-auto px-2">
        <Link
          href="/"
          className="logo flex items-center justify-center text-5xl px-1 cursor-pointer"
        >
          DE{" "}
          <span className="inline-flex flex-col text-sm ml-1 font-bold">
            <span>SIGN</span>
            <span>VELOP</span>
          </span>
        </Link>
        <ThemeBtn type="desktop" />
        {/* seprate component / reusable */}
        {isOpen && (
          <motion.nav
            variants={{
              hide: { x: -100, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
            initial="hide"
            whileInView="show"
            viewport={{ amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="absolute py-8 bg-white dark:bg-black w-full h-auto top-[100%] md:hidden flex flex-col items-center gap-2 z-20 backdrop-blur-3xl bg-transparent dark:bg-transparent"
          >
            {NavItems.map((item) => (
              <Link
                // onClick={() => dispatch(setActiveNav(item.name))}
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
        <nav className="hidden md:flex sm:items-center sm:ml-auto absolute right-0 bottom-[-6px] apply__nav z-10 drop-shadow-light dark:drop-shadow-dark">
          {NavItems.map((item) => (
            <Link
              // onClick={() => dispatch(setActiveNav(item.name))}
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
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
