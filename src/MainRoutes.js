import React from "react";
import { Routes, Route } from "react-router";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/Navbar";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/products" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
