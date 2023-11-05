"use client";
import { useState, useEffect, FC } from "react";
import { useTheme } from "next-themes";

type ThemeBtnProps = {
  type: "mobile" | "desktop";
};

export const ThemeBtn: FC<ThemeBtnProps> = ({ type }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`text-xs p-1  
      ${type === "desktop" ? "hidden md:block ml-8" : ""}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <i
        className={`bx ${
          theme === "light" ? "bx-moon text-black" : "bx-sun dark:text-white"
        }`}
      ></i>
    </button>
  );
};
