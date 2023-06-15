import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/HYPERERGO images/Home/site-logo-light.svg";
import logo2 from "../assets/HYPERERGO images/Home/site-logo-dark.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/UseCart";
const Header = () => {
  const { cart } = useCart();
  const mobile = window.innerWidth <= 768 ? true : false;
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div>
      {mobile ? (
        <div
          className="header header__mobile"
          style={{ borderBottom: "1px solid #eaeaea" }}
        >
          <div className="header__side left__header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header__side right__header"></div>
          <div className="right__icons">
            <Link to="cart">
              <ShoppingCartIcon className="icon1" />
              <div className="number">
                <span>{cart.length > 0 ? cart.length : 0}</span>
              </div>
            </Link>
            <MenuIcon className="icon2" onClick={() => setOpenMobile(true)} />
            <div
              className="header__mobile__menu"
              style={{
                transform: openMobile ? "translate(0)" : "translate(-200%)",
                backgroundColor: "white",
              }}
            >
              <CloseIcon
                onClick={() => setOpenMobile(false)}
                style={{
                  color: "black",
                  cursor: "pointer",
                  position: "absolute",
                  right: "30px",
                  top: "15px",
                }}
              />
              <ul>
                <li>
                  <Link
                    to="/store"
                    style={{ color: "#8b8698" }}
                    onClick={() => setOpenMobile(false)}
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#8b8698" }}
                    to="/office"
                    onClick={() => setOpenMobile(false)}
                  >
                    Office
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#8b8698" }}
                    to="/home-office"
                    onClick={() => setOpenMobile(false)}
                  >
                    Home Office{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#8b8698" }}
                    to="/about"
                    onClick={() => setOpenMobile(false)}
                  >
                    About{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#8b8698" }}
                    to="/contact"
                    onClick={() => setOpenMobile(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="header">
          <div className="header__side left__header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <ul>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/office">Office</Link>
              </li>
              <li>
                <Link to="/home-office">Home Office </Link>
              </li>
            </ul>
          </div>
          <div className="header__side right__header">
            <ul>
              <li>
                <Link to="/about">About </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <form>
              <div className="right__input">
                <input type="search" placeholder="Search products..." />
                <button className="btn">
                  <ChevronRightIcon />
                </button>
              </div>
            </form>
          </div>
          <div className="right__icons">
            <Link to="/cart">
              <ShoppingCartIcon className="icon1" />
              <span className="number">
                {cart.length > 0 ? cart.length : 0}
              </span>
            </Link>
            <PersonIcon className="icon2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
