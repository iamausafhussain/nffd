import React from "react";
import { Rating } from "@material-ui/lab";
import profilePng from "../../images/profilePic.jpg";
import { useSelector } from "react-redux";

const ReviewCard = ({ review }) => {
  const { user } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.productDetails);

  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="true" />
      <p>{review.name} </p>
      <Rating {...options} />
      <span className="reviewCardComment"> {review.comment} </span>
    </div>
  );
};

export default ReviewCard;
