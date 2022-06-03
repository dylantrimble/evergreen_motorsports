import ReactDOM from "react-dom/client";
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Cart from './pages/cart';
import Products from './pages/products'
import Contact from "./pages/contact";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);