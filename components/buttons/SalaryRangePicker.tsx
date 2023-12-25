"use client";
import "./style.css";
import React, { useState } from 'react';
import ReactSlider from "react-slider";
import Slider from "react-slider";

const MIN = 100;
const MAX = 1000;
const SalaryRangePicker = () => {
  
  return (
      <ReactSlider
        className="slider border"
        thumbClassName="slider__thumb"
        trackClassName="slider__track"
        min={15}
        max={30}
        defaultValue={[22, 25]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={3}
        step={1}
      />
  );
}

export default SalaryRangePicker