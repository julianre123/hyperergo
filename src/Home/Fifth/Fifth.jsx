import React from "react";
import "./Fifth.css";
import { FifthInfo } from "./FifthInfo";
import FifthItem from "./FifthItem";
const Fifth = () => {
  return (
    <div className="fifth container">
      <div className="fifth__text">
        <div className="fifth__text1">
          <p>WORK FROM HOME</p>
          <h2>
            Keep inspired & <br />
            motivated
          </h2>
        </div>
        <div className="fifth__text2">
          <p>
            Etiam eros at pharetra lectus ante dignissim metus, facilisi
            <br />
            faucibus aliquet senectus viverra tellus cras enim, auctor
            <br /> proin volutpat, ut leo egestas faucibus sagittis
          </p>
        </div>
      </div>
      <div className="fifth__items">
        {FifthInfo.map((item) => (
          <FifthItem image={item.image} key={item.id} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Fifth;
