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
import About from "./component/layout/About/About";
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
import UpdateProduct from "./component/admin/UpdateProduct";
import OrdersList from "./component/admin/OrdersList";
import UpdateOrder from "./component/admin/UpdateOrder";
import UsersList from "./component/admin/UsersList";
import UpdateUser from "./component/admin/UpdateUser";
import ReviewsList from "./component/admin/ReviewsList";
import NotFound from "./component/layout/NotFound/NotFound";
import Dinein from "./component/admin/Dinein";
import DineinUser from "./component/Dinein/Dinein";

function App() {
	const { isAuthenticated, user } = useSelector((state) => state.user);
	const [stripeApiKey, setStripeApiKey] = useState(
		"pk_test_51Morf2SCowwJttNZkSwm0I7skrhb64wHT0JrFhkz6nuONLZM5wBb0tfnpFONoLEY4uJxOnvMBCNNzLNBRazaoSMt00aCDPW8B6"
	);

	async function getStripeApiKey() {
		// const { data } = await axios.get("/api/v1/stripeapikey");
		// console.log(data);

		setStripeApiKey(
			"pk_test_51Morf2SCowwJttNZkSwm0I7skrhb64wHT0JrFhkz6nuONLZM5wBb0tfnpFONoLEY4uJxOnvMBCNNzLNBRazaoSMt00aCDPW8B6"
		);
	}

	useEffect(() => {
		// WebFont.load({
		// 	google: {
		// 		families: ["Source Sans Pro"],
		// 	},
		// });

		store.dispatch(loadUser());
		// console.log(stripeApiKey);

		getStripeApiKey();
	}, []);

	// window.addEventListener("contextmenu", (e) => e.preventDefault());

	return (
		<Router>
			<Header />

			{isAuthenticated && <UserOptions user={user} />}

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/product/:id" element={<ProductDetails />} />
				<Route exact path="/products" element={<Products />} />
				{/* <Route path="/products/:searchText" element={<Products />} /> */}
				<Route
					exact
					path="/process/payment"
					element={
						<Elements stripe={loadStripe(stripeApiKey)}>
							<Payment />
						</Elements>
					}
				/>
				<Route exact path="/dinein" element={<DineinUser />} />

				<Route path="/password/forgot" exact element={<ForgotPassword />} />

				{/* Basic Protected Routes */}
				<Route element={<ProtectedRoutes />}>
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
					<Route exact path="/admin/product/:id" element={<UpdateProduct />} />
					<Route exact path="/admin/orders" element={<OrdersList />} />
					<Route exact path="/admin/order/:id" element={<UpdateOrder />} />
					<Route exact path="/admin/users" element={<UsersList />} />
					<Route exact path="/admin/user/:id" element={<UpdateUser />} />
					<Route exact path="/admin/reviews" element={<ReviewsList />} />
					<Route exact path="/admin/dinein" element={<Dinein />} />
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
				<Route exact path="/about" element={<About />} />

				<Route exact path="/login" element={<LoginSignUp />} />
			</Routes>

			{/* <Footer /> */}
		</Router>
	);
}

export default App;
