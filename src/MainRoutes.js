import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
};

export default MainRoutes;
