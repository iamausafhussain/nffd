import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "../../images/header.png";
import ImageTwo from "../../images/fooddeltwo.jpg";
import ImageThree from "../../images/fooddelone.jpg";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";

const Banner = ({
	headerTitle,
	view,
	searchFood,
	setSearchFood,
	HandleSearchFood,
}) => {
	const [imageArr, setImageArr] = useState(
		{
			image: ImageOne,
		},
		{
			image: ImageTwo,
		},
		{
			image: ImageThree,
		}
	);

	// const HandleSearchFood = (e) => {
	// 	setSearchFood(e.target.value);
	// };

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		innerHeight: "100vh",
	};

	return (
		<div className="slick-carousel-slider">
			<Slider className="slick-slider-init" {...settings}>
				<div>
					<img className="slick-image" src={ImageOne} alt="Slide 1" />
				</div>
				<div>
					<img className="slick-image" src={ImageTwo} alt="Slide 2" />
				</div>
				<div>
					<img className="slick-image" src={ImageThree} alt="Slide 2" />
				</div>
			</Slider>

			<div className="slider-description">
				<div className="slider-description-header slider-info">
					<p>{headerTitle}</p>
				</div>
				<div className="slider-description-details slider-info">
					<p>Withing a few clicks, find the meals that are accesible to you</p>
				</div>
				<div className="slider-description-card slider-info">
					<div className="slider-card-header">
						<Link to="/products">
							<button className="slider-delivery-button first-button">
								<FastfoodIcon />
								<p>Restaurants</p>
							</button>
						</Link>
						<Link to="/dinein">
							{view == "dinein" ? (
								<button className="slider-delivery-button dinein">
									<BrunchDiningIcon />
									<p>DineIn</p>
								</button>
							) : (
								<button className="slider-delivery-button">
									<BrunchDiningIcon />
									<p>DineIn</p>
								</button>
							)}
						</Link>
					</div>
					<hr />
					<div className="slider-card-search">
						<input
							value={searchFood}
							onChange={(e) => {
								setSearchFood(e.target.value);
							}}
							placeholder="Search Foods"
							className="slider-input"
						/>

						<Link to="/">
							<button className="search-button" onClick={HandleSearchFood}>
								Find Foods
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
