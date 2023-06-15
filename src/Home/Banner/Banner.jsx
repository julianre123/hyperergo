import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__bg"></div>

      <div className="banner__text">
        <div className="banner__text__text">
          <p>HOME OFFICE FURNITURE</p>
          <h1>
            Stay productive and get <br />
          </h1>
          <h1>more work done!</h1>
          <Link to="/store">
            <button className="btn">
              <div className="second__btn__container">
                Shop Collection{" "}
                <span>
                  <EastIcon />
                </span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
