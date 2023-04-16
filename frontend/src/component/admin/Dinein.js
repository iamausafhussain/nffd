import React, { useState, useEffect } from "react";
import "./Dinein.css";
import MetaData from "../layout/Metadata";
import Sidebar from "./Sidebar";
import { DataGrid } from "@material-ui/data-grid";

const Dinein = () => {
	const [dineArr, setDineArr] = useState([]);
	const columns = [
		{ field: "id", headerName: "Dine Id", minWidth: 200, flex: 0.2 },
		{ field: "user", headerName: "Customer", minWidth: 200, flex: 0.2 },
		{
			field: "restaurant",
			headerName: "Restaurant Name",
			minWidth: 150,
			flex: 0.2,
		},
		{
			field: "table",
			headerName: "Table Number",
			type: "number",
			minWidth: 100,
			flex: 0.2,
		},
	];
	const rows = [];
	useEffect(() => {
		setDineArr(JSON.parse(localStorage.getItem("dine")));
		console.log(JSON.parse(localStorage.getItem("dine")));

		console.log(rows);
	}, []);

	for (let index = 0; index < dineArr.length; index++) {
		rows.push({
			...rows,
			id: index + 1,
			user: dineArr[index]["username"],
			restaurant: dineArr[index]["restaurantName"],
			table: dineArr[index]["tableNumber"],
		});
	}

	return (
		<>
			<MetaData title={`Dine In -- ADMIN`} />
			<div className="dashboard">
				<Sidebar />
				<div className="productListContainer">
					<h1 id="productListHeading">DINE IN</h1>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={10}
						disableSelectionOnClick
						className="productListTable"
						autoHeight
					/>
				</div>
			</div>
		</>
	);
};

export default Dinein;
