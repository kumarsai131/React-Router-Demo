import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SubProducts from "./SubProducts";
import GoogleSearch from "./GoogleSearch";
import ContactID from "./ContactID";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/about" element={<About />}>
        {/* <Route path="google" element={<GoogleSearch />} /> */}
      </Route>

      <Route path="products">
        <Route index={true} element={<Products />} />
        <Route path=":id" element={<SubProducts />} />
      </Route>

      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:id" element={<ContactID />} />
    </Routes>
  </BrowserRouter>
);
