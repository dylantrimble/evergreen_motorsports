import ReactDOM from "react-dom/client";
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import model from "./model"
import {StoreProvider, createStore} from "easy-peasy"
import App from "./App";
import Cart from './pages/cart';
import Products from './pages/products'
import Contact from "./pages/contact";

const store = createStore(model)

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <StoreProvider store={store}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </StoreProvider>
  </BrowserRouter>
);