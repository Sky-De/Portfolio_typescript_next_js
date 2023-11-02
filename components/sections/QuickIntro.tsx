"use clinet";
import { motion } from "framer-motion";
import { useRef } from "react";
const QuickIntro = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const requestFullScrennHandler = () => {
    if (vidRef.current) {
      vidRef.current.requestFullscreen();
    }
  };
  return (
    <motion.section
      variants={{
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hide"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      id="1"
      className="section snap-start snap-always w-full flex flex-col justify-evenly lg:flex-row lg:items-center p-2"
    >
      <div className="textContent text-center lg:text-start">
        <h3 className="text-3xl lg:text-5xl font-bold mb-6">Quick Intro</h3>
        <p className="w-full md:w-2/3">
          I am enthusiastic about utilizing any tool that can assist in
          achieving objectives in a suitable manner. In this video, I have used
          <span className="font-bold"> Adobe Illustrator</span> and{" "}
          <span className="font-bold"> Adobe After Effects</span> to produce a
          brief, enjoyable explanation of how I acquired knowledge in web
          development and who i am!
        </p>
      </div>
      <div className="mediaContent rounded-lg">
        <video
          className="rounded-lg"
          controlsList="nodownload"
          // design and add poster here--FIX
          // poster=""
          ref={vidRef}
          onPlay={requestFullScrennHandler}
          src="https://res.cloudinary.com/dxukz1zt5/video/upload/v1698935521/usjfr8feensbwisrgarw.mp4"
          controls
        ></video>
        <p className="mt-3 leading-7 text-center">
          <span className="bg-yellow-700 p-2 rounded-sm">Warning</span> This
          video contains music, so please be sure to adjust your volume
          accordingly.
        </p>
      </div>
    </motion.section>
  );
};

export default QuickIntro;
