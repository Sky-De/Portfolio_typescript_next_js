"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { openImageModel } from "@/redux/features/models/modelSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { fade_In_Veiw_Animation_Props } from "@/constants/animationProps";
import "./style.scss";
import { MockupProps } from "@/types/allTypes";

const Mockup: FC<MockupProps> = ({
  laptopCoverUrl,
  mobileCoverUrl,
  tableCoverUrl,
}) => {
  const dispatch = useAppDispatch();
  return (
    <motion.section
      data-testid="section"
      {...fade_In_Veiw_Animation_Props}
      className="h-auto md:w-2/3 w-full flex items-center gap-2 mt-8"
    >
      {/* Mobile SVG */}
      <svg
        data-testid="svg-mobile"
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="667"
        viewBox="0 0 375 667"
        className="frame__mobile--con frame"
        onClick={() => dispatch(openImageModel({ imageUrl: mobileCoverUrl }))}
      >
        <defs>
          <pattern
            id="mobileImage"
            patternUnits="userSpaceOnUse"
            width="375"
            height="667"
          >
            <image href={mobileCoverUrl} x="0" y="0" width="375" height="667" />
          </pattern>
        </defs>
        <g
          fill="none"
          className="frame__mobile--item "
          // stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          data-name="Rectangle 1"
        >
          <path stroke="none" d="M0 0H375V667H0z"></path>
          <path d="M7.5 7.5H367.5V659.5H7.5z" fill="url(#mobileImage)"></path>
        </g>
      </svg>

      {/* Tablet SVG */}
      <svg
        data-testid="svg-tablet"
        xmlns="http://www.w3.org/2000/svg"
        width="820"
        height="1180"
        viewBox="0 0 820 1180"
        className="frame__tablet--con frame"
        onClick={() => dispatch(openImageModel({ imageUrl: tableCoverUrl }))}
      >
        <defs>
          <pattern
            id="tabletImage"
            patternUnits="userSpaceOnUse"
            width="820"
            height="1180"
          >
            <image href={tableCoverUrl} x="0" y="0" width="820" height="1180" />
          </pattern>
        </defs>
        <g
          fill="none"
          className="frame__tablet--item"
          // stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="15"
          data-name="Rectangle 1"
        >
          <path stroke="none" d="M0 0H820V1180H0z"></path>
          <path d="M7.5 7.5H812.5V1172.5H7.5z" fill="url(#tabletImage)"></path>
        </g>
      </svg>

      {/* Laptop SVG */}
      <svg
        data-testid="svg-laptop"
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="869"
        viewBox="0 0 1920 869"
        className="frame__laptop--con frame min-w-[70%]"
        onClick={() => dispatch(openImageModel({ imageUrl: laptopCoverUrl }))}
      >
        <defs>
          <pattern
            id="laptopImage"
            patternUnits="userSpaceOnUse"
            width="1920"
            height="869"
          >
            <image
              href={laptopCoverUrl}
              x="0"
              y="0"
              width="1920"
              height="869"
            />
          </pattern>
        </defs>
        <g
          fill="none"
          className="frame__laptop--item"
          // stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="15"
          data-name="Rectangle 1"
        >
          <path stroke="none" d="M0 0H1920V869H0z"></path>
          <path d="M7.5 7.5H1912.5V861.5H7.5z" fill="url(#laptopImage)"></path>
        </g>
      </svg>
    </motion.section>
  );
};

export default Mockup;
