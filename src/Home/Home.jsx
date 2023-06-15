import React from "react";
import First from "./1st/First";
import Second from "./2nd/Second";
import Third from "./3rd/Third";
import Fourth from "./4th/Fourth";
import Fifth from "./Fifth/Fifth";
import Banner from "./Banner/Banner";
import Bar from "./Bar";
import "./Home.css";
import Header from "../header/Header";

const Home = ({ filters, setFilters }) => {
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event === "all" ? event : event.target.innerHTML,
    }));
  };
  return (
    <div className="home__container">
      <Banner />
      <div className="container">
        <First filter={filters} setFilters={setFilters} />
        <Second />
      </div>
      <div className="second__border bar__border"></div>
      <Bar />
      <Third filter={filters} setFilters={setFilters} />
      <Fourth />
      <div className="background">
        <Fifth />
      </div>
    </div>
  );
};

export default Home;
