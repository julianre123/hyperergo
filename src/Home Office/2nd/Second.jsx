import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import first from "../../assets/HYPERERGO images/Home Office/1st.jpg";
import "./Second.css";
const Second = () => {
  return (
    <div className="second__office">
      <img src={first} alt="" />
      <div className="first__office second__office__text">
        <div className="first__side left second__left">
          <p>FEATURED SETUP / 01</p>
          <h1>Mason Hyper flexible office furniture set</h1>
          <div className="right__border"></div>
        </div>
        <div className="first__side right second__right">
          <p>
            Dolor adipiscing integer ut imperdiet purus vulputate est, purus in
            non arcu tellus sit mi amet integer egestas aliquam massa
            pellentesque rhoncus ullamcorper gravida amet, maecenas feugiat elit
            suspendisse.
          </p>
          <div className="arrow__right">
            <p>View Details</p>
            <span>
              <ArrowRightAltIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
