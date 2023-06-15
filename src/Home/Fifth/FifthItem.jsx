import React from "react";
import EastIcon from "@mui/icons-material/East";
const FifthItem = ({ image, text }) => {
  return (
    <div className="fifth__item">
      <img src={image} alt="" />
      <div className="fifth__item__text">
        <h2>{text}</h2>
        <div className="fifth__item__btn">
          <p>View Details</p>
          <span>
            <EastIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FifthItem;
