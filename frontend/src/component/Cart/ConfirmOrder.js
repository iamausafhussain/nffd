import React from "react";
import "./ConfirmOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import CheckoutSteps from "./CheckoutSteps";
import MetaData from "../layout/Metadata";
import { useSelector } from "react-redux";

const ConfirmOrder = () => {
	const { shippingInfo, cartItems } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	const shippingcharges = subtotal > 100 ? 0 : 50;

	const tax = subtotal * 0.18;

	const totalPrice = subtotal + shippingcharges + tax;

	const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

	const proceedToPayment = () => {
		const data = {
			subtotal,
			shippingcharges,
			tax,
			totalPrice,
		};

		sessionStorage.setItem("orderInfo", JSON.stringify(data));
		navigate("/process/payment", { replace: true });
	};

	return (
		<>
			<MetaData title="Confirm Order" />
			<CheckoutSteps activeStep={1} />

			<div className="confirmOrderPage">
				<div>
					<div className="confirmShippingArea">
						<Typography>Shipping Information</Typography>
						<div className="confirmShippingAreaBox">
							<div>
								<p>Name:</p>
								<span> {user.name} </span>
							</div>

							<div>
								<p>Phone:</p>
								<span> {shippingInfo.phoneNo} </span>
							</div>

							<div>
								<p>Address:</p>
								<span> {address} </span>
							</div>
						</div>
					</div>
					<div className="confirmCartItems">
						<Typography>Your Cart Items:</Typography>
						<div className="confirmCartItemsContainer">
							{cartItems &&
								cartItems.map((item) => (
									<div key={item.product}>
										<img src={item.image} alt="Product" />
										<Link to={`/product/${item.product}`}> {item.name} </Link>
										<span>
											{item.quantity} X {item.price} ={" "}
											<b>₹{item.price * item.quantity}</b>
										</span>
									</div>
								))}
						</div>
					</div>
				</div>
				{/*  */}
				<div>
					<div className="orderSummary">
						<Typography>Order Summary</Typography>
						<div>
							<div>
								<p>Subtotal:</p>
								<span>₹{subtotal} </span>
							</div>

							<div>
								<p>Shipping Charges:</p>
								<span>₹{shippingcharges} </span>
							</div>

							<div>
								<p>GST:</p>
								<span>₹{tax} </span>
							</div>
						</div>

						<div className="orderSummaryTotal">
							<p>
								<b>Total:</b>
							</p>
							<span>₹{totalPrice}</span>
						</div>

						<button onClick={proceedToPayment}>Proceed To Payment</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConfirmOrder;
