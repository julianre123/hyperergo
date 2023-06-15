import React from "react";
import "./Third.css";
const ThirdItem = ({ image, title, description, setup }) => {
  return (
    <div className="third__item__office">
      <img src={image} alt="" />
      <p>{setup}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>View Details</p>
    </div>
  );
};

export default ThirdItem;
