import * as React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="" element={<Signup />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}
