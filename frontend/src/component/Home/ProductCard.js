import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./Home.css";

const ProductCard = ({ product }) => {
	const options = {
		size: "small",
		value: product.ratings,
		readOnly: true,
		precision: 0.5,
	};

	return (
		// <Link className="productCard" to={`/product/${product._id}`}>
		//   <img src={product.images[0].url} alt={product.name} />
		//   <p>{product.name}</p>
		//   <div>
		//     <Rating className="productCardReactStars" {...options} />
		//     <span className="productCardSpan">
		//       ({product.numOfReviews} Reviews)
		//     </span>
		//   </div>
		//   <span>{`₹${product.price}`}</span>
		// </Link>

		<Link to={`/product/${product._id}`}>
			<div className="el-wrapper">
				<div className="box-up">
					<img className="img" src={product.images[0].url} alt={product.name} />
					<div className="img-info">
						<div className="info-inner">
							<span className="p-name"> {product.name} </span>
							<span className="p-company"> {product.category} </span>
						</div>
						<div className="a-size">
							<Rating {...options} />
							<span className="productCardSpan">
								({product.numOfReviews} Reviews)
							</span>
						</div>
					</div>
				</div>

				<div className="box-down">
					<div className="h-bg">
						<div className="h-bg-inner"></div>
					</div>

					<a className="cart" href="#">
						<span className="price">{`₹${product.price}`}</span>
						<span className="add-to-cart">
							<span className="txt">View Food </span>
						</span>
					</a>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
