import React, { useState, useEffect, useRef } from "react";
import "./Store.css";
import { StoreInfo } from "./StoreInfo";
import StoreItem from "./StoreItem";
import CloseIcon from "@mui/icons-material/Close";
import { pagination } from "./StoreInfo";
import { Link } from "react-router-dom";
const Store = ({
  filters,
  setFilters,
  openFilters,
  setOpenFilters,
  next,
  setNext,
  minPrice,
  setMinPrice,
}) => {
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        openFilters && setOpenFilters(false);
      }
    });
  }, [ref, openFilters]);
  const filterProducts = (StoreInfo) => {
    return StoreInfo.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  const filteredProducts = filterProducts(StoreInfo);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [next]);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event === "all" ? event : event,
    }));
  };
  return (
    <div className="store">
      <div className="container store__container">
        <h1>Shop</h1>
        <div className="filter__text" onClick={() => setOpenFilters(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            fill="#8b8698"
          >
            <path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
          </svg>
          <p>Filter</p>
        </div>
        <div className="filters__translate">
          {openFilters && (
            <div className="filters" ref={ref}>
              <div className="filter">
                <div className="f">
                  <CloseIcon
                    className="filter__icon"
                    onClick={() => setOpenFilters(false)}
                  />
                  <div className="filters__price">
                    <h2>Filter by price</h2>
                    <input
                      type="range"
                      onChange={handleChangeMinPrice}
                      min="0"
                      max="280"
                      value={filters.minPrice}
                    />
                    <span>${filters.minPrice}</span>
                  </div>
                  <div className="filter__category">
                    <p onClick={() => handleChangeCategory("all")}>All</p>
                    {pagination.map((item) => (
                      <Link to={`/categories/${item.title}`}>
                        <p
                          onClick={() => handleChangeCategory(item.title)}
                          name={item.title}
                        >
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="store__items">
          {!next
            ? filteredProducts
                .slice(0, 12)
                .map((item) => (
                  <StoreItem
                    key={item.id}
                    category={item.category}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    product={item}
                  />
                ))
            : filteredProducts
                .slice(12)
                .map((item) => (
                  <StoreItem
                    key={item.id}
                    category={item.category}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    product={item}
                  />
                ))}
        </div>
        <div className="next">
          <p
            onClick={() => setNext(false)}
            style={{ backgroundColor: !next ? "#8b8698" : "white" }}
          >
            1
          </p>
          <p
            onClick={() => setNext(true)}
            style={{ backgroundColor: next ? "#8b8698" : "white" }}
          >
            2
          </p>
        </div>
      </div>
    </div>
  );
};

export default Store;
