import React, { useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Metadata from "../layout/Metadata";

const categories = [
	"Eat Street",
	"Just Eat",
	"Aangan Premium",
	"Swosti Grand",
	"Absolute Barbeque",
	"Barbeque Nation",
	"Udupi Kitchen",
	"Chandni Restro",
];

const Products = ({ props }) => {
	const dispatch = useDispatch();
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState([0, 2000]);
	const [currentPage, setCurrentPage] = useState(1);
	const [ratings, setRatings] = useState(0);
	const alert = useAlert();

	const {
		products,
		loading,
		error,
		productsCount,
		resultPerPage,
		// filteredProductsCount,
	} = useSelector((state) => state.products);

	const setCurrentPageNo = (e) => {
		setCurrentPage(e);
	};

	const priceHandler = (event, newPrice) => {
		setPrice(newPrice);
	};

	// let count = filteredProductsCount;

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getProduct(currentPage, price, category, ratings));
	}, [dispatch, currentPage, price, category, ratings, alert, error]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<Metadata title="Products -- iShopify" />
					<h2 className="productsHeading">Restaurants</h2>
					<div className="products">
						{products &&
							products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
					</div>

					<div className="filterBox">
						<Typography>Price</Typography>

						<Slider
							value={price}
							onChange={priceHandler}
							valueLabelDisplay="auto"
							aria-labelledby="range-slider"
							min={0}
							max={2000}
						/>

						<Typography>Restaurants</Typography>
						<ul className="categoryBox">
							{categories.map((category) => (
								<li
									className="category-link"
									key={category}
									onClick={() => setCategory(category)}>
									{category}
								</li>
							))}
						</ul>

						<fieldset>
							<Typography component="legend">Ratings Above</Typography>
							<Slider
								value={ratings}
								onChange={(e, newRating) => setRatings(newRating)}
								aria-labelledby="continuous-slider"
								min={0}
								max={5}
								valueLabelDisplay="auto"
							/>
						</fieldset>
					</div>

					{resultPerPage < productsCount && (
						<div className="paginationBox">
							<Pagination
								activePage={currentPage}
								itemsCountPerPage={resultPerPage}
								totalItemsCount={productsCount}
								onChange={setCurrentPageNo}
								nextPageText="Next"
								prevPageText="Prev"
								firstPageText="First"
								lastPageText="Last"
								itemClass="page-item"
								linkClass="page-link"
								activeClass="pageItemActive"
								activeLinkClass="pageLinkActive"
							/>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Products;
