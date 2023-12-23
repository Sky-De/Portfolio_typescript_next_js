"use client";
import { useState, useEffect, FC } from "react";
import { useTheme } from "next-themes";

type ThemeBtnProps = {
  type: "mobile" | "desktop";
};

export const LogoThemeBtn: FC<ThemeBtnProps> = ({ type }) => {
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
    <h1
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="logo flex items-center justify-center text-5xl px-1 cursor-pointer relative select-none"
    >
      DE{" "}
      <span className="inline-flex flex-col text-sm ml-1 font-bold">
        <span>SIGN</span>
        <span>VELOP</span>
        <i
          className={`absolute top-0 left-[100%] bx ${
            theme === "light" ? "bxs-moon text-black" : "bx-sun dark:text-white"
          }`}
        ></i>
      </span>
    </h1>
  );
};


