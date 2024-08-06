import React from "react";
import heroimg from "../../component/data-image/heroimg.jpg";
import myresume from "../../component/data-image/myresume.pdf";

import Button from "../../component/All-page/Button";
const Heroimg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={heroimg} alt="" />
          <div className="content">
            <p> HI, I'M A</p>
            <h1>FRONT-END DEVELOPER</h1>
            <div className="hero-btn">
              <Button className="btn btn-blink" name="RESUME" link={myresume} />

              <Button
                className="btn btn-light"
                name="PROJECT"
                link="/Project"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroimg;
