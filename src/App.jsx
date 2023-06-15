import { useState } from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";

import Header from "./header/Header";

import Footer from "./footer/Footer";
import Home from "./Home/Home";
import Store from "./Store/Store";
import StoreProduct from "./Store/StoreProduct";
import Categorie from "./Store/Categorie";
import Cart from "./Chart/Cart";
import StoreItem from "./Store/StoreItem";
import Office from "./Office/Office";
import HomeOffice from "./Home Office/HomeOffice";
import About from "./About/About";
import Contact from "./Contact/Contact";

import HeaderShop from "./header/HeaderShop";

function App() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  const [openFilters, setOpenFilters] = useState(false);
  const [next, setNext] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const mobile = window.innerWidth <= 768 ? true : false;
  const HomeTemplate = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const ShopTemplate = () => {
    return (
      <div>
        <HeaderShop />
        <Outlet />
        <Footer />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route
            path="/"
            element={<Home filters={filters} setFilters={setFilters} />}
          />
          <Route exact path="/office" element={<Office />} />
          <Route exact path="/home-office" element={<HomeOffice />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>

        <Route path="" element={<ShopTemplate />}>
          <Route
            path="/store"
            element={
              <Store
                filters={filters}
                setFilters={setFilters}
                openFilters={openFilters}
                setOpenFilters={setOpenFilters}
                next={next}
                setNext={setNext}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
              />
            }
          />
          <Route path="/products/:name" element={<StoreProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/categories/:categorie"
            element={
              <Categorie
                filters={filters}
                setFilters={setFilters}
                openFilters={openFilters}
                setOpenFilters={setOpenFilters}
                next={next}
                setNext={setNext}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
