import React from "react";
import { Routes, Route } from "react-router";
// import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Navbar />} />
      {/* <Route path="/products" element={<AddProduct />} /> */}
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
};

export default MainRoutes;
