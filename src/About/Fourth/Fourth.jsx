import React from "react";
import "./Fourth.css";
import first from "../../assets/HYPERERGO images/About/Grid/1st.jpg";
import second from "../../assets/HYPERERGO images/About/Grid/2nd.jpg";
import third from "../../assets/HYPERERGO images/About/Grid/3rd.jpg";
import fourth from "../../assets/HYPERERGO images/About/Grid/4th.jpg";
import fifth from "../../assets/HYPERERGO images/About/Grid/5th.jpg";
import sixth from "../../assets/HYPERERGO images/About/Grid/6th.jpg";

const Fourth = () => {
  return (
    <div className="about__fourth">
      <div className="about__fourth__grid top">
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
      </div>
      <div className="about__fourth__grid bottom">
        <img src={fourth} alt="" />
        <img src={fifth} alt="" />
        <img src={sixth} alt="" />
      </div>
    </div>
  );
};

export default Fourth;
