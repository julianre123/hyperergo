import React from "react";
import "./Third.css";
import { ThirdInfo } from "./ThirdInfo";
import ThirdItem from "./ThirdItem";
const Third = () => {
  return (
    <div className="third__home__office">
      {ThirdInfo.map((item) => (
        <ThirdItem
          key={item.id}
          title={item.title}
          description={item.description}
          setup={item.setup}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Third;
