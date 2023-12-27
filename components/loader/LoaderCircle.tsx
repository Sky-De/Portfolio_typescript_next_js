import React, { ReactNode } from "react";

interface LoaderCircleProps {
  children?: ReactNode;
}

const LoaderCircle: React.FC<LoaderCircleProps> = ({ children }) => {
  return (
    <div className="loaderCircle">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      {children}
    </div>
  );
};

export default LoaderCircle;
