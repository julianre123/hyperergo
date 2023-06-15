import React from "react";
import "./About.css";
import Banner from "./Banner";
import First from "./First/First";
import Second from "./Second/Second";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
const About = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
    </div>
  );
};

export default About;
