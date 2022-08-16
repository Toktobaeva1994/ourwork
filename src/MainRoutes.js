import React from "react";
import { Routes, Route } from "react-router";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/admin" element={<AddProduct />} />
      <Route path="/ProductCard" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
