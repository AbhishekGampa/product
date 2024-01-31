import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Category from "./components/Category";
import AddToCart from "./components/AddToCart";
import Main from "./components/Main";
// import Topnav from "./Topnav";

function App() {
  return(
    // <Topnav/>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Main/>} />
      <Route path="/about" index element={<About/>} />
      <Route path="/products" index element={<Products/>} />
      <Route path="/category" index element={<Category/>} />
      <Route path="/addtocart" index element={<AddToCart/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
