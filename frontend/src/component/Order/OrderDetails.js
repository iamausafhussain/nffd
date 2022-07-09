import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();

  const { order, error, loading } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getOrderDetails(id));
  }, [dispatch, error, alert, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order # {order && order._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  {/* <span> {order.user && order.user.name} </span> */}
                </div>

                <div>
                  <p>Phone:</p>
                  {/* <span>
                    {order.shippingInfo && order.shippingInfo[0].phoneNo}
                  </span> */}
                </div>

                <div>
                  <p>Address:</p>
                  {/* <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo[0].address}, ${order.shippingInfo[0].city}, ${order.shippingInfo[0].state}, ${order.shippingInfo[0].pinCode}, ${order.shippingInfo[0].country}`}
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetails;
