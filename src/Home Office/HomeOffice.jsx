import React from "react";
import "./HomeOffice.css";
import Banner from "./Banner";
import First from "./1st/First";
import Second from "./2nd/Second";
import Third from "./3rd/Third";
const HomeOffice = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <First />
        <Second />
        <Third />
      </div>
    </div>
  );
};

export default HomeOffice;
