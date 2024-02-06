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
import TailwindIcon from "@/public/skillIcons/Tailwind.svg";

export const projectsData: ProjectState[] = [
  {
    id: 1,
    title: "Book Share (MERN)",
    description:
      "BookShare is a personalized app for book lovers. Connect with others and share your thoughts on your favorite reads. Click the demo to join the community!",
    features: [
      "Fully Responsive",
      "Dark-light mode",
      "Stunning design",
      "Auth ( Email / Google )",
      "Email Verification",
      "Create / Edit / delete post",
      "Like / Unlike Post",
      "BookMark / Unbookmark Post",
      "Profile page",
      "Profile setting page",
      "Edit user image / name",
      "Feedback section",
      "Delete user",
      "Pagination",
      "Breadcrumb navigation",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705588789/portfolio/projects-images/BookShare/ilwsmu7idkhbpejutb6m.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705588789/portfolio/projects-images/BookShare/fu2ix4bk31tml5owg9u0.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705588789/portfolio/projects-images/BookShare/kcxm09azc7ibrwzcrhja.png",
    },
    techIcons: [
      TsIcon,
      ReactIcon,
      ReduxIcon,
      NodeIcon,
      ExpressIcon,
      MongodbIcon,
      GitIcon,
    ],
    otherTechs: ["axios", "nodeMailer", "cors", "JWT", "bcrypt", "..."],
    repoUrl: "https://github.com/Sky-De/typescript_mern_app",
    liveUrl: "https://book-share-app-skyde.netlify.app/",
  },
  {
    id: 2,
    title: "2D Web Game",
    description:
      "Challenge your senses and test your luck with this stylish 2D game! With relaxing music, guess your way through each level with ease. Start playing today!",
    features: [
      "Fully Responsive",
      "Music",
      "Click sound",
      "High score",
      "Luck mode",
      "Sense mode",
      "Reset game",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705596902/portfolio/projects-images/sixthSenceGame/syvwuqhqts39i54vxzr6.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705596901/portfolio/projects-images/sixthSenceGame/ry1d3on0xp3fpsguvucc.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705596902/portfolio/projects-images/sixthSenceGame/rgbzo5qrnmatf6vk9rvu.png",
    },
    techIcons: [
      TsIcon,
      NextIcon,
      ReduxIcon,
      TailwindIcon,
      SassIcon,
      HtmlIcon,
      AeIcon,
      AiIcon,
      GitIcon,
    ],
    otherTechs: [],
    repoUrl: "https://github.com/Sky-De/the_sixth_sense",
    liveUrl: "https://2d-free-game-skyde.netlify.app",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio is the perfect showcase of my exceptional abilities and skills. I am more than capable of bringing my unparalleled creativity to your team and making a significant impact.",
    features: [
      "Fully Responsive",
      "Dark-light mode",
      "Stunning design",
      "Google-RECAPTCHA",
      "Contact Form",
      "sitemap",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706469904/portfolio/projects-images/myPortfolio/byyy79hzayx8pl3ihtvq.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706469904/portfolio/projects-images/myPortfolio/puxgvhcyjca75safhvbp.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706469905/portfolio/projects-images/myPortfolio/ihvux5teb4fvtg1fwyvk.png",
    },
    techIcons: [
      TsIcon,
      NextIcon,
      TailwindIcon,
      CssIcon,
      ReduxIcon,
      XdIcon,
      AeIcon,
      AiIcon,
      GitIcon,
    ],
    otherTechs: ["nodeMailer", "framer-motion", "PWA"],
    repoUrl: "https://github.com/Sky-De/Portfolio_typescript_next_js",
    liveUrl: "https://skyde-portfolio.netlify.app/",
  },
  {
    id: 4,
    title: "Todo App",
    description:
      "Try my unique task management tool! My TypeScript-built PWA makes organizing work and personal tasks easy and user-friendly.",
    features: [
      "Fully responsive",
      "Offline data persistent",
      "Dark-light mode",
      "Stunning design",
      "PWA ready",
      "Delete task",
      "Add the task",
      "Edit the task",
      "Mark the task as done",
      "Mark the task as undone",
      "Reset all the tasks",
      "Reverse the order of the tasks",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705577516/portfolio/projects-images/todoApp/vibesyxqq1er2qfqyifm.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705577515/portfolio/projects-images/todoApp/ahv1q1s7n0ztpswhjung.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705577516/portfolio/projects-images/todoApp/xtpxqt5hynwrznqauvag.png",
    },
    techIcons: [TsIcon, ReactIcon, CssIcon, GitIcon],
    otherTechs: ["PWA", "Context"],
    repoUrl: "https://github.com/Sky-De/TypeScript-ToDoApp",
    liveUrl: "https://typescript-todo-skyde.netlify.app/",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    description:
      "This is a stylish UI admin dashboard featuring MUI and Nivo charts, with multiple tabs to manage data and users.",
    features: [
      "Dark-light mode",
      "Stunning design",
      "Calendar",
      "Dashboard tab",
      "Manage tab",
      "Profiles tab",
      "FAQ tab",
      "Data grid Filters",
      "Bar chart",
      "Line chart",
      "Pie chart",
      "Geography chart",
      "Data grid pagination",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705581584/portfolio/projects-images/adminDashboard/fnd8ivv0hen51gyihjce.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705581584/portfolio/projects-images/adminDashboard/zvrh4doupxsrechzgomz.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705581584/portfolio/projects-images/adminDashboard/lb5msuvnjgazwdnrxqmg.png",
    },
    techIcons: [JsIcon, ReactIcon, CssIcon, MuiIcon, GitIcon],
    otherTechs: ["full-calendar", "Data-grid"],
    repoUrl: "https://github.com/Sky-De/React-Admin-Dashboard",
    liveUrl: "https://react-admin-dashboar-skyde.netlify.app",
  },
  {
    id: 6,
    title: "Music App",
    description:
      "Experience the best of music with ease on my free online music app. Discover the latest top tracks and singers with lyrics that will keep you captivated. Start your journey to musical bliss today!",
    features: [
      "Fully Responsive",
      "Stunning design",
      "Search",
      "Top songs",
      "Top charts",
      "Top artists",
      "Music lyrics",
      "Song Details pages",
      "Artist Details pages",
      "Around-You musics",
      "Shuffle",
      "Repeat",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706042801/portfolio/projects-images/musicApp/kmhzdo2446zraglyqfup.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706044317/portfolio/projects-images/musicApp/xjpktgsldggafpudaou4.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706042801/portfolio/projects-images/musicApp/yul45bh8is9ru6wkxsja.png",
    },
    techIcons: [JsIcon, ReactIcon, ReduxIcon, TailwindIcon, GitIcon],
    otherTechs: ["Vite", "Swiper", "Rapid-api"],
    repoUrl: "https://github.com/Sky-De/music-player-app",
    liveUrl: "https://music-app-skyde.netlify.app/",
  },
  {
    id: 7,
    title: "YouTube Clone",
    description:
      "My platform is a user-friendly clone of YouTube that lets you easily search for and watch your favorite videos.",
    features: [
      "Fully responsive",
      "Aside nav",
      "Search functionality",
      "Categorised videos",
      "Skeleton loading",
      "Live data fetching",
      "Video page",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705583934/portfolio/projects-images/youTubeClone/vz5o1er54pbv5esitd8p.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705583934/portfolio/projects-images/youTubeClone/vuk3vzwklwo21dlogfqt.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705583934/portfolio/projects-images/youTubeClone/rmvtgelhyvbhuanvjfrx.png",
    },
    techIcons: [JsIcon, ReactIcon, MuiIcon, CssIcon, GitIcon],
    otherTechs: ["Rapid-api", ".env"],
    repoUrl: "https://github.com/Sky-De/Youtube_Clone_App",
    liveUrl: "https://youtube-clone-app-skyde.netlify.app/",
  },
  {
    id: 8,
    title: "Free Gym Coach",
    description:
      "This app uses cutting-edge technology to provide you with clear and concise exercise guidance. With detailed illustrations, GIFs, and YouTube videos, you can be sure you're doing your workouts correctly.",
    features: [
      "Fully Responsive",
      "Stunning design",
      "Search",
      "Details page",
      "Horizontal scroll",
      "Exercise Gif",
      "Categorized exercises",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705925201/portfolio/projects-images/freeCoachApp/rgfnwunj4evijfuqm49m.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705925201/portfolio/projects-images/freeCoachApp/wcvd2mbgt96owzouykju.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1705925201/portfolio/projects-images/freeCoachApp/larwlyfwp590a9bqw1fi.png",
    },
    techIcons: [JsIcon, ReactIcon, MuiIcon, CssIcon, GitIcon],
    otherTechs: ["Rapid-api", "Context"],
    repoUrl: "https://github.com/Sky-De/Free-Gym-Coach-App",
    liveUrl: "https://free-coach-skyde.netlify.app",
  },
  {
    id: 9,
    title: "Infinit Anime App",
    description:
      "This platform offers lightning-fast anime exploration with unmatched quality, powered by TypeScript and Next.js server actions.",
    features: [
      "Fully Responsive",
      "Stunning design",
      "Smooth loading",
      "Server actions",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706292357/portfolio/projects-images/infinitAnime/ve1madvcxfv9jaxnyk5n.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706292357/portfolio/projects-images/infinitAnime/ndxxd87npgduybfgm5i2.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706292358/portfolio/projects-images/infinitAnime/ranerdnordroad86kvdd.png",
    },
    techIcons: [TsIcon, NextIcon, TailwindIcon, CssIcon, GitIcon],
    otherTechs: [],
    repoUrl: "https://github.com/Sky-De/Next-Js-Server-Action",
    liveUrl: "https://next-js-server-action.vercel.app/",
  },
  {
    id: 10,
    title: "AI_Share App",
    description:
      "This Next.js TypeScript app lets you perform CRUD operations, search for AI technology, and share your favorite AI with others..",
    features: [
      "Fully Responsive",
      "Stunning design",
      "Smooth loading",
      "tag search",
      "create post",
      "edit post",
      "delete post",
      "user profile page",
      "pagination",
      "google auth",
      "github auth",
      "next auth",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706364774/portfolio/projects-images/AiSahre/qmpmsbwlvfwcycfae6e0.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706364774/portfolio/projects-images/AiSahre/godjy3bckvgdxyb4bz65.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706364774/portfolio/projects-images/AiSahre/acjnxafbvc7vhh5n13dt.png",
    },
    techIcons: [TsIcon, NextIcon, TailwindIcon, CssIcon, GitIcon],
    otherTechs: ["google-Auth", "gitHub-Auth"],
    repoUrl: "https://github.com/Sky-De/typescript-next-js-13-app",
    liveUrl: "https://ai-share-sky-de.netlify.app",
  },
  {
    id: 11,
    title: "Shoping Cart",
    description:
      "Simple store app offers a seamless shopping experience with a built-in cart that persists across pages. You can relax and enjoy stress-free shopping with our app!",
    features: [
      "Fully Responsive",
      "Stunning design",
      "Smooth loading",
      "cart",
      "multiple items",
      "add / remove items",
      "total price",
      "item price",
    ],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706367040/portfolio/projects-images/shoppingCart/kmntuvjzysb82pt8wvkq.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706367040/portfolio/projects-images/shoppingCart/gpihteh8siwkotelvysg.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706367040/portfolio/projects-images/shoppingCart/whc4m0kkzhii0umei8bh.png",
    },
    techIcons: [TsIcon, ReactIcon, CssIcon, GitIcon],
    otherTechs: ["context"],
    repoUrl: "https://github.com/Sky-De/react-typeScript-shopping-cart",
    liveUrl: "https://shopping-cart-typescript-skyde.netlify.app/",
  },
  {
    id: 12,
    title: "Fylo_LP (old)",
    description:
      "I created a highly appealing landing page design that was based on a challenging assignment from Frontend Mentor. This project is one of my oldest and was developed entirely using HTML and SCSS.",
    features: ["Fully Responsive", "Stunning design", "frontend mentor"],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706369807/portfolio/projects-images/fyloLanding/vtazfzgps8tzcmduvflb.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706369806/portfolio/projects-images/fyloLanding/olx1dtthztfp9pvqlw1q.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706369807/portfolio/projects-images/fyloLanding/twssrr4wkwtsghsisq0o.png",
    },
    techIcons: [HtmlIcon, SassIcon, GitIcon],
    otherTechs: [],
    repoUrl: "https://github.com/Sky-De/react-typeScript-shopping-cart",
    liveUrl: "https://github.com/Sky-De/Fylo-landing-page",
  },
  {
    id: 13,
    title: "Tip_calculator (old)",
    description:
      "I have developed a tip calculator that is based on Frontend Mentor challenges. It is a vanilla HTML, SCSS, and JS app, and happens to be one of my oldest projects.",
    features: ["Fully Responsive", "Stunning design", "frontend mentor"],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706370438/portfolio/projects-images/tipCalc/robvxzwcyfurb2v6zd20.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706370438/portfolio/projects-images/tipCalc/qohtyqev7az8zmizqduh.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706370439/portfolio/projects-images/tipCalc/ww9ri0jlhlbphkureggp.png",
    },
    techIcons: [JsIcon, HtmlIcon, SassIcon, GitIcon],
    otherTechs: [],
    repoUrl: "https://github.com/Sky-De/lvl2-Tip-calculator-app",
    liveUrl: "https://tip-calculator-app-sky-de.netlify.app/",
  },
  {
    id: 14,
    title: "Easybank_LP (old)",
    description:
      "I created this landing page as one of my earliest projects, featuring an attention-grabbing design inspired by a Frontend Mentor project.",
    features: ["Fully Responsive", "Stunning design", "frontend mentor"],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706370819/portfolio/projects-images/easyBankLanding/mghqeqcm0kipy7glxmck.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706370820/portfolio/projects-images/easyBankLanding/cax4dxiobaginpukdie9.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706370820/portfolio/projects-images/easyBankLanding/zqmpnkoh799xpo5iegry.png",
    },
    techIcons: [JsIcon, HtmlIcon, SassIcon, GitIcon],
    otherTechs: [],
    repoUrl: "https://github.com/Sky-De/Easybank-landing-page",
    liveUrl: "https://easybank-landing-pagerespinsive.netlify.app/",
  },
  {
    id: 15,
    title: "Landing Page",
    description:
      "This landing page is a perfect blend of aesthetics and functionality, crafted with the best UI design using Tailwind CSS. You can deploy it right away and make a lasting impression on your audience.",
    features: ["Fully Responsive", "Stunning design", "dark / light"],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706371492/portfolio/projects-images/tailwindLanding/hcvigwnbfgfmbxexkeyb.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706371491/portfolio/projects-images/tailwindLanding/yd9bczdajmcfofdpdamo.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706371491/portfolio/projects-images/tailwindLanding/amoedcz5muncwj387tg7.png",
    },
    techIcons: [JsIcon, HtmlIcon, TailwindIcon, SassIcon, GitIcon],
    otherTechs: [],
    repoUrl: "https://github.com/Sky-De/LandingPage-TailwindCSS",
    liveUrl: "https://tailwind-landingpage-skyde.netlify.app/",
  },
  {
    id: 16,
    title: "Tailwind App",
    description:
      "This landing page is a perfect blend of aesthetics and functionality, crafted with the best UI design using Tailwind CSS. You can deploy it right away and make a lasting impression on your audience.",
    features: ["Fully Responsive", "Stunning design", "dark / light"],
    images: {
      mobileCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706372281/portfolio/projects-images/tailwindProjectAcme/zpitfaegc49cz3swqoe6.png",
      tableCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706372281/portfolio/projects-images/tailwindProjectAcme/opl2enw4edp291o2ow7c.png",
      laptopCoverUrl:
        "https://res.cloudinary.com/dxukz1zt5/image/upload/v1706372281/portfolio/projects-images/tailwindProjectAcme/nokxnymybexibaa2767t.png",
    },
    techIcons: [JsIcon, HtmlIcon, TailwindIcon, GitIcon],
    otherTechs: [],
    repoUrl: "https://github.com/Sky-De/Tailwind-CSS-Project",
    liveUrl: "https://tailwind-css-project-sky-de.netlify.app/",
  },
];
