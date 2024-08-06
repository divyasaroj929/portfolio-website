import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
import signup from "../component/data-image/signup.png";
import HYGGEX from "../component/data-image/HYGGEX.png";
import Myntra from "../component/data-image/Myntra.png";
import weather from "../component/data-image/weather.png";
import cellComponent from "../component/data-image/cellComponent.png";
import wizard from "../component/data-image/wizard.png";
import searchfun from "../component/data-image/searchfun.png";
import myresume from "../component/data-image/myresume.pdf";
import gametictactoe from "../component/data-image/gametictactoe.png";
import telegram from "../component/data-image/telegram.png";
import { FaGithub } from "react-icons/fa";

const link_din = `https://linkedin.com/in/divya-saroj-b1b3321b3`;

const resume = myresume;
export const navItem = [
  {
    name: "Home",
    path: "/Portfolio",
  },
  {
    name: "About",
    path: "/about",
  },

  {
    name: "Project",
    path: "/project",
  },
];
export const footerItem = [
  {
    icon: <SiGmail />,
    link: "mailto:divyasaroj29@gmail.com",
    name: "Mail",
  },
  {
    icon: <FaLinkedinIn />,
    link: link_din,
    name: "linkdin",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/divyasaroj929",
    name: "Github",
  },
  {
    icon: <MdOutlineContactPage />,
    link: resume,
    name: "resume",
  },
];
export const data = [
  {
    img: signup,
    cardTitle: "Sign-up",
    cardSubTitle:
      "i learned about form validation with this project by using javascript and regex ",
    cardLink: "https://divyasaroj929.github.io/sign-up-Form/",
  },
  {
    img: Myntra,
    cardTitle: "Myntra",
    cardSubTitle:
      "Creating a Myntra-flavored UI: React Router and Navbar Styling in My Project",

    cardLink: "https://divyasaroj929.github.io/myntra/",
  },
  {
    img: cellComponent,
    cardTitle: "Fixed Sidebar with Content",
    cardSubTitle:
      " Building Modern Layouts: A Journey into React, CSS, and Router-Dom     ",

    cardLink: "https://divyasaroj929.github.io/cell-Component/",
  },
  {
    img: wizard,
    cardTitle: "multipurpose modal form",
    cardSubTitle:
      "Form Evolution:Transforming User Interaction with a Feature-rich Modal",
    cardLink: "https://divyasaroj929.github.io/SearchFunction/",
  },
  {
    img: weather,
    cardTitle: "Weather",
    cardSubTitle: " learned about how to call fetch API and use debounce",
    cardLink: "https://divyasaroj929.github.io/Weatherapp/",
  },
  {
    img: telegram,
    cardTitle: "telegram-clone",
    cardSubTitle:
      "A web-based Telegram clone built with React.js and Material-UI, featuring organized chat sections, detailed chat views, theming, and mobile responsiveness.",
    cardLink: "https://github.com/divyasaroj929/telegram-clone",
  },

  {
    img: searchfun,
    cardTitle: "Search",
    cardSubTitle: "learned about using fetch API calling  ",
    cardLink: "https://divyasaroj929.github.io/SearchFunction/",
  },
  {
    img: gametictactoe,
    cardTitle: "Tic-Tac-Toe",
    cardSubTitle:
      "Crafted a React-based Tic-Tac-Toe game with intuitive gameplay and efficient state handling.",
    cardLink: "https://divyasaroj929.github.io/tic-toc-toe/",
  },
  {
    img: HYGGEX,
    cardTitle: "my-project",
    cardSubTitle:
      "Utilized React Router for multiple navbars and accordion functionality to organize and present diverse data efficiently",
    cardLink: "https://divyasaroj929.github.io/HYGGEX/",
  },
];
