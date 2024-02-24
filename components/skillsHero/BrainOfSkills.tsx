"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { setActiveSkill } from "@/redux/features/skill/skillSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { Brain_Of_Skills_Animation_Props } from "@/constants/animationProps";

const BrainOfSkill: FC = () => {
  const { currentSkill } = useAppSelector((state) => state.skill);

  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<SVGCircleElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    // console.log(target.id);
    //
    dispatch(setActiveSkill(target.id));
  };

  return (
    <>
      <motion.svg
        data-testid="con-svg"
        {...Brain_Of_Skills_Animation_Props}
        xmlns="http://www.w3.org/2000/svg"
        width="380.628"
        height="361.182"
        viewBox="0 0 380.628 361.182"
        className="p-2 w-[100%] sm:w-[70%] h-[40%] lg:h-[75%] tall:h-[40%] tall:my-auto"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#3e863d"></stop>
            <stop offset="1" stopColor="#6bbf46"></stop>
            <stop offset="1" stopColor="#549537"></stop>
            <stop offset="1" stopColor="#6bbf46"></stop>
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#3e863d"></stop>
            <stop offset="1" stopColor="#6bbf46"></stop>
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#6bbf46"></stop>
            <stop offset="0.661" stopColor="#6bbf46"></stop>
            <stop offset="1" stopColor="#3e863d"></stop>
          </linearGradient>
        </defs>
        <g id="final-v3" transform="translate(-123.036 -5.842)">
          <g
            id="structure"
            fill="none"
            stroke="#bdbdbd"
            strokeDasharray="2"
            strokeMiterlimit="10"
            strokeWidth="2"
            transform="translate(152.219 30.619)"
          >
            <path
              id="Path_162"
              d="M87.069 0L39.224 26.293 3.448 68.535 0 123.276l52.156 33.271 30.172 10.7 23.708 39.736 65.087 31.816s-9.775 20.345-7.464 35.6 14.06 38.276 14.06 38.276l50.3-52.753 60.776-34.052 37.931-58.621-10.346-51.732-19.827-55.6-62.073-44.831L156.031 0z"
              data-name="Path 162"
            ></path>
            <path
              id="Path_163"
              d="M3.448 65.518l53.449 15.086-56.9 42.673"
              data-name="Path 163"
            ></path>
            <path
              id="Path_164"
              d="M87.069 0l6.035 44.827L156.035 0v63.363l78.448-48.276-18.534 72.845 80.6-28.017-65.518 87.5 85.345-31.9"
              data-name="Path 164"
            ></path>
            <path
              id="Path_165"
              d="M326.725 167.242l-95.69-19.828 57.758 78.449-71.12-21.121 10.344 55.173-56.9-21.121-7.759-93.1-57.328 61.288 2.155-91.461L52.15 156.55l4.741-75.943-17.666-54.314L92.64 41.379l63.4 21.982 59.914 24.569 15.086 59.483"
              data-name="Path 165"
            ></path>
            <path
              id="Path_166"
              d="M171.121 238.794l46.552-34.052 13.362-57.328-67.672-1.724-55.173-30.172-51.293-34.914 36.206-35.772 15.086 70.69 47.845-52.156"
              data-name="Path 166"
            ></path>
            <path
              id="Line_3"
              d="M0 0L7.327 77.155"
              data-name="Line 3"
              transform="translate(156.036 68.534)"
            ></path>
            <path
              id="Path_167"
              d="M215.948 87.932l-52.587 57.759 54.311 59.052"
              data-name="Path 167"
            ></path>
          </g>
          <g
            id="PlaceHolders"
            fill="#c0c0bf"
            transform="translate(140.581 6.912)"
          >
            <circle
              id="Ellipse_56"
              cx="15.086"
              cy="15.086"
              r="15.086"
              data-name="Ellipse 56"
              transform="translate(83.621 8.621)"
            ></circle>
            <circle
              id="Ellipse_58"
              cx="15.086"
              cy="15.086"
              r="15.086"
              data-name="Ellipse 58"
              transform="translate(0 77.156)"
            ></circle>
            <circle
              id="Ellipse_58-2"
              cx="15.086"
              cy="15.086"
              r="15.086"
              data-name="Ellipse 58"
              transform="translate(33.621 38.794)"
            ></circle>
            <circle
              id="Ellipse_58-3"
              cx="15.086"
              cy="15.086"
              r="15.086"
              data-name="Ellipse 58"
              transform="translate(-5.379 134.996)"
            ></circle>
            <circle
              id="Ellipse_58-4"
              cx="15.086"
              cy="15.086"
              r="15.086"
              data-name="Ellipse 58"
              transform="translate(94.449 53.88)"
            ></circle>
          </g>
          <g id="skills" transform="translate(0 1)">
            <g id="Js" transform="translate(230.919 116.521)">
              <g id="con">
                <circle
                  id="back"
                  cx="27.461"
                  cy="27.461"
                  r="27.461"
                  fill="#fff"
                ></circle>
                <circle
                  id="border"
                  cx="25.877"
                  cy="25.877"
                  r="25.877"
                  fill="none"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  transform="translate(1.585 1.584)"
                ></circle>
              </g>
              <g
                id="js-2"
                fill="#f5ce0f"
                data-name="js"
                transform="translate(11.484 17.456)"
              >
                <path
                  id="Path_134"
                  d="M1051.841 273.822h4.321V288.9s.353 6.032-6.646 6.2a7.409 7.409 0 01-6.285-4.087l3.515-1.89a3.082 3.082 0 002.768 2.156c2.106 0 2.326-2.374 2.326-2.374z"
                  data-name="Path 134"
                  transform="translate(-1043.231 -273.509)"
                ></path>
                <path
                  id="Path_135"
                  d="M1073.03 279.115l3.419-2.209a7.532 7.532 0 00-6.5-3.479c-3.106.292-5.342 1.771-5.926 4.653-.5 5.305 3.591 6.875 3.591 6.875l3.289 1.541s2.521.652 2.4 2.693a2.793 2.793 0 01-3.349 2.02 5.3 5.3 0 01-3.822-2.694l-3.495 2.085s2.516 4.253 7.317 4.332c1.481.011 6.372-.046 7.756-4.938a7.292 7.292 0 00-4.555-7.319c-2.649-1.26-2.132-.5-3.96-1.812a2.035 2.035 0 01.759-3.737c1.546-.26 3.076 1.989 3.076 1.989z"
                  data-name="Path 135"
                  transform="translate(-1047.352 -273.425)"
                ></path>
              </g>
              <circle
                data-testid="js-circle"
                id="JS"
                cx="25.877"
                cy="25.877"
                r="25.877"
                fill="rgba(255,255,255,0)"
                stroke="#f5ce0f"
                strokeWidth="5"
                data-name="JS"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "JS" ? "active" : ""
                }`}
                transform="translate(1.617 1.557)"
              ></circle>
            </g>
            <g id="Sky" transform="translate(123.919 127.521)">
              <g id="con-2" data-name="con">
                <circle
                  id="back-2"
                  cx="27.461"
                  cy="27.461"
                  r="27.461"
                  fill="#fff"
                  data-name="back"
                ></circle>
                <circle
                  id="border-2"
                  cx="25.877"
                  cy="25.877"
                  r="25.877"
                  fill="none"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border"
                  transform="translate(1.585 1.584)"
                ></circle>
              </g>
              <g
                id="sky-2"
                fill="#1aaebb"
                fillRule="evenodd"
                data-name="sky"
                transform="translate(7.299 -23.679)"
              >
                <path
                  id="Path_233"
                  d="M110.976 41.466h4.371q-.014 3.5.027 6.994.61-1.94 1.284-3.852 1.831-.068 3.661.027-.916 2.815-1.749 5.656 1.129 4.247 2.24 8.5h-4.21q-.588-2.873-1.229-5.737-.041 2.869-.027 5.737h-4.371z"
                  data-name="Path 233"
                  opacity="0.994"
                  transform="translate(-95.229)"
                ></path>
                <path
                  id="Path_234"
                  d="M7.223 66.673a8.225 8.225 0 013.606.519 3.051 3.051 0 011.721 1.831 15.712 15.712 0 01.137 2.459h-3.88a13.9 13.9 0 00-.082-1.858.536.536 0 00-.6-.437.67.67 0 00-.546.328 2.507 2.507 0 00.109 1.858 3.858 3.858 0 00.574.519q1.216.677 2.459 1.311a6.921 6.921 0 011.667 1.284 3.718 3.718 0 01.6 2.022 7.754 7.754 0 01-.328 2.791 2.953 2.953 0 01-1.885 1.721 8.163 8.163 0 01-3.88.219A4.452 4.452 0 014.3 79.9a4.163 4.163 0 01-.656-2.186q-.041-.792-.027-1.585H7.5q-.014.929.027 1.858.059 1.116 1.12.738l.191-.191a3.5 3.5 0 00-.055-2.076 4.119 4.119 0 00-.628-.464 35.838 35.838 0 01-3.5-2.131 3.205 3.205 0 01-1.12-2.322 7.451 7.451 0 01.273-2.9 3.137 3.137 0 012.158-1.721q.634-.152 1.257-.247z"
                  data-name="Path 234"
                  opacity="0.993"
                  transform="translate(0 -22.311)"
                ></path>
                <path
                  id="Path_235"
                  d="M209.249 68.738q1.968-.027 3.934.055.716 4.64 1.393 9.289l.683-9.344h3.934q-.711 6.234-1.5 12.459a6.678 6.678 0 01-.656 2.35 2.808 2.808 0 01-1.885 1.229 9.442 9.442 0 01-1.421.164q-1.721.041-3.443.027-.014-1.148.027-2.295.64-.055 1.284-.137a.45.45 0 00.273-.437q-1.338-6.676-2.623-13.36z"
                  data-name="Path 235"
                  opacity="0.994"
                  transform="translate(-182.3 -24.157)"
                ></path>
              </g>
              <circle
                data-testid="sky-circle"
                id="SKY"
                cx="25.877"
                cy="25.877"
                r="25.877"
                fill="rgba(255,255,255,0)"
                stroke="#1baebb"
                strokeWidth="5"
                data-name="SKY"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "SKY" ? "active" : ""
                }`}
                transform="translate(1.617 1.557)"
              ></circle>
            </g>
            <g id="Webpack" transform="translate(181.917 166.162)">
              <g id="con-2-2" data-name="con-2">
                <circle
                  id="back-2-2"
                  cx="22.18"
                  cy="22.18"
                  r="22.18"
                  fill="#fff"
                  data-name="back-2"
                ></circle>
                <circle
                  id="border-2-2"
                  cx="20.901"
                  cy="20.901"
                  r="20.901"
                  fill="none"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-2"
                  transform="translate(1.28 1.28)"
                ></circle>
              </g>
              <g id="webpack-2" transform="translate(9.82 8.778)">
                <path
                  id="Path_110"
                  fill="#0062ad"
                  d="M1047.086 186.4l6.587-3.46 6.493 3.472-6.493 3.918z"
                  data-name="Path 110"
                  transform="translate(-1041.256 -177.392)"
                ></path>
                <path
                  id="Path_111"
                  fill="#0062ad"
                  d="M1046.315 188.627l6.569 3.8v6.838l-6.581-3.432z"
                  data-name="Path 111"
                  transform="translate(-1041.141 -178.228)"
                ></path>
                <path
                  id="Path_112"
                  fill="#0062ad"
                  d="M1055.7 192.131v7.134l6.524-3.444v-7.2z"
                  data-name="Path 112"
                  transform="translate(-1042.521 -178.226)"
                ></path>
                <path
                  id="Path_113"
                  fill="#73c4ef"
                  d="M1041.074 182.625l11.039-6.163v4.308l-7.479 3.956z"
                  data-name="Path 113"
                  transform="translate(-1040.373 -176.441)"
                ></path>
                <path
                  id="Path_114"
                  fill="#73c4ef"
                  d="M1040.29 197.727l-.038-12.649 3.77 2.09-.171 8.463z"
                  data-name="Path 114"
                  transform="translate(-1040.252 -177.706)"
                ></path>
                <path
                  id="Path_115"
                  fill="#73c4ef"
                  d="M1052.356 206.359l-11.282-5.7 3.572-2.409 7.461 3.989z"
                  data-name="Path 115"
                  transform="translate(-1040.373 -179.641)"
                ></path>
                <path
                  id="Path_116"
                  fill="#73c4ef"
                  d="M1066.783 200.818l-10.933 6.352-.073-4.308 7.412-4.083z"
                  data-name="Path 116"
                  transform="translate(-1042.533 -179.719)"
                ></path>
                <path
                  id="Path_117"
                  fill="#73c4ef"
                  d="M1068.518 185.184l.264 12.638-3.8-2.02.014-8.459z"
                  data-name="Path 117"
                  transform="translate(-1043.885 -177.722)"
                ></path>
                <path
                  id="Path_118"
                  fill="#73c4ef"
                  d="M1055.355 176.437l11.187 5.9-3.615 2.348-7.395-4.119z"
                  data-name="Path 118"
                  transform="translate(-1042.471 -176.437)"
                ></path>
              </g>
              <circle
                data-testid="webpack-circle"
                id="WEBPACK"
                cx="20.901"
                cy="20.901"
                r="20.901"
                fill="rgba(245,245,245,0)"
                stroke="#0062ad"
                strokeWidth="5"
                data-name="WEBPACK"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "WEBPACK" ? "active" : ""
                }`}
                transform="translate(1.319 1.248)"
              ></circle>
            </g>
            <g id="React" transform="translate(345.054 210.523)">
              <g id="con-3">
                <circle
                  id="back-3"
                  cx="24.839"
                  cy="24.839"
                  r="24.839"
                  fill="#d6d6d6"
                ></circle>
                <circle
                  id="border-3"
                  cx="23.406"
                  cy="23.406"
                  r="23.406"
                  fill="#fff"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  transform="translate(1.433 1.433)"
                ></circle>
              </g>
              <g id="react-2" transform="translate(8.888 7.85)">
                <g
                  id="_3"
                  fill="none"
                  data-name="3"
                  transform="translate(2.561 .056)"
                >
                  <ellipse
                    id="Ellipse_79"
                    cx="15.95"
                    cy="6.251"
                    data-name="Ellipse 79"
                    rx="15.95"
                    ry="6.251"
                    transform="rotate(-60 23.925 13.813)"
                  ></ellipse>
                  <ellipse
                    id="Ellipse_80"
                    cx="15.472"
                    cy="5.773"
                    stroke="#69c7dd"
                    strokeWidth="1"
                    data-name="Ellipse 80"
                    rx="15.472"
                    ry="5.773"
                    transform="rotate(-60 24.1 13.16)"
                  ></ellipse>
                </g>
                <g
                  id="_2"
                  fill="none"
                  data-name="2"
                  transform="translate(2.744)"
                >
                  <ellipse
                    id="Ellipse_81"
                    cx="6.254"
                    cy="15.957"
                    data-name="Ellipse 81"
                    rx="6.254"
                    ry="15.957"
                    transform="rotate(-28.999 11.722 3.032)"
                  ></ellipse>
                  <ellipse
                    id="Ellipse_82"
                    cx="5.776"
                    cy="15.479"
                    stroke="#69c7dd"
                    strokeMiterlimit="4.002"
                    strokeWidth="1"
                    data-name="Ellipse 82"
                    rx="5.776"
                    ry="15.479"
                    transform="rotate(-28.999 12.409 1.868)"
                  ></ellipse>
                </g>
                <g
                  id="_1"
                  fill="none"
                  data-name="1"
                  transform="translate(0 10.745)"
                >
                  <ellipse
                    id="Ellipse_83"
                    cx="15.95"
                    cy="6.251"
                    data-name="Ellipse 83"
                    rx="15.95"
                    ry="6.251"
                  ></ellipse>
                  <ellipse
                    id="Ellipse_84"
                    cx="15.472"
                    cy="5.773"
                    stroke="#69c7dd"
                    strokeWidth="1"
                    data-name="Ellipse 84"
                    rx="15.472"
                    ry="5.773"
                    transform="translate(.478 .478)"
                  ></ellipse>
                </g>
                <circle
                  id="center"
                  cx="3.344"
                  cy="3.344"
                  r="3.344"
                  fill="#9adff4"
                  transform="translate(12.615 13.262)"
                  style={{ isolation: "isolate" }}
                ></circle>
              </g>
              <circle
                data-testid="react-circle"
                id="REACT"
                cx="23.406"
                cy="23.406"
                r="23.406"
                fill="rgba(255,255,255,0)"
                stroke="#9adff4"
                strokeWidth="5"
                data-name="REACT"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "REACT" ? "active" : ""
                }`}
                transform="translate(1.472 1.401)"
              ></circle>
            </g>
            <g id="Tailwind" transform="translate(368.263 26.924)">
              <g id="con-4" fill="#fff">
                <circle id="back-4" cx="21.25" cy="21.25" r="21.25"></circle>
                <path
                  id="border-4"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  d="M21.249 1.225A20.024 20.024 0 111.225 21.249 20.024 20.024 0 0121.249 1.225z"
                ></path>
              </g>
              <g
                id="tailwind-2"
                fill="#1baebb"
                fillRule="evenodd"
                data-name="tailwind"
                transform="translate(6.54 12.309)"
              >
                <path
                  id="Path_230"
                  d="M258.017 163.131a9.505 9.505 0 016.975 1.52 38.643 38.643 0 003.219 3.04q3.828 1.95 6.438-1.52-1.738 6.608-8.763 5.812a9.261 9.261 0 01-3.04-1.073 25.235 25.235 0 01-3.756-3.4 4.54 4.54 0 00-6.349 1.163 6.84 6.84 0 015.276-5.542z"
                  data-name="Path 230"
                  transform="translate(-245.23 -163)"
                ></path>
                <path
                  id="Path_231"
                  d="M223.394 204.077a9.891 9.891 0 017.511 1.7 14.043 14.043 0 004.113 3.4 5.073 5.073 0 005.276-2.057 6.63 6.63 0 01-5.634 5.634 9.986 9.986 0 01-6.081-.894 25.247 25.247 0 01-3.756-3.4q-3.87-2.156-6.528 1.341a6.847 6.847 0 015.099-5.724z"
                  data-name="Path 231"
                  transform="translate(-218.297 -195.005)"
                ></path>
              </g>
              <circle
                data-testid="tailwind-circle"
                id="TAILWIND"
                cx="20.024"
                cy="20.024"
                r="20.024"
                fill="rgba(255,255,255,0)"
                stroke="#1baebb"
                strokeWidth="5"
                data-name="TAILWIND"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "TAILWIND" ? "active" : ""
                }`}
                transform="translate(1.335 1.725)"
              ></circle>
            </g>
            <g
              id="After_effect"
              data-name="After effect"
              transform="translate(451.408 125.956)"
            >
              <g id="con-5" fill="#fff" transform="translate(-2.898 -2.898)">
                <circle id="back-5" cx="20.089" cy="20.089" r="20.089"></circle>
                <circle
                  id="border-5"
                  cx="18.93"
                  cy="18.93"
                  r="18.93"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  transform="translate(1.159 1.159)"
                ></circle>
              </g>
              <g
                id="after_effect-2"
                fill="#bc9bc9"
                data-name="after effect"
                transform="translate(5.483 8.22)"
              >
                <path
                  id="Path_224"
                  d="M24.814-172.366c-.108.364-.809 2.522-1.551 4.827C20.688-159.57 20-157.4 20-157.17c0 .2.175.216 1.51.189l1.5-.04.243-.742c.135-.4.431-1.389.674-2.2l.431-1.443h5.03l.715 2.225.728 2.225h1.591a5.23 5.23 0 001.6-.121 8.946 8.946 0 00-.324-1.052c-.283-.8-1.928-5.839-4.221-12.891l-.645-1.98h-3.816zm2.468 3.438c.229.769.661 2.2.971 3.182a14 14 0 01.485 1.861c-.04.027-.917.04-1.955.027l-1.874-.04.823-2.832c.458-1.564.876-2.993.93-3.209a.764.764 0 01.135-.364 9.84 9.84 0 01.484 1.375z"
                  data-name="Path 224"
                  transform="translate(-20 173)"
                ></path>
                <path
                  id="Path_225"
                  d="M131.14-140.583a6.027 6.027 0 00-4.14 5.852 6.152 6.152 0 002.818 5.34c1.618.809 3.91.85 6.729.108.5-.121.58-.189.5-.431a29.36 29.36 0 01-.229-1c-.189-.8-.189-.8-1.389-.5a11.335 11.335 0 01-1.955.2 3.529 3.529 0 01-2.926-1.119c-.431-.5-.8-1.47-.647-1.712a25.942 25.942 0 013.924-.135h3.829v-.984c-.013-2.737-1.065-4.706-2.913-5.407a9.277 9.277 0 00-3.601-.212zm2.427 2.171a2.646 2.646 0 011.321 1.9l.094.512h-2.575a23.735 23.735 0 01-2.575-.067c0-.027.121-.378.27-.782a2.438 2.438 0 013.465-1.563z"
                  data-name="Path 225"
                  transform="translate(-112.572 145.033)"
                ></path>
              </g>
              <circle
                data-testid="ae-circle"
                id="AE"
                cx="18.93"
                cy="18.93"
                r="18.93"
                fill="rgba(255,255,255,0)"
                stroke="#bc9bc9"
                strokeWidth="5"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "AE" ? "active" : ""
                }`}
                transform="translate(-1.699 -1.77)"
              ></circle>
            </g>
            <g id="Html" transform="translate(345.153 93.056)">
              <g id="con-6">
                <circle
                  id="back-6"
                  cx="22.18"
                  cy="22.18"
                  r="22.18"
                  fill="#d6d6d6"
                ></circle>
                <circle
                  id="border-6"
                  cx="20.901"
                  cy="20.901"
                  r="20.901"
                  fill="#fff"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  transform="translate(1.28 1.28)"
                ></circle>
              </g>
              <g id="html-2" transform="translate(13.701 12.576)">
                <path
                  id="Path_171"
                  fill="#ef4923"
                  d="M878.74 249.113l.3-3.319h-16.959l.947 10.254h11.622l-.294 4.329-3.777 1.008-3.754-1.009-.3-2.845-3.38-.057.474 5.509 6.937 2.017 6.936-1.839.952-10.553-12.335.061-.176-3.441z"
                  data-name="Path 171"
                  transform="translate(-862.081 -245.794)"
                ></path>
              </g>
              <circle
                data-testid="html-circle"
                id="HTML"
                cx="20.901"
                cy="20.901"
                r="20.901"
                fill="rgba(255,255,255,0)"
                stroke="#ef4923"
                strokeWidth="5"
                data-name="HTML"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "HTML" ? "active" : ""
                }`}
                transform="translate(1.319 1.248)"
              ></circle>
            </g>
            <g id="Css" transform="translate(284.449 69.424)">
              <g id="con-7" fill="#fff">
                <circle id="back-7" cx="24.596" cy="24.596" r="24.596"></circle>
                <circle
                  id="border-7"
                  cx="23.177"
                  cy="23.177"
                  r="23.177"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  transform="translate(1.419 1.419)"
                ></circle>
              </g>
              <g id="css-2" transform="translate(14.744 12.463)">
                <path
                  id="Path_175"
                  fill="#4159a7"
                  d="M908.755 131.8h19.7l-1.349 21.416-8.4 2.852-8.815-2.852-.311-6.015h4.3v2.852l4.822 1.5 4.252-1.5.466-5.082h-9.54l-.207-4.407h9.748v-4.356h-14.666z"
                  data-name="Path 175"
                  transform="translate(-908.755 -131.801)"
                ></path>
              </g>
              <circle
                data-testid="css-circle"
                id="CSS"
                cx="23.177"
                cy="23.177"
                r="23.177"
                fill="rgba(255,255,255,0)"
                stroke="#4159a7"
                strokeWidth="5"
                data-name="CSS"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "CSS" ? "active" : ""
                }`}
                transform="translate(1.458 1.387)"
              ></circle>
            </g>
            <g id="Jest" transform="translate(230.271 54.227)">
              <g id="con-7-2" fill="#fff" data-name="con-7">
                <circle
                  id="back-7-2"
                  cx="20.602"
                  cy="20.602"
                  r="20.602"
                  data-name="back-7"
                ></circle>
                <circle
                  id="border-7-2"
                  cx="19.413"
                  cy="19.413"
                  r="19.413"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-7"
                  transform="translate(1.189 1.189)"
                ></circle>
              </g>
              <g
                id="JEST-2"
                fillRule="evenodd"
                data-name="JEST"
                transform="translate(10.649 10.365)"
              >
                <path
                  id="Path_237"
                  fill="#b1405d"
                  d="M117.5 34.5h10.667A49.99 49.99 0 01125.5 42q-1.4-2.392-2.667-4.833-1.272 2.294-2.417 4.667a.278.278 0 01-.417.083q-1.324-3.683-2.499-7.417z"
                  data-name="Path 237"
                  transform="translate(-110.178 -34.5)"
                ></path>
                <path
                  id="Path_238"
                  fill="#b1405f"
                  d="M141.833 64.477a.3.3 0 01.333.167l1.5 3a3.055 3.055 0 00-.667 1q-1.972.8-2.5-1.167z"
                  data-name="Path 238"
                  transform="translate(-129.345 -59.477)"
                ></path>
                <path
                  id="Path_239"
                  fill="#b1415e"
                  d="M79.909 85.5q2.829.078 1.75 2.667-2.732 1.385-2.667-1.667a2.664 2.664 0 01.917-1z"
                  data-name="Path 239"
                  transform="translate(-78.088 -77)"
                ></path>
                <path
                  id="Path_240"
                  fill="#b1415d"
                  d="M120.8 85.445q2.377-.165 2.083 2.167a1.553 1.553 0 01-1.583 1 1.607 1.607 0 01-1.417-2 1.958 1.958 0 01.917-1.167z"
                  data-name="Path 240"
                  transform="translate(-112.142 -76.945)"
                ></path>
                <path
                  id="Path_241"
                  fill="#b1405e"
                  d="M162.276 85.5q2.381.006 1.917 2.333-1.436 1.647-2.833 0a1.773 1.773 0 01.916-2.333z"
                  data-name="Path 241"
                  transform="translate(-146.621 -77)"
                ></path>
                <path
                  id="Path_242"
                  fill="#b1405d"
                  d="M85.393 97.5h1.833q.82 3.118 3.833 1.833a1.176 1.176 0 01.5 1.167 3.017 3.017 0 01-2.167 3.083q-2.076.443-4.167.833-2.78 1.182-5.5 2.5a5.162 5.162 0 01-4.667 0 4.355 4.355 0 01-1.25-4.75l1-2.333a1.08 1.08 0 01.75-.167 3.5 3.5 0 001.333 3.583 1.39 1.39 0 001.167.167 9.6 9.6 0 004.333-3.583 2.739 2.739 0 003.002-2.333z"
                  data-name="Path 242"
                  transform="translate(-73.571 -87)"
                ></path>
              </g>
              <circle
                data-testid="jest-circle"
                id="JEST"
                cx="19.413"
                cy="19.413"
                r="19.413"
                fill="rgba(255,255,255,0)"
                stroke="#b1405d"
                strokeWidth="5"
                data-name="JEST"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "JEST" ? "active" : ""
                }`}
                transform="translate(1.221 1.162)"
              ></circle>
            </g>
            <g id="Sass" transform="translate(282.419 5.951)">
              <g id="con-5-2" fill="#fff" data-name="con-5">
                <circle
                  id="back-5-2"
                  cx="24.668"
                  cy="24.668"
                  r="24.668"
                  data-name="back-5"
                ></circle>
                <circle
                  id="border-5-2"
                  cx="23.245"
                  cy="23.245"
                  r="23.245"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-5"
                  transform="translate(1.424 1.424)"
                ></circle>
              </g>
              <g
                id="sass-2"
                fill="#ca73ae"
                transform="translate(12.359 12.387)"
              >
                <path
                  id="Path_176"
                  d="M920.387 199.507V192.8h11.544v2.217H923v2.446h8.928v6.362l-11.544.269v-2.353h9.222v-2.228z"
                  data-name="Path 176"
                  transform="translate(-920.386 -192.796)"
                ></path>
                <path
                  id="Path_177"
                  d="M936.309 215.668v-6.711h11.544v2.217h-8.929v2.446h8.928v6.362l-11.544.269V217.9h9.222v-2.228z"
                  data-name="Path 177"
                  transform="translate(-923.237 -195.689)"
                ></path>
                <path
                  id="Path_178"
                  d="M920.387 215.668v-6.711h11.544v2.217H923v2.446h8.928v6.362l-11.544.269V217.9h9.222v-2.228z"
                  data-name="Path 178"
                  transform="translate(-920.386 -195.689)"
                ></path>
                <path
                  id="Subtraction_5"
                  d="M938.766 203.866h-2.456V192.8h11.383v11.067h-2.51V199.4h-6.416v4.47zm.116-8.811v2.445h6.339v-2.449z"
                  data-name="Subtraction 5"
                  transform="translate(-923.237 -192.796)"
                ></path>
              </g>
              <circle
                data-testid="sass-circle"
                id="SASS"
                cx="23.245"
                cy="23.245"
                r="23.245"
                fill="rgba(255,255,255,0)"
                stroke="#ca73ae"
                strokeWidth="5"
                data-name="SASS"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "SASS" ? "active" : ""
                }`}
                transform="translate(1.463 1.391)"
              ></circle>
            </g>
            <g id="Ai" transform="translate(426.789 76.245)">
              <g id="con-9" fill="#fff">
                <circle id="back-9" cx="16.81" cy="16.81" r="16.81"></circle>
                <circle
                  id="border-9"
                  cx="15.84"
                  cy="15.84"
                  r="15.84"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  transform="translate(.969 .97)"
                ></circle>
              </g>
              <g id="ai-2" transform="translate(8.883 9.88)">
                <path
                  id="Path_144"
                  fill="#f5841f"
                  d="M1236.15 254.782h-2.559l3.8-11.245h3.032l4.077 11.263-2.705-.019-.885-2.442-3.863-.024z"
                  data-name="Path 144"
                  transform="translate(-1233.591 -242.766)"
                ></path>
                <path
                  id="Path_145"
                  fill="#fff"
                  d="M1239.6 246.288l-1.375 4.058h2.757z"
                  data-name="Path 145"
                  transform="translate(-1234.271 -243.171)"
                ></path>
                <path
                  id="Rectangle_36"
                  fill="#f5841f"
                  d="M0 0H2.453V8.551H0z"
                  data-name="Rectangle 36"
                  transform="translate(11.884 3.483)"
                ></path>
                <ellipse
                  id="Ellipse_49"
                  cx="1.455"
                  cy="1.419"
                  fill="#f5841f"
                  data-name="Ellipse 49"
                  rx="1.455"
                  ry="1.419"
                  transform="translate(11.656)"
                ></ellipse>
              </g>
              <circle
                data-testid="ai-circle"
                id="AI"
                cx="15.84"
                cy="15.84"
                r="15.84"
                fill="rgba(255,255,255,0)"
                stroke="#f5841f"
                strokeWidth="5"
                data-name="AI"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "AI" ? "active" : ""
                }`}
                transform="translate(1.008 .938)"
              ></circle>
            </g>
            <g id="Xd" transform="translate(455.408 176.133)">
              <g id="con-10" fill="#fff">
                <circle
                  id="back-10"
                  cx="23.537"
                  cy="23.537"
                  r="23.537"
                ></circle>
                <circle
                  id="border-10"
                  cx="22.179"
                  cy="22.179"
                  r="22.179"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  transform="translate(1.358 1.358)"
                ></circle>
              </g>
              <g id="xd-2" transform="translate(13.9 17.303)">
                <path
                  id="Path_104"
                  fill="#d15a9b"
                  d="M1258.914 303.471h2.631v11.564a18.373 18.373 0 01-3.362.905c-.828 0-4.64.069-4.64-4.678s4.114-4.476 4.114-4.476l1.358.025z"
                  data-name="Path 104"
                  transform="translate(-1242.274 -303.471)"
                ></path>
                <path
                  id="Path_105"
                  fill="#fff"
                  d="M1258.986 309.492v4.373s-2.789.735-2.789-2.048 2.789-2.325 2.789-2.325z"
                  data-name="Path 105"
                  transform="translate(-1242.526 -304.039)"
                ></path>
                <path
                  id="Path_103"
                  fill="#d15a9b"
                  d="M1241.342 303.82h3.006l2.2 4.136 2.362-4.325h2.734l-3.325 5.923 3.651 6.161h-3.33l-2.282-4.35-2.362 4.35h-2.9l3.572-6.043-3.572-5.854z"
                  data-name="Path 103"
                  transform="translate(-1241.095 -303.486)"
                ></path>
              </g>
              <circle
                data-testid="xd-circle"
                id="XD"
                cx="22.179"
                cy="22.179"
                r="22.179"
                fill="rgba(255,255,255,0)"
                stroke="#d15a9b"
                strokeWidth="5"
                data-name="XD"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "XD" ? "active" : ""
                }`}
                transform="translate(1.397 1.326)"
              ></circle>
            </g>
            <g
              id="Node_js"
              data-name="Node js"
              transform="translate(236.199 210.541)"
            >
              <g id="con-10-2" fill="#fff" data-name="con-10">
                <circle
                  id="back-10-2"
                  cx="24.821"
                  cy="24.821"
                  r="24.821"
                  data-name="back-10"
                ></circle>
                <circle
                  id="border-10-2"
                  cx="23.389"
                  cy="23.389"
                  r="23.389"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-10"
                  transform="translate(1.432 1.432)"
                ></circle>
              </g>
              <g
                id="node_js-2"
                data-name="node js"
                transform="translate(11.957 9.967)"
              >
                <path
                  id="Path_212"
                  fill="url(#linear-gradient)"
                  d="M484.5 60.021l-4.287 7.428-8.576-14.854z"
                  data-name="Path 212"
                  transform="translate(-458.77 -52.595)"
                ></path>
                <path
                  id="Path_213"
                  fill="url(#linear-gradient-2)"
                  d="M530.51 99.865v14.854l-4.287-7.426z"
                  data-name="Path 213"
                  transform="translate(-504.784 -92.439)"
                ></path>
                <path
                  id="Path_214"
                  fill="url(#linear-gradient-3)"
                  d="M415.479 74.874L402.616 82.3l-8.576-14.852-4.287-7.428 12.863-7.426 8.576 14.854z"
                  data-name="Path 214"
                  transform="translate(-389.753 -52.595)"
                ></path>
                <path
                  id="Path_215"
                  fill="url(#linear-gradient-2)"
                  d="M394.04 107.293l-4.287 7.426V99.865z"
                  data-name="Path 215"
                  transform="translate(-389.753 -92.439)"
                ></path>
                <path
                  id="Path_216"
                  fill="url(#linear-gradient-2)"
                  d="M402.616 162l-12.863-7.428 4.287-7.426z"
                  data-name="Path 216"
                  transform="translate(-389.753 -132.291)"
                ></path>
              </g>
              <circle
                data-testid="node-circle"
                id="NODE"
                cx="23.389"
                cy="23.389"
                r="23.389"
                fill="rgba(255,255,255,0)"
                stroke="#46903e"
                strokeWidth="5"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "NODE" ? "active" : ""
                }`}
                transform="translate(1.471 1.4)"
              ></circle>
            </g>
            <g
              id="Mongo_db"
              data-name="Mongo db"
              transform="translate(307.787 316.533)"
            >
              <g
                id="con-10-3"
                fill="#fff"
                data-name="con-10"
                transform="translate(1.258 1.258)"
              >
                <circle
                  id="back-10-3"
                  cx="23.562"
                  cy="23.562"
                  r="23.562"
                  data-name="back-10"
                ></circle>
                <circle
                  id="border-10-3"
                  cx="22.203"
                  cy="22.203"
                  r="22.203"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-10"
                  transform="translate(1.359 1.359)"
                ></circle>
              </g>
              <g
                id="mongo_db-2"
                data-name="mongo db"
                transform="translate(133.524 141.147)"
              >
                <path
                  id="Path_223"
                  fill="#3e863d"
                  d="M12.245-107.5c-6.716 8.6-6.945 16.384-.681 23.23 1.622 1.752 1.882 2.239 2.109 3.731.292 2.271 1.006 2.239 1.265-.032.195-1.525.454-1.979 1.979-3.6A18.762 18.762 0 0021.4-92.9a15.735 15.735 0 00-1.33-8.793c-.714-1.622-5.354-8.306-5.743-8.306a30.6 30.6 0 00-2.082 2.499zm2.531 17.1c.26 5.029.227 6.911-.032 7.236-.324.389-.422.389-.811 0s-.389-1.46-.13-6.749c.195-3.472.389-6.814.389-7.43.097-2.047.26.029.584 6.943z"
                  data-name="Path 223"
                  transform="translate(-123 -20.9)"
                ></path>
              </g>
              <circle
                data-testid="mongodb-circle"
                id="MONGODB"
                cx="22.203"
                cy="22.203"
                r="22.203"
                fill="rgba(255,255,255,0)"
                stroke="#5fa241"
                strokeWidth="5"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "MONGODB" ? "active" : ""
                }`}
                transform="translate(2.657 2.585)"
              ></circle>
            </g>
            <g
              id="Next_js"
              data-name="Next js"
              transform="translate(357.428 267.7)"
            >
              <g id="con-10-4" fill="#fff" data-name="con-10">
                <circle
                  id="back-10-4"
                  cx="22.18"
                  cy="22.18"
                  r="22.18"
                  data-name="back-10"
                ></circle>
                <circle
                  id="border-10-4"
                  cx="20.901"
                  cy="20.901"
                  r="20.901"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-10"
                  transform="translate(1.28 1.28)"
                ></circle>
              </g>
              <g
                id="next_js-2"
                fill="#1a1818"
                stroke="#1a1818"
                strokeLinejoin="round"
                strokeWidth="2"
                data-name="next js"
                transform="translate(13.691 12.78)"
              >
                <path
                  id="Path_218"
                  d="M0 16.048V.713h2.139l14.446 21.439a.9.9 0 01-.285 1.28l-.407.244a.7.7 0 01-.935-.2L2.138 5.228v10.818z"
                  data-name="Path 218"
                ></path>
                <path
                  id="Path_219"
                  d="M15.717 13.552l-2.377-3.328V.005h2.377z"
                  data-name="Path 219"
                ></path>
              </g>
              <circle
                data-testid="next-circle"
                id="NEXT"
                cx="20.901"
                cy="20.901"
                r="20.901"
                fill="rgba(255,255,255,0)"
                stroke="#000"
                strokeWidth="5"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "NEXT" ? "active" : ""
                }`}
                transform="translate(1.319 1.248)"
              ></circle>
            </g>
            <g
              id="Express_js"
              data-name="Express js"
              transform="translate(299.389 249.912)"
            >
              <g
                id="con-10-5"
                fill="#fff"
                data-name="con-10"
                transform="translate(-2.909 -2.909)"
              >
                <circle
                  id="back-10-5"
                  cx="23.129"
                  cy="23.129"
                  r="23.129"
                  data-name="back-10"
                ></circle>
                <circle
                  id="border-10-5"
                  cx="21.794"
                  cy="21.794"
                  r="21.794"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-10"
                  transform="translate(1.334 1.334)"
                ></circle>
              </g>
              <g
                id="express_js-2"
                data-name="express js"
                transform="translate(6.561 12.726)"
              >
                <path
                  id="Path_221"
                  d="M54.662-146.433a6.666 6.666 0 00-4.325 5.068c-1.07 4.259.83 8.257 4.456 9.305a12.878 12.878 0 006.05-.2c.83-.306.874-.371.83-1.136a4.351 4.351 0 00-.131-.917 5.146 5.146 0 00-1.376.262c-4.085 1.07-7.339-.59-7.558-3.823l-.066-.983 5.089.044 5.068.022v-1.354a6.679 6.679 0 00-3.036-6.007 6.773 6.773 0 00-5.001-.281zm3.058 1.573a4.021 4.021 0 012.337 2.556c.481 1.682.7 1.595-3.691 1.595h-3.932l.131-.612a4.892 4.892 0 012.709-3.407 3.048 3.048 0 012.446-.132z"
                  data-name="Path 221"
                  transform="translate(-50.041 146.777)"
                ></path>
                <path
                  id="Path_222"
                  d="M115.218-145.891c0 .044 1 1.551 2.25 3.32s2.315 3.342 2.4 3.495a19.013 19.013 0 01-2.359 3.866c-1.376 1.966-2.512 3.648-2.512 3.713a3.567 3.567 0 001.311.131h1.332l1.595-2.468c.874-1.332 1.726-2.687 1.878-2.992.262-.5.306-.5.524-.131.131.218 1 1.573 1.922 2.992l1.682 2.6h2.883l-2.534-3.735a24.446 24.446 0 01-2.425-4c.044-.131 1.136-1.726 2.425-3.517l2.315-3.276-1.223-.066a2.91 2.91 0 00-1.551.2 25.648 25.648 0 00-1.878 2.752 21.7 21.7 0 01-1.682 2.446 27.7 27.7 0 01-1.878-2.709l-1.744-2.73h-1.354a4.228 4.228 0 00-1.377.109z"
                  data-name="Path 222"
                  transform="translate(-100.811 146.17)"
                ></path>
              </g>
              <circle
                data-testid="express-circle"
                id="EXPRESS"
                cx="21.794"
                cy="21.794"
                r="21.794"
                fill="rgba(255,255,255,0)"
                stroke="#000"
                strokeWidth="5"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "EXPRESS" ? "active" : ""
                }`}
                transform="translate(-1.535 -1.607)"
              ></circle>
            </g>
            <g id="Mui" transform="translate(364.951 159.775)">
              <g
                id="con-10-6"
                fill="#fff"
                data-name="con-10"
                transform="translate(-1.484 -1.484)"
              >
                <circle
                  id="back-10-6"
                  cx="20.69"
                  cy="20.69"
                  r="20.69"
                  data-name="back-10"
                ></circle>
                <circle
                  id="border-10-6"
                  cx="19.496"
                  cy="19.496"
                  r="19.496"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-10"
                  transform="translate(1.194 1.194)"
                ></circle>
              </g>
              <g id="mui-2" data-name="mui" transform="translate(6.782 10.47)">
                <path
                  id="Path_207"
                  fill="#1e9bd8"
                  d="M152.222 97.2v10.835l2.969 1.464v-6.791l6.3 3.375v-3.619z"
                  data-name="Path 207"
                  transform="translate(-152.222 -97.203)"
                ></path>
                <path
                  id="Path_208"
                  fill="#0070ba"
                  d="M270.479 111.524l6.214-3.649V97.2l-9.272 5.264v3.619l6.262-3.5.041 3.619-6.3 3.538z"
                  data-name="Path 208"
                  transform="translate(-258.15 -97.203)"
                ></path>
                <path
                  id="Path_209"
                  fill="#1e9bd8"
                  d="M273.643 256.675v3.556l-6.222-3.556v-3.619z"
                  data-name="Path 209"
                  transform="translate(-258.15 -240.513)"
                ></path>
                <path
                  id="Path_210"
                  fill="#0070ba"
                  d="M422.537 99.01v3.5l3.091-1.749V97.2z"
                  data-name="Path 210"
                  transform="translate(-400.782 -97.203)"
                ></path>
                <path
                  id="Path_211"
                  fill="#0070ba"
                  d="M354.08 185.487v7.105l-9.353 5.508v-3.557l6.262-3.619v-3.66z"
                  data-name="Path 211"
                  transform="translate(-329.234 -178.382)"
                ></path>
              </g>
              <circle
                data-testid="mui-circle"
                id="MUI"
                cx="19.496"
                cy="19.496"
                r="19.496"
                fill="rgba(255,255,255,0)"
                stroke="#1e9bd8"
                strokeWidth="5"
                data-name="MUI"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "MUI" ? "active" : ""
                }`}
                transform="translate(-.251 -.323)"
              ></circle>
            </g>
            <g id="Redux" transform="translate(420.515 237.884)">
              <g
                id="con-10-7"
                fill="#fff"
                data-name="con-10"
                transform="translate(-1.484 -1.484)"
              >
                <circle
                  id="back-10-7"
                  cx="20.69"
                  cy="20.69"
                  r="20.69"
                  data-name="back-10"
                ></circle>
                <circle
                  id="border-10-7"
                  cx="20.69"
                  cy="20.69"
                  r="20.69"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border-10"
                ></circle>
              </g>
              <g
                id="redux-2"
                fill="#6e54a4"
                data-name="redux"
                transform="translate(-19.649 201.315)"
              >
                <path
                  id="Path_227"
                  d="M67.648-194.346c-2.592.581-4.707 2.8-5.675 5.958a9.309 9.309 0 00-.372 3.5 11.332 11.332 0 001.341 6.077c.521 1.117.611 1.445.477 1.653-.462.745.417 2.145 1.49 2.339a1.84 1.84 0 002.041-2.085 2.017 2.017 0 00-1.773-1.579c-.3 0-.462-.164-.834-.849-2.458-4.573-1.281-11.291 2.279-12.989a5.116 5.116 0 014.6-.223 6.825 6.825 0 012.1 2.279 12.389 12.389 0 011.073 2.949c.089.417.194.506.715.655a3.562 3.562 0 01.76.253c.223.134-.045-1.683-.417-2.771a8.067 8.067 0 00-2.175-3.575 9.642 9.642 0 00-2.354-1.49 6.908 6.908 0 00-3.276-.102z"
                  data-name="Path 227"
                  transform="translate(-30.469)"
                ></path>
                <path
                  id="Path_228"
                  d="M90.543-142.591a1.714 1.714 0 00-1.043 1.624 1.722 1.722 0 001.966 1.817 1.358 1.358 0 001.058-.536l.551-.551 1.415.089a12.158 12.158 0 016.167 2.041c2.473 1.564 4.35 4.707 4.052 6.822a5.149 5.149 0 01-2.9 3.873 4.113 4.113 0 01-2.249.372 6.5 6.5 0 01-2.294-.313l-.894-.3-.641.521c-.357.3-.6.6-.536.655a7.392 7.392 0 003.56.834 6.846 6.846 0 005.809-2.1 4.828 4.828 0 001.564-3.947 8.207 8.207 0 00-3.009-6.331 16.179 16.179 0 00-2.234-1.773 13.991 13.991 0 00-6.688-1.892c-1.147 0-1.207-.015-1.609-.462a1.363 1.363 0 00-1.073-.521 2.581 2.581 0 00-.972.078z"
                  data-name="Path 228"
                  transform="translate(-54.213 -44.099)"
                ></path>
                <path
                  id="Path_229"
                  d="M28.242-114.555a7.42 7.42 0 00-2.442 5.585c.015 3.4 1.892 5.556 5.348 6.167a10.266 10.266 0 005.407-.641 12.515 12.515 0 006.956-5.9 1.471 1.471 0 01.909-.849 1.53 1.53 0 00.938-.953 1.323 1.323 0 00.134-1.177 1.838 1.838 0 00-2.4-1.236 1.8 1.8 0 00-.953 2.547c.253.521.253.566-.015 1.073a13.3 13.3 0 01-6.912 5.377 11.289 11.289 0 01-5.139-.015 4.961 4.961 0 01-2.532-2.488 3.542 3.542 0 01-.343-2.2 4.051 4.051 0 01.566-2.234 9.516 9.516 0 011.341-1.817l.819-.864-.149-.67a2.642 2.642 0 00-.253-.775c-.074-.063-.64.425-1.28 1.07z"
                  data-name="Path 229"
                  transform="translate(0 -67.115)"
                ></path>
              </g>
              <circle
                data-testid="redux-circle"
                id="REDUX"
                cx="20.69"
                cy="20.69"
                r="20.69"
                fill="rgba(255,255,255,0)"
                stroke="#6e54a4"
                strokeWidth="5"
                data-name="REDUX"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "REDUX" ? "active" : ""
                }`}
                transform="translate(-1.445 -1.516)"
              ></circle>
            </g>
            <g id="Git" transform="translate(187.199 91.056)">
              <g id="con-3-2" data-name="con">
                <circle
                  id="back-3-2"
                  cx="21.536"
                  cy="21.536"
                  r="21.536"
                  fill="#d6d6d6"
                  data-name="back"
                ></circle>
                <circle
                  id="border-3-2"
                  cx="20.294"
                  cy="20.294"
                  r="20.294"
                  fill="#fff"
                  stroke="#bdbdbd"
                  strokeWidth="3"
                  data-name="border"
                  transform="translate(1.242 1.242)"
                ></circle>
              </g>
              <g
                id="git-2"
                fill="#e1426a"
                data-name="git"
                transform="translate(14.693 11.183)"
              >
                <path
                  id="Path_119"
                  stroke="#e1426a"
                  strokeWidth="1"
                  d="M7.363 9.065l1.354-1.4 3.932 3.462-1.493 1.611"
                  data-name="Path 119"
                ></path>
                <path
                  id="Path_120"
                  stroke="#e1426a"
                  strokeWidth="1"
                  d="M11.215 12.78L7.436 9.118"
                  data-name="Path 120"
                ></path>
                <path
                  id="Path_121"
                  stroke="#e1426a"
                  strokeWidth="1"
                  d="M7.436 18.733V9.16"
                  data-name="Path 121"
                ></path>
                <path
                  id="Path_122"
                  stroke="#e1426a"
                  strokeWidth="1"
                  d="M7.46 18.563H5.341V9.118H7.46"
                  data-name="Path 122"
                ></path>
                <path
                  id="Path_123"
                  stroke="#e1426a"
                  strokeWidth="1"
                  d="M2.326-.001L0 1.809l1.533 1.4L3.974 5.44l1.347-1.066"
                  data-name="Path 123"
                ></path>
                <path
                  id="Path_124"
                  stroke="#e1426a"
                  strokeWidth="1"
                  d="M5.342 4.303L2.009.055"
                  data-name="Path 124"
                ></path>
                <g
                  id="Ellipse_19"
                  stroke="#fff"
                  strokeWidth="0.5"
                  data-name="Ellipse 19"
                  transform="translate(2.918 17.393)"
                >
                  <ellipse
                    cx="2.899"
                    cy="3.313"
                    stroke="none"
                    rx="2.899"
                    ry="3.313"
                  ></ellipse>
                  <ellipse
                    cx="2.899"
                    cy="3.313"
                    fill="none"
                    rx="2.649"
                    ry="3.063"
                  ></ellipse>
                </g>
                <g
                  id="Ellipse_20"
                  stroke="#fff"
                  strokeWidth="0.5"
                  data-name="Ellipse 20"
                  transform="translate(2.918 3.311)"
                >
                  <ellipse
                    cx="2.899"
                    cy="3.313"
                    stroke="none"
                    rx="2.899"
                    ry="3.313"
                  ></ellipse>
                  <ellipse
                    cx="2.899"
                    cy="3.313"
                    fill="none"
                    rx="2.649"
                    ry="3.063"
                  ></ellipse>
                </g>
                <g id="Path_125" data-name="Path 125">
                  <path
                    d="M3.313 6.377A3.067 3.067 0 01.25 3.313 3.067 3.067 0 013.313.25a3.067 3.067 0 013.064 3.063 3.067 3.067 0 01-3.064 3.064z"
                    transform="translate(10.373 9.938)"
                  ></path>
                  <path
                    fill="#fff"
                    d="M3.313.5A2.816 2.816 0 00.5 3.313a2.816 2.816 0 002.813 2.814 2.816 2.816 0 002.814-2.814A2.816 2.816 0 003.313.5m0-.5a3.313 3.313 0 110 6.627 3.313 3.313 0 010-6.627z"
                    transform="translate(10.373 9.938)"
                  ></path>
                </g>
              </g>
              <circle
                data-testid="git-circle"
                id="GIT"
                cx="20.294"
                cy="20.294"
                r="20.294"
                fill="rgba(255,255,255,0)"
                stroke="#e1426a"
                strokeWidth="5"
                data-name="GIT"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "GIT" ? "active" : ""
                }`}
                transform="translate(1.282 1.186)"
              ></circle>
            </g>
            <g id="Typescript" transform="translate(286.84 147.541)">
              <g id="con-4-2" fill="#fff" strokeWidth="3" data-name="con-4">
                <circle
                  id="back-typescript"
                  cx="32.039"
                  cy="32.039"
                  r="32.039"
                  stroke="#707070"
                  opacity="0.33"
                ></circle>
                <path
                  id="border-4-2"
                  stroke="#bdbdbd"
                  d="M32.038 1.848a30.19 30.19 0 11-30.19 30.19 30.19 30.19 0 0130.19-30.19z"
                  data-name="border-4"
                ></path>
              </g>
              <g
                id="typescript-2"
                data-name="typescript"
                transform="translate(10.506 18.983)"
              >
                <path
                  id="Path_232"
                  fill="#047bcc"
                  fillRule="evenodd"
                  d="M87.695 49.565a7.994 7.994 0 00-5.089 4.327 9.664 9.664 0 00.016 6.146c1.035 2.341 3.128 3.983 7.5 5.889a16.707 16.707 0 013.433 1.895 1.937 1.937 0 01.787 1.841 1.985 1.985 0 01-.663 1.763c-1.265 1.265-3.88 1.484-5.831.489a8.364 8.364 0 01-1.942-1.627l-1.017-1.155-2.1 1.256c-1.155.69-2.2 1.292-2.322 1.337-.5.187 1.977 3.114 3.433 4.048 4.07 2.612 10.6 2.415 13.815-.416a9.128 9.128 0 001.716-2.151c.563-1.068.631-1.445.631-3.53a7.048 7.048 0 00-.5-3.413c-1.075-2.325-3.383-4.077-7.826-5.94-2.764-1.159-3.93-2.207-3.93-3.534 0-2.668 3.546-3.438 5.472-1.187.528.617.933.9 1.169.806a29.857 29.857 0 003.973-2.71c.078-.126-.571-.952-1.443-1.834a7.336 7.336 0 00-2.752-2.015 15.271 15.271 0 00-6.536-.285m-30.543 1.5c-.082.866-.15 2.022-.151 2.568v.992h8.17v22.638h5.6V54.621h7.936v-5.135H57.3l-.149 1.576"
                  data-name="Path 232"
                  transform="translate(-57 -49.329)"
                ></path>
              </g>
              <circle
                data-testid="ts-circle"
                id="TS"
                cx="29.98"
                cy="29.98"
                r="29.98"
                fill="rgba(255,255,255,0)"
                stroke="#047bcc"
                strokeWidth="5"
                opacity="0.13"
                onClick={handleClick}
                className={`brainItem hover:opacity-100 ${
                  currentSkill === "TS" ? "active" : ""
                }`}
                transform="translate(2.118 1.639)"
              ></circle>
            </g>
          </g>
        </g>
      </motion.svg>
      <motion.span
        variants={{
          hide: { scale: 0.5, opacity: 0 },
          show: { scale: 1, opacity: 1 },
        }}
        initial="hide"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="text-body-light dark:text-body-dark font-bold opacity-75 text-sm"
      >
        <span className="lg:hidden italic">Tap on skills</span>
        <span className="hidden italic lg:inline-block tracking-wider">
          Click on skills
        </span>
      </motion.span>
    </>
  );
};

export default BrainOfSkill;
