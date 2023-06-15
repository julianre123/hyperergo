import React from "react";
import "./Second.css";

import EastIcon from "@mui/icons-material/East";
import StoreItem from "../../Store/StoreItem";
import { StoreInfo } from "../../Store/StoreInfo";

import { Link } from "react-router-dom";
const Second = () => {
  return (
    <div className="second">
      <div className="second__text">
        <p>NEW ARRIVALS</p>
        <h2>Boost your productivity</h2>
      </div>
      <div className="second__border"></div>
      <div className="second__items">
        {StoreInfo.slice(0, 6).map((item) => (
          <StoreItem
            key={item.id}
            category={item.category}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            product={item}
          />
        ))}
      </div>
      <Link to="/store" className="second__button">
        <button className="btn second__button">
          <div className="second__btn__container">
            View All Products{" "}
            <span>
              <EastIcon />
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Second;
