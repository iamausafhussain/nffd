import React, { useState, useEffect } from "react";
import "./Home.css";
import Loader from "../layout/Loader/Loader";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Banner from "./Banner";

const Home = () => {
	const [searchFood, setSearchFood] = useState("");
	const alert = useAlert();
	const dispatch = useDispatch();
	const { loading, error, products } = useSelector((state) => state.products);
	const [filterFood, setFilteredFood] = useState();
	const [isFilterAdded, setIsFilterAdded] = useState(false);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getProduct());
		setFilteredFood(products);
	}, [dispatch, error, alert]);

	const HandleSearchFood = () => {
		const searchList = products.filter((item) => {
			return item.name.toLowerCase().includes(searchFood.toLowerCase());
		});
		setIsFilterAdded(true);
		setFilteredFood(searchList);
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<MetaData title="iShopify" />

					<Banner
						headerTitle={"Are you starving?"}
						searchFood={searchFood}
						setSearchFood={setSearchFood}
						HandleSearchFood={HandleSearchFood}
					/>

					<h2 className="homeHeading">Featured Foods</h2>

					<div className="container" id="container">
						{isFilterAdded == false
							? products.map((product) => <ProductCard product={product} />)
							: filterFood.map((product) => <ProductCard product={product} />)}
					</div>
				</>
			)}
		</>
	);
};

export default Home;
