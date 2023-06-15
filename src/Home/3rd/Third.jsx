import React from "react";
import first from "../../assets/HYPERERGO images/Home/3rd/1st.png";
import second from "../../assets/HYPERERGO images/Home/3rd/2nd.png";
import third from "../../assets/HYPERERGO images/Home/3rd/3rd.png";
import "./Third.css";
import { Link } from "react-router-dom";
const Third = ({ filters, setFilters }) => {
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event === "all" ? event : event,
    }));
  };
  return (
    <div className="third">
      <h1>Featured collection</h1>
      <p>
        Duis enim fermentum id et molestie arcu sagittis, sapien turpis praesent
        <br />
        consectetur dolor lobortis posuere adipiscing
      </p>
      <div className="third__items">
        <Link to="/categories/chairs">
          <div
            className="third__item"
            onClick={() => handleChangeCategory("chairs")}
          >
            <img src={first} alt="" />
            <p>Chairs</p>
          </div>
        </Link>
        <Link to="/categories/cabinets">
          <div
            className="third__item"
            onClick={() => handleChangeCategory("cabinets")}
          >
            <img src={second} alt="" />
            <p>Cabinets</p>
          </div>
        </Link>
        <Link to="/categories/study lamps">
          <div
            className="third__item"
            onClick={() => handleChangeCategory("study lamps")}
          >
            <img src={third} alt="" />
            <p>Lamps</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Third;
