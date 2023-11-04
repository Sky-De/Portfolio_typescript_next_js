"use client";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Introduction from "@/components/sections/Intro";
import Learn from "@/components/sections/Learn";
import Projects from "@/components/sections/Projects";
import QuickIntro from "@/components/sections/QuickIntro";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <main className="main overflow-y-scroll snap-y snap-mandatory">
      <Introduction />
      <QuickIntro />
      <Projects />
      <Learn />
      <About />
      <Contact />
    </main>
  );
}
