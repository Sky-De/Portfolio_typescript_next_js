import { ProjectState } from "@/redux/features/projects/projectSlice";
import AeIcon from "@/public/skillIcons/Ae.svg";
import AiIcon from "@/public/skillIcons/Ai.svg";
import CssIcon from "@/public/skillIcons/Css.svg";
import ExpressIcon from "@/public/skillIcons/Express.svg";
import GitIcon from "@/public/skillIcons/Git.svg";
import HtmlIcon from "@/public/skillIcons/Html.svg";
import JestIcon from "@/public/skillIcons/Jest.svg";
import JsIcon from "@/public/skillIcons/Js.svg";
import MongodbIcon from "@/public/skillIcons/Mongodb.svg";
import MuiIcon from "@/public/skillIcons/Mui.svg";
import NextIcon from "@/public/skillIcons/Next.svg";
import NodeIcon from "@/public/skillIcons/Node.svg";
import ReactIcon from "@/public/skillIcons/React.svg";
import SassIcon from "@/public/skillIcons/Sass.svg";
import TsIcon from "@/public/skillIcons/Ts.svg";
import WebpackIcon from "@/public/skillIcons/Webpack.svg";
import XdIcon from "@/public/skillIcons/Xd.svg";
import ReduxIcon from "@/public/skillIcons/Redux.svg";


export type MockupProps = {
  mobileCoverUrl: string;
  tableCoverUrl: string;
  laptopCoverUrl: string;
};


export const projectsData: ProjectState[] = [
  {
    id: 1,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "CRUD operation for user",
      "email auth",
      "google auth",
      "another thibng",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1702644156/portfolio/snzsm8fzun5sqlunes5j.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1702643661/portfolio/jldvgrexoc8lj8apgu2e.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1702644156/portfolio/lwwqbjdffjy0eon7mqaj.png",
    },
    techIcons: [
      ReduxIcon,
      AeIcon,
      AiIcon,
      CssIcon,
      ExpressIcon,
      GitIcon,
      HtmlIcon,
    ],
    otherTechs: ["nivo-charts", "calendar"],
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [HtmlIcon, CssIcon, JsIcon, ReactIcon, MuiIcon, GitIcon],
    otherTechs: ["nivo-charts", "calendar"],
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 4,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 5,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 7,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 8,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 9,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 10,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 11,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 12,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 13,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
  {
    id: 14,
    title: "Admin Dashboard",
    description:
      "this is ... admin dashboard with charts and some other UI features like calander for plan and so on",
    features: [
      "Light/Dark mode",
      "representing data within Data Grid",
      "another thibng",
    ],
    images: {
      mobileCoverUrl: "",
      tableCoverUrl: "",
      laptopCoverUrl: "",
    },
    techIcons: [AeIcon, AiIcon, CssIcon],
    otherTechs: ["test", "anotehr"],
  },
];
