import React from "react";
import first from "../../assets/HYPERERGO images/About/1st.jpg";
import "./Second.css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const Second = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="about__second">
      <img src={first} alt="" />
      <div className="about__second__texts">
        <div className="about__second__text">
          <DesignServicesIcon
            className="about__second__icon"
            fontSize={mobile ? "medium" : "large"}
          />
          <h3>Perfect Precision</h3>
          <p>
            Egestas at faucibus neque leo ac quisque ligula ultricies euismod
            platea mauris.
          </p>
        </div>
        <div className="about__second__text">
          <FormatShapesIcon
            className="about__second__icon"
            fontSize={mobile ? "medium" : "large"}
          />
          <h3>Customizable</h3>
          <p>
            Cras congue consequat varius sit natoque ultrices nascetur diam ut
            nisl congue.
          </p>
        </div>
        <div className="about__second__text">
          <AccountBalanceWalletIcon
            className="about__second__icon"
            fontSize={mobile ? "medium" : "large"}
          />
          <h3>Affordable</h3>
          <p>
            Praesent mauris elit sed quis arcu, leo aliquet quis dignissim odio
            eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
