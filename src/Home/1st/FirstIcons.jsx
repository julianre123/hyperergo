import React from "react";
import { Link } from "react-router-dom";
const FirstIcons = ({ icon, text, setFilters }) => {
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event === "all" ? event : event,
    }));
  };
  return (
    <Link to={`/categories/${text}`}>
      <div className="first__icon" onClick={() => handleChangeCategory(text)}>
        {icon}
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default FirstIcons;
