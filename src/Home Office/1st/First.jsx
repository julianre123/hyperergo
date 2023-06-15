import React from "react";
import "./First.css";
import afterBanner from "../../assets/HYPERERGO images/Home Office/afterBanner.jpg";
const First = () => {
  return (
    <div className="first__office">
      <div className="left home__left">
        <p>WORK FROM HOME</p>
        <h1>Smooth workflow at home with your own working space</h1>
        <div className="right__border"></div>
        <p>
          Et arcu eu ultricies pharetra, malesuada congue egestas venenatis
          pellentesque vitae massa aliquet quis velit elementum. Arcu erat
          turpis sed ullamcorper viverra amet, vel laoreet massa eu consequat
          ultricies accumsan, a magna morbi egestas augue proin sagittis, sit
          neque volutpat nisl elit mattis aenean eget eget facilisis massa duis
          volutpat purus diam nec at orci lacinia lectus id enim diam vivamus
          euismod nibh venenatis.
        </p>
        <p>Learn more</p>
      </div>
      <div className="first__side right home__right">
        <img src={afterBanner} alt="" />
      </div>
    </div>
  );
};

export default First;
