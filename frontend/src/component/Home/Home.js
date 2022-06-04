import React, { useEffect } from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/Metadata";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/loader";
import { useAlert } from "react-alert";

const product = {
  name: "iPhone 11",
  images: [
    {
      url: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  ],
  price: "45000",
  _id: "iPhone",
};

const Home = () => {
  // const dispatch = useDispatch();
  // const { loading, error, products } = useSelector((state) => state.products);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getProduct());
  // }, [dispatch, error, alert]);

  return (
    <>
      <>
        <MetaData title="iShopify" />

        <div className="banner">
          <p>Welcome to iShopify</p>
          <h1>FIND AMAZING PRODUCTS HERE</h1>

          <a href="#container">
            <button>
              <MouseIcon />
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          <ProductCard product={product} />
        </div>
      </>
    </>
  );
};

export default Home;
