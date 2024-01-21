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

const LayoutItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <ProjectImageModel />
      <ProjectFeaturesModel />
      <ContactModel />
      {children}
      <Footer />
    </>
  );
};

export default LayoutItems;
