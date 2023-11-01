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
        <h3 className="text-3xl lg:text-5xl font-bold mb-2">Quick Intro</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eos perferendis minima doloribus ex? Iure eveniet omnis sunt molestiae
          obcaecati nisi, beatae ut tempore non animi id. Nobis, quos obcaecati!
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
          src="https://res.cloudinary.com/dxukz1zt5/video/upload/v1698421286/portfolio/ipn7ccnmpjl2umzt4nn7.mp4"
          controls
        ></video>
      </div>
    </motion.section>
  );
};

export default QuickIntro;
