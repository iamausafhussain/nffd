import React, { useState, useEffect } from "react";
import "./Navbar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../../images/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
	const [navColor, setnavColor] = useState("white");
	const [navText, setnavText] = useState("black");
	const { user } = useSelector((state) => state.user);
	const { cartItems } = useSelector((state) => state.cart);

	const listenScrollEvent = () => {
		window.scrollY > 10 ? setnavColor("#000") : setnavColor("transparent");
		window.scrollY > 10 ? setnavText("white") : setnavText("black");
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
		console.log("current location", window.location.pathname);
	}, []);

	console.log(user);
	return (
		<nav
			className="nav"
			style={{
				backgroundColor: navColor,
				color: navText,
				transition: "all 0.4s ease",
			}}>
			<div className="navbar-container">
				<ul className="desktop-nav">
					<li className="nav-li">
						<a href="/">
							<img src={Logo} className="link-logo" />
						</a>
					</li>
					<li className="nav-li nav-location">
						<div className="user-location">
							<p className="user-location-delivery">Deliver to:</p>
							<LocationOnIcon className="mat-icon" />
							<p className="user-location-current">Current Location</p>
							<h4>Infocity, Bhubaneswar</h4>
						</div>
					</li>
					{!user ? (
						<Link className="login nav-li" to="/login">
							<li>
								<button className="login-button">
									<PersonIcon className="mat-icon-login" />
									Login
								</button>
							</li>
						</Link>
					) : (
						<>
							<div className="none">adsf </div>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
