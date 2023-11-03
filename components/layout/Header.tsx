"use client";
import { useState } from "react";
import { ThemeBtn } from "../buttons/ThemeBtn";
import Link from "next/link";
import { NavItems } from "@/constants/navItems";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setActiveNav } from "@/redux/features/nav/navSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentPath } = useAppSelector((state) => state.nav);
  const dispatch = useAppDispatch();
  return (
    <header className="header border header sticky top-0 w-ful">
      <div className="header__content flex items-center h-full relative mx-auto px-2">
        <div className="logo">logo</div>
        <ThemeBtn />
        {/* seprate component / reusable */}
        {isOpen && (
          <nav className="absolute border w-full h-auto top-[100%] sm:hidden flex flex-col items-center py-2 gap-2">
            <a href="#1">skyDe</a>
            <a href="#2">skills</a>
            <a href="#3">projects</a>
            <a href="#4">to learn</a>
            <a href="#5">contact</a>
            <a href="#6">about</a>
          </nav>
        )}
        <nav className="hidden sm:flex sm:items-center sm:ml-auto absolute right-0 bottom-[-6px] apply__nav">
          {NavItems.map((item) => (
            <Link
              onClick={() => dispatch(setActiveNav(item.name))}
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
        <div
          className="ham sm:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          Ham
        </div>
      </div>
    </header>
  );
};

export default Header;
