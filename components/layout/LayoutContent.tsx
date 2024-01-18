"use client";
import React, { useEffect, useState } from "react";
import LoaderCube from "../loader/LoaderCube";
import {
  ContactModel,
  Footer,
  Header,
  ProjectFeaturesModel,
  ProjectImageModel,
} from "..";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  // pre loading for 700ms
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-[100svh] grid place-items-center">
          <LoaderCube />
        </div>
      ) : (
        <div className="h-screen flex flex-col">
          <Header />
          <ProjectImageModel />
          <ProjectFeaturesModel />
          <ContactModel />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default LayoutContent;
