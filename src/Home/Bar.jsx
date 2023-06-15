import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
const Bar = () => {
  return (
    <div className="bar__container">
      <div className="bar">
        <div className="bar__item">
          <LocalShippingIcon className="bar__icon" />
          <div className="bar__item__text">
            <p>Free Shipping</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="bar__item">
          <AccessTimeIcon className="bar__icon" />
          <div className="bar__item__text">
            <p>Support 24/7</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="bar__item">
          <LocalAtmIcon className="bar__icon" />
          <div className="bar__item__text">
            <p>Money Return</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="bar__item">
          <CardGiftcardIcon className="bar__icon" />
          <div className="bar__item__text">
            <p>Member discount</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
