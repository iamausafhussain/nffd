import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard.js";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails, clearErrors } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Metadata from "../layout/Metadata";
import { addItemsToCart } from "../../actions/cartAction";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) {
      return;
    }
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) {
      return;
    }
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  const addItemToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added to Cart!!");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={`${product.name} -- iShopify`} />
          <div className="ProductDetails">
            <div className="carousel__div">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2> {product.name} </h2>
                <p>Product # {product._id} </p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product.numOfReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`} </h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <IconButton
                      onClick={decreaseQuantity}
                      aria-label="add"
                      size="small"
                    >
                      <RemoveIcon />
                    </IconButton>
                    <input readOnly value={quantity} type="number" />
                    <IconButton
                      onClick={increaseQuantity}
                      aria-label="add"
                      size="small"
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                  <button onClick={addItemToCartHandler}>Add to Cart</button>
                </div>
                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description: <p>{product.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews yet!!</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
