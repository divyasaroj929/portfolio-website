import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ data, id }) => {
  const navigate = useNavigate();
  const comeHomeScreenAgian = () => {
    navigate("/Portfolio");
  };

  return (
    <div
      id={id}
      className="h-20 w-full pt-10 pb-7 mb-11 flex flex-col justify-around items-center"
    >
      <div className="h-10 w-full flex justify-around items-center">
        {data.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group"
          >
            <div
              className="flex justify-center items-center flex-col p-2 w-auto"
              key={index}
            >
              <div className="icon-container group-hover:animate-bounce">
                {item.icon}
              </div>
              <span className="text-center">{item.name}</span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-x text-center font-thin text-slate-700 cursor-pointer mt-4 dark:text-white">
        developed by ©<span onClick={comeHomeScreenAgian}>divya saroj</span>
      </p>
    </div>
  );
};

export default Footer;
