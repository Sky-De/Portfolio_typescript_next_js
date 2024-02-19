"use client";
import React, { FC } from "react";
import "./style.css";

const ScrollDownIcon: FC = () => {
  return (
    <div className="absolute bottom-3 left-3 lg:bottom-5 lg:left-[50%]">
      <svg
        width="20px"
        height="60%"
        viewBox="0 0 247 390"
        version="1.1"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <path
          data-testid="wheel-path"
          id="wheel"
          d="M123.359,79.775l0,72.843"
          className="fill-none stroke-[30px] stroke-black dark:stroke-white"
        />
        <path
          data-testid="mouse-path"
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          className="fill-none stroke-[30px] stroke-black dark:stroke-white"
        />
      </svg>
    </div>
  );
};

export default ScrollDownIcon;
