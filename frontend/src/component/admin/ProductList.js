import React, { useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProducts,
  deleteProduct,
} from "../../actions/productAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import Sidebar from "./Sidebar";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const ProductList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, products } = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Product Deleted Successfully!!");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProducts());
  }, [dispatch, alert, error, isDeleted, deleteError]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.2 },
    { field: "name", headerName: "name", minWidth: 150, flex: 0.2 },
    {
      field: "stock",
      headerName: "stock",
      type: "number",
      minWidth: 100,
      flex: 0.2,
    },
    {
      field: "price",
      headerName: "price",
      type: "number",
      flex: 0.2,
    },
    {
      field: "action",
      headerName: "action",
      type: "number",
      sortable: false,
      flex: 0.2,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <SettingsSuggestIcon />
            </Link>
            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`All Products -- ADMIN`} />
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>
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

export default ProductList;
