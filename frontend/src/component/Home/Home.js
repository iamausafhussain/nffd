import React, { useEffect } from "react";
import "./Home.css";
import Loader from "../layout/Loader/Loader";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Banner from "./Banner";

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

					{/* <div className="banner">
						<a href="#container">
							<span className="mouse">
								<span className="mouse-wheel"></span>
							</span>
						</a>
					</div> */}

					<Banner />

					<h2 className="homeHeading">Featured Foods</h2>

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
