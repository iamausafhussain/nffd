import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import Loader from "./component/layout/Loader/loader";
import ProductDetails from "./component/Product/ProductDetails";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    window.scrollTo(0, 0);
  });

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
