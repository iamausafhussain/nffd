import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
// import Loader from "./component/layout/Loader/loader";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoutes from "./component/Routes/ProtectedRoutes";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />

        <Route path="/password/forgot" exact element={<ForgotPassword />} />
        {/* <Route
          path="/password/reset/:token"
          exact
          element={<ResetPassword />}
        /> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/password/update" exact element={<UpdatePassword />} />
          <Route path="/me/update" exact element={<UpdateProfile />} />
          <Route path="/account" exact element={<Profile />} />
        </Route>

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/login" element={<LoginSignUp />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
