import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./my-app/routes/Home";
import About from "./my-app/routes/About";
import Project from "./my-app/routes/Project";

import "./my-css-file.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/portfolio-website/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};

export default App;
