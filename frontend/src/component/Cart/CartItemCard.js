import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItem }) => {
  return (
    <div className="cartItemCard">
      <img src={item.image} alt="image" />
      <div>
        <Link to={`/products/${item.product}`}>{item.name} </Link>
        <span> {`Price: ₹${item.price}`} </span>
        <p onClick={() => deleteCartItem(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;
