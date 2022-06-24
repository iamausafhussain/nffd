import React, { useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";

const Products = ({ props }) => {
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    console.log("Current Page: " + currentPage);
  };

  useEffect(() => {
    dispatch(getProduct(currentPage));
  }, [dispatch, currentPage]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="productsHeading">Products</div>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="first"
              lastPageText="last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Products;
