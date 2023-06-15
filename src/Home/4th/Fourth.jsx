import React from "react";
import "./Fourth.css";

import EastIcon from "@mui/icons-material/East";
const Fourth = () => {
  return (
    <div className="fourth">
      <div className="fourth__item image1">
        <div className="fourth__item__bg"></div>
        <div className="fourth__item__text">
          <div className="fourth__item__text__text fourth__mobile">
            <div className="fourth__item__tx">
              <p>FEATURED COLLECTION / 01</p>
              <h2>Neo Futura Office Furniture</h2>
            </div>

            <button className="fourth__item__btn">
              Shop collection
              <EastIcon className="fourth__icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="fourth__item image2">
        <div className="fourth__item__bg"></div>
        <div className="fourth__item__text">
          <div className="fourth__item__text__text">
            <div className="fourth__item__tx">
              <p>FEATURED COLLECTION / 01</p>
              <h2>Rustic Home Office Furniture Set </h2>
            </div>

            <button className="fourth__item__btn">
              Shop collection
              <EastIcon className="fourth__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
