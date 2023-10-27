"use client";
import { motion, Variants } from "framer-motion";
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
      <motion.section
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        id="1"
        className="section snap-start snap-always border"
      >
        <video
          src="https://res.cloudinary.com/dxukz1zt5/video/upload/v1698421286/portfolio/ipn7ccnmpjl2umzt4nn7.mp4"
          controls
          onPlay={handlePlay}
          ref={videoRef}
        ></video>
      </motion.section>
      <motion.section
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        transition={{ duration: 0.5, delay: 0.5 }}
        id="2"
        className="section snap-start snap-always border"
      >
        skills
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
        id="3"
        className="section snap-start snap-always border"
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
        id="4"
        className="section snap-start snap-always border"
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
        id="5"
        className="section snap-start snap-always border"
      >
        contact
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
        id="6"
        className="section snap-start snap-always border"
      >
        about
      </motion.section>
    </main>
  );
}
