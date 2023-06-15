import React from "react";
import "./Third.css";
import { ThirdInfo } from "./ThirdInfo";
import ThirdItem from "./ThirdItem";
const Third = () => {
  return (
    <div className="third__office">
      {ThirdInfo.map((item) => (
        <ThirdItem
          key={item.id}
          image={item.image}
          setup={item.setup}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Third;
