import React, { useState } from "react";
import "./Dinein.css";
import MetaData from "../layout/Metadata";
import Banner from "../Home/Banner";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const DineinUser = () => {
	const [restaurant, setRestaurant] = useState("");
	const [bookArr, setBookArr] = useState([]);
	const [table, setTable] = useState(0);
	const [restaurantName, setRestaurantName] = useState(
		localStorage.getItem("restaurant")
	);
	const [tableNumber, SetTableNumber] = useState(localStorage.getItem("table"));
	const { user } = useSelector((state) => state.user);

	const restaurants = [
		"Eat Street",
		"Just Eat",
		"Aangan Premium",
		"Swosti Grand",
		"Absolute Barbeque",
		"Barbeque Nation",
		"Udupi Kitchen",
		"Chandni Restro",
	];

	const columns = [
		{
			field: "id",
			headerName: "Booking Id",
			flex: 1,
		},
		{
			field: "restaurantName",
			headerName: "Restaurant",
			flex: 1,
		},
		{
			field: "tableNumber",
			headerName: "Table",
			flex: 0.3,
		},
	];
	const rows = [];

	for (
		let index = 0;
		index < JSON.parse(localStorage.getItem("dine")).length;
		index++
	) {
		if (
			JSON.parse(localStorage.getItem("dine"))[index]["username"] == user.name
		) {
			rows.push({
				id: index + 1,
				restaurantName: JSON.parse(localStorage.getItem("dine"))[index][
					"restaurantName"
				],
				tableNumber: JSON.parse(localStorage.getItem("dine"))[index][
					"tableNumber"
				],
			});
		}
	}

	// useEffect(() => {
	// 	setDineArr(localStorage.getItem("dineOptions"));
	// });

	const tables = [1, 2, 3, 4, 5, 6, 7];

	const AddDineOptions = () => {
		var data = {
			username: user.name,
			restaurantName: restaurant,
			tableNumber: table,
		};
		var dineArr = [];
		dineArr = JSON.parse(localStorage.getItem("dine")) || [];
		dineArr.push(data);
		localStorage.setItem("dine", JSON.stringify(dineArr));

		localStorage.setItem("restaurant", restaurant);
		localStorage.setItem("table", table);

		setRestaurantName(localStorage.getItem("restaurant"));
		SetTableNumber(localStorage.getItem("table"));
		for (
			let index = 0;
			index < JSON.parse(localStorage.getItem("dine")).length;
			index++
		) {
			if (
				JSON.parse(localStorage.getItem("dine"))[index]["username"] == user.name
			) {
				rows.push({
					id: 1,
					restaurantName: JSON.parse(localStorage.getItem("dine"))[index][
						"restaurantName"
					],
					tableNumber: JSON.parse(localStorage.getItem("dine"))[index][
						"tableNumber"
					],
				});
			}
		}
	};

	function RemoveDineBooking() {
		localStorage.removeItem("restaurant");
		localStorage.removeItem("table");
		setRestaurant("");
		setTable(0);
	}

	return (
		<>
			<MetaData title="Dine In" />
			<div className="dinein">
				<Banner headerTitle={"Best Restro in your cities"} view={"dinein"} />
				<div className="dineinContainer">
					<h3>Dine in to your favourite Restaurant</h3>
					<div className="dineinSelects">
						<div className="dineinSelectContainer">
							<div className="dineSelect">
								<p>Restaurant</p>
								<select
									value={restaurant}
									onChange={(e) => setRestaurant(e.target.value)}>
									<option value="">Choose Restaurants</option>
									{restaurants.map((cate) => (
										<option key={cate} value={cate}>
											{cate}
										</option>
									))}
								</select>
							</div>
							<div className="dineSelect selectTwo">
								<p>Table</p>
								<select
									value={table}
									onChange={(e) => setTable(e.target.value)}>
									<option value="">Choose Table</option>
									{tables.map((cate) => (
										<option key={cate} value={cate}>
											{cate}
										</option>
									))}
								</select>
							</div>
						</div>
						<button className="submitButton" onClick={AddDineOptions}>
							Submit
						</button>
					</div>

					{bookArr !== [] ? (
						<div className="bookingDetails">
							<h3>Your Bookings</h3>
							<DataGrid
								rows={rows}
								columns={columns}
								pageSize={10}
								disableSelectionOnClick
								className="myOrdersTable"
								autoHeight
							/>
						</div>
					) : (
						<div className="bookingDetails">
							<h3>You Don't have any Bookings</h3>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default DineinUser;
