"use client";
import Introduction from "@/components/sections/Intro";
import QuickIntro from "@/components/sections/QuickIntro";
import Skill from "@/components/sections/Skill";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
      video.play();
    }
  };
  return (
    <main className="main overflow-y-scroll snap-y snap-mandatory">
      <Introduction />
      <QuickIntro />
      <motion.section
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="projects"
        className="section snap-start snap-always"
      >
        projects
      </motion.section>
      <motion.section
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="learn"
        className="section snap-start snap-always"
      >
        to learn
      </motion.section>
      <motion.section
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="about"
        className="section snap-start snap-always"
      >
        about
      </motion.section>
      <motion.section
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="contact"
        className="section snap-start snap-always"
      >
        contact
      </motion.section>
    </main>
  );
}
