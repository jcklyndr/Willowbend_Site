import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Regulations from "../pages/Regulations";
import Officers from "../pages/Officers";
import Faqs from "../pages/Faqs";
import History from "../pages/History";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="regulations" element={<Regulations />} />
        <Route path="officers" element={<Officers />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="history" element={<History />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
