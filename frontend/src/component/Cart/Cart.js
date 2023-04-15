import React from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../layout/Metadata";

const Cart = () => {
	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();
	const { cartItems } = useSelector((state) => state.cart);

	const increaseQuantity = (id, quantity, stock) => {
		const newQty = quantity + 1;

		if (stock <= quantity) {
			return;
		}
		dispatch(addItemsToCart(id, newQty));
	};

	const decreaseQuantity = (id, quantity) => {
		const newQty = quantity - 1;

		if (1 >= quantity) {
			return;
		}
		dispatch(addItemsToCart(id, newQty));
	};

	const deleteCartItem = (id) => {
		dispatch(removeItemsFromCart(id));
		alert.success("Item removed");
	};

	const checkoutHandler = () => {
		navigate("/login?redirect=shipping", { replace: true });
	};

	return (
		<>
			{cartItems.length === 0 ? (
				<>
					<MetaData title="Cart" />
					<div className="emptyCart">
						<RemoveShoppingCartIcon />
						<Typography>No Foods in your Cart</Typography>
						<Link to="/products">View Foods</Link>
					</div>
				</>
			) : (
				<>
					<MetaData title="Cart" />
					<div className="cartPage">
						<div className="cartHeader">
							<p>Product</p>
							<p>Quantity</p>
							<p>Subtotal</p>
						</div>

						{cartItems &&
							cartItems.map((item) => (
								<div className="cartContainer" key={item.product}>
									<CartItemCard deleteCartItem={deleteCartItem} item={item} />
									<div className="cartInput">
										<IconButton
											onClick={() =>
												decreaseQuantity(item.product, item.quantity)
											}
											aria-label="add"
											size="small">
											<RemoveIcon />
										</IconButton>
										<input readOnly value={item.quantity} type="number" />
										<IconButton
											onClick={() =>
												increaseQuantity(
													item.product,
													item.quantity,
													item.stock
												)
											}
											aria-label="add"
											size="small">
											<AddIcon />
										</IconButton>
									</div>
									<p className="cartSubtotal">{`₹${
										item.price * item.quantity
									}`}</p>
								</div>
							))}

						<div className="cartGrossTotal">
							<div>
								<p></p>
							</div>
							<div className="cartGrossTotalBox">
								<p>Gross Total:</p>
								<p>
									{`₹${cartItems.reduce(
										(acc, item) => acc + item.price * item.quantity,
										0
									)}`}
								</p>
							</div>
							<div></div>
							<div className="checkOutBtn">
								<button onClick={checkoutHandler}>Check Out</button>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Cart;
