import React, { useState, useEffect } from "react";
import "./NewProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Sidebar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";

const NewProduct = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const alert = useAlert();
	const { loading, error, success } = useSelector((state) => state.newProduct);

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [Stock, setStock] = useState(0);
	const [images, setImages] = useState([]);
	const [imagePreview, setImagesPreview] = useState([]);

	const categories = [
		"Starter",
		"Main Course",
		"Desserts",
		"Shakes",
		"Snacks",
		"Newly Added",
		"Special",
	];

	const createProductImagesChange = (e) => {
		const files = Array.from(e.target.files);

		// setImages([]);
		// setImagesPreview([]);

		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setImagesPreview((old) => [...old, reader.result]);
					setImages((old) => [...old, reader.result]);
				}
			};

			reader.readAsDataURL(file);
		});

		console.log(files);
	};

	const createProductSubmitHandler = (e) => {
		e.preventDefault();

		const myForm = new FormData();

		myForm.set("name", name);
		myForm.set("price", price);
		myForm.set("description", description);
		myForm.set("category", category);
		myForm.set("Stock", Stock);

		images.forEach((image) => {
			myForm.append("images", image);
		});

		dispatch(createProduct(myForm));
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		if (success) {
			alert.success("Product Created Successfully!!");
			navigate("/admin/dashboard", { replace: true });
			dispatch({ type: NEW_PRODUCT_RESET });
		}
	}, [dispatch, alert, error, navigate, success]);

	return (
		<>
			<MetaData title="Create Product" />
			<div className="dashboard">
				<Sidebar />
				<div className="newProductContainer">
					<form
						className="createProductForm"
						encType="multipart/form-data"
						onSubmit={createProductSubmitHandler}>
						<h1>Create Product</h1>

						<div>
							<SpellcheckIcon />
							<input
								type="text"
								placeholder="Product name"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div>
							<AttachMoneyIcon />
							<input
								type="price"
								placeholder="price"
								required
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>

						<div>
							<DescriptionIcon />
							<textarea
								placeholder="product description"
								value={description}
								required
								onChange={(e) => setDescription(e.target.value)}
								cols="30"
								rows="1"></textarea>
						</div>

						<div>
							<AccountTreeIcon />
							<select onChange={(e) => setCategory(e.target.value)}>
								<option value="">Choose Category</option>
								{categories.map((cate) => (
									<option key={cate} value={cate}>
										{cate}
									</option>
								))}
							</select>
						</div>

						<div>
							<StorageIcon />
							<input
								type="number"
								placeholder="Stock"
								required
								onChange={(e) => setStock(e.target.value)}
							/>
						</div>

						<div id="createProductFormFile">
							<input
								type="file"
								name="avatar"
								accept="image/*"
								multiple
								onChange={createProductImagesChange}
							/>
						</div>

						<div id="createProductFormImage">
							{imagePreview.map((image, index) => (
								<img key={index} src={image} alt="Avatar Preview" />
							))}
						</div>

						<Button
							id="createProductBtn"
							type="submit"
							disabled={loading ? true : false}>
							Create
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default NewProduct;
