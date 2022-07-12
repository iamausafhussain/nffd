import React, { useEffect, useState } from "react";
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
import OrderProtectedRoutes from "./component/Routes/OrderProtectedRoutes";
import AdminProtectedRoutes from "./component/Routes/AdminProtectedRoutes";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/admin/Dashboard";
import ProductList from "./component/admin/ProductList";
import NewProduct from "./component/admin/NewProduct";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
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

        {/* Basic Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          {stripeApiKey && (
            <Route
              exact
              path="/process/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          )}
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/account" element={<Profile />} />
        </Route>
        {/* Basic Protected Routes Ends */}

        {/* Admin Routes Starts */}
        <Route element={<AdminProtectedRoutes />}>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/products" element={<ProductList />} />
          <Route exact path="/admin/product" element={<NewProduct />} />
        </Route>

        {/* Admin Routes Ends */}

        {/* Orders Protected Routes Starts */}
        <Route element={<OrderProtectedRoutes />}>
          <Route exact path="/order/:id" element={<OrderDetails />} />
        </Route>
        <Route element={<OrderProtectedRoutes />}>
          <Route exact path="/orders" element={<MyOrders />} />
        </Route>
        <Route element={<OrderProtectedRoutes />}>
          <Route exact path="/success" element={<OrderSuccess />} />
        </Route>
        <Route element={<OrderProtectedRoutes />}>
          <Route exact path="/login/shipping" element={<Shipping />} />
        </Route>
        <Route element={<OrderProtectedRoutes />}>
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        </Route>
        {/* Orders Protected Routes Ends */}

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/login" element={<LoginSignUp />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
