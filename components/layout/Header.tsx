"use client";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="header border header sticky top-0 w-full">
      <div className="header__content flex items-center border-2 border-red-500 h-full relative mx-auto px-2">
        <div className="logo">logo</div>
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
        <nav className="hidden sm:flex sm:items-center sm:ml-auto gap-2">
          <a href="#1">skyDe</a>
          <a href="#2">skills</a>
          <a href="#3">projects</a>
          <a href="#4">to learn</a>
          <a href="#5">contact</a>
          <a href="#6">about</a>
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
