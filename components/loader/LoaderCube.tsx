import { FC } from "react";
import "./style.css";
const LoaderCube: FC = () => {
  return (
    <div className="loader m-auto">
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
    </div>
  );
};

export default LoaderCube;
