import React, { useEffect } from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="iShopify" />

          <div className="banner">
            <p>Welcome to iShopify website</p>
            <h1>FIND AMAZING PRODUCTS IN THIS WEBSITE</h1>

            <a href="#container">
              <span className="mouse">
                <span className="mouse-wheel"></span>
              </span>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
