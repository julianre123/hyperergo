import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
const FooterTop = () => {
  return (
    <div className="footer__top">
      <div className="footer__top__bg"></div>
      <div className="banner__text footer__top__banner">
        <div className="banner__text__text footer__top__text">
          <p>CUSTOM SETUPS</p>
          <h1>Let's build your dream working space</h1>
          <Link to="/store">
            <button className="btn footer__top__btn">
              <div className="second__btn__container">
                Shop Now{" "}
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

export default FooterTop;
