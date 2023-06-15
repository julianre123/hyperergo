import React from "react";
import "./Contact.css";
import Banner from "./Banner";
import First from "./First/First";
import Second from "./Second/Second";
const Contact = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <First />
        <Second />
      </div>
    </div>
  );
};

export default Contact;
