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
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

const Banner = () => {
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

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
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
					<p>Are you starving?</p>
				</div>
				<div className="slider-description-details slider-info">
					<p>Withing a few clicks, find the meals that are accesible to you</p>
				</div>
				<div className="slider-description-card slider-info">
					<div className="slider-card-header">
						<Link to="/products">
							<button class="slider-delivery-button first-button">
								<FastfoodIcon />
								<p>Foods</p>
							</button>
						</Link>
						<Link to="/">
							<button class="slider-delivery-button">
								<TwoWheelerIcon />
								<p>Pickup</p>
							</button>
						</Link>
					</div>
					<hr />
					<div className="slider-card-search">
						<input placeholder="Search Foods " className="slider-input" />
						<button className="search-button">Find Food</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
