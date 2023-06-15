import React from "react";
import Desk from "../../assets/HYPERERGO images/Home/1st/1st.jpg";
import Chairs from "../../assets/HYPERERGO images/Home/1st/2nd.jpg";
import Laptop from "../../assets/HYPERERGO images/Home/1st/3rd.jpg";
import EastIcon from "@mui/icons-material/East";
import "./First.css";
import { FirstInfo } from "./FirstInfo";
import FirstIcons from "./FirstIcons";
import { Link } from "react-router-dom";
const First = ({ filters, setFilters }) => {
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event === "all" ? event : event,
    }));
  };
  return (
    <div className="first">
      <div className="first__flex">
        <div className="first__item">
          <img src={Desk} alt="" />
          <div className="first__text">
            <Link to="/categories/chairs">
              <p onClick={() => handleChangeCategory("tables")}>Wooden Desk</p>
            </Link>
            <span>
              <EastIcon />
            </span>
          </div>
        </div>
        <div className="first__item2">
          <div className="first__item3">
            <div className="item">
              <img src={Chairs} alt="" />
              <div className="first__text">
                <Link to="/categories/chairs">
                  <p onClick={() => handleChangeCategory("chairs")}>Chairs</p>
                </Link>
                <span>
                  <EastIcon />
                </span>
              </div>
            </div>
            <div className="item2">
              <img src={Laptop} alt="" />
              <div className="first__text">
                <Link to="/categories/monitor stands">
                  <p onClick={() => handleChangeCategory("monitor stands")}>
                    Laptop Stands
                  </p>
                  <span>
                    <EastIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="first__icons">
        {FirstInfo.map((item) => (
          <FirstIcons
            key={item.id}
            icon={item.icon}
            text={item.text}
            setFilters={setFilters}
          />
        ))}
      </div>
    </div>
  );
};

export default First;
