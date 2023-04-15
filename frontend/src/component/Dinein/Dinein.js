import React, { useState } from "react";
import "./Dinein.css";
import MetaData from "../layout/Metadata";
import Banner from "../Home/Banner";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const Dinein = () => {
	const [restaurant, setRestaurant] = useState("");
	const [table, setTable] = useState(0);
	const [restaurantName, setRestaurantName] = useState(
		localStorage.getItem("restaurant")
	);
	const [tableNumber, SetTableNumber] = useState(localStorage.getItem("table"));
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
			headerName: "Id",
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
		{
			field: "actions",
			flex: 0.3,
			headerName: "Actions",
			minWidth: 150,
			type: "number",
			sortable: false,
			renderCell: (params) => {
				return (
					<>
						<DeleteIcon onClick={RemoveDineBooking} />
					</>
				);
			},
		},
	];
	const rows = [];

	rows.push({
		id: 1,
		restaurantName: localStorage.getItem("restaurant"),
		tableNumber: localStorage.getItem("table"),
	});

	// useEffect(() => {
	// 	setDineArr(localStorage.getItem("dineOptions"));
	// });

	const tables = [1, 2, 3, 4, 5, 6, 7];

	const AddDineOptions = () => {
		localStorage.setItem("restaurant", restaurant);
		localStorage.setItem("table", table);

		setRestaurantName(localStorage.getItem("restaurant"));
		SetTableNumber(localStorage.getItem("table"));

		console.log(rows);
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

					{restaurantName !== "" ? (
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

export default Dinein;
