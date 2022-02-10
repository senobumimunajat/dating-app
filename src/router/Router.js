import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/home/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find" element={<div>Success Login</div>} />
    </Routes>
  );
}

export default Router;
