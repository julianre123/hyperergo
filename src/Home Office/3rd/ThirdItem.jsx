import React from "react";

const ThirdItem = ({ setup, title, description, image }) => {
  return (
    <div className="third__item__office third__item__home__office">
      <img src={image} alt="" />
      <div className="third__item__home__text">
        <p>{setup}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>View Details</p>
      </div>
    </div>
  );
};

export default ThirdItem;
