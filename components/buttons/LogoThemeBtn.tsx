"use client";
import { useState, useEffect, FC } from "react";
import { useTheme } from "next-themes";
import { ThemeBtnProps } from "@/types/allTypes";

export const LogoThemeBtn: FC<ThemeBtnProps> = ({ type }) => {
  // type for customizing btn in deffrent sizes
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <h1
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="logo flex items-center justify-center text-[3rem] px-1 cursor-pointer relative select-none"
    >
      DE{" "}
      <span className="inline-flex flex-col text-sm ml-1 font-bold">
        <span className="translate-y-[-3px] md:translate-y-[1px]">SIGN</span>
        <span className="translate-y-[1px] md:translate-y-[3px]">VELOP</span>
        <i
          className={`transition-transform absolute top-2 left-[95%] bx ${
            theme === "light"
              ? "animate-sunAnimation bx-sun text-black"
              : "animate-moonAnimation bxs-moon dark:text-white"
          }`}
        ></i>
      </span>
    </h1>
  );
};
