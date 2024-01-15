"use client";
import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { useIsInView } from "@/hooks/useIsInVeiw";
import { long_Fade_In_Veiw_Animation_Props } from "@/constants/animationProps";
import { QI_VIDEO_URL } from "@/constants/videos";

const QuickIntro: FC = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const qIntroRef = useRef<HTMLElement>(null);
  // checks and actives navItems depend on related sections
  useIsInView({ navName: "Q-Intro", ref: qIntroRef });
  const requestFullScrennHandler = () => {
    if (vidRef.current) {
      vidRef.current.requestFullscreen();
    }
  };

  return (
    <motion.section
      ref={qIntroRef}
      {...long_Fade_In_Veiw_Animation_Props}
      viewport={{ amount: 0.2 }}
      id="qintro"
      className="SECTION section snap-start snap-always w-full flex flex-col justify-evenly lg:flex-row lg:items-center p-2 "
    >
      <div className="textContent text-center lg:text-start mb-4 lg:mb-0">
        <h3 className="text-3xl lg:text-5xl font-bold mb-6">Quick Intro</h3>
        <p className="w-full mx-auto lg:mx-0 md:w-2/3 apply__body">
          I am enthusiastic about mastering and utilizing any tool that can
          assist in achieving objectives in a suitable manner. In this video, I
          have used
          <span className="font-bold text-black dark:text-white">
            {" "}
            Adobe Illustrator
          </span>{" "}
          and{" "}
          <span className="font-bold text-black dark:text-white">
            {" "}
            Adobe After Effects
          </span>{" "}
          to produce a brief, enjoyable explanation of how I acquired knowledge
          in web development and who i am, Enjoy!
        </p>
      </div>
      <div className="rounded-lg dark:border pb-3 bg-black">
        <video
          poster="./vidPoster.png"
          className="rounded-lg "
          controlsList="nodownload"
          ref={vidRef}
          onPlay={requestFullScrennHandler}
          src={QI_VIDEO_URL}
          controls
        ></video>
        <p className="mt-3 leading-7 text-center apply__body text-xs px-2 md:px-0">
          <span className="text-warning rounded-sm font-bold text-sm">
            Attention:{"  "}
          </span>
          {"  "}
          this video contains music, so please be sure to adjust your volume
          accordingly.
        </p>
      </div>
    </motion.section>
  );
};

export default QuickIntro;
