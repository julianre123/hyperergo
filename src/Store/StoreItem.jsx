import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../hooks/UseCart";
import { useParams } from "react-router-dom";
const StoreItem = ({ image, category, title, price, description, product }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const { addToCart, cart } = useCart();

  return (
    <div
      className="second__item store__item"
      onMouseLeave={() => setMouseEnter(false)}
    >
      <Link to={`/products/${title}`}>
        <img src={image} alt="" onMouseEnter={() => setMouseEnter(true)} />
      </Link>
      {mouseEnter && (
        <div className="store__item__icon">
          <ShoppingCartIcon onClick={() => addToCart(product)} />
        </div>
      )}
      <div className="second__item__text">
        <p>
          <Link to={`/products/${title}`}>{title}</Link>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default StoreItem;
