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
      SKY
      <i
        data-testid="theme-icon"
        className={`transition-transform absolute top-2 left-[115%] bx ${
          theme === "light"
            ? "animate-sunAnimation bx-sun text-black"
            : "animate-moonAnimation bxs-moon dark:text-white"
        }`}
      ></i>
    </h1>
  );
};
