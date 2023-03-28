import React, { useState } from "react";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "../../images/header.png";
import ImageTwo from "../../images/banner.jpg";

const Banner = () => {
	const [imageArr, setImageArr] = useState([ImageOne, ImageTwo]);

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
			</Slider>
		</div>
	);
};

export default Banner;
