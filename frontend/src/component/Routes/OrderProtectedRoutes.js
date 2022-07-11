import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const OrderProtectedRoutes = ({ props }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      {!loading && (
        <>{isAuthenticated ? <Outlet /> : <Navigate to={props} />}</>
      )}
    </>
  );
};

export default OrderProtectedRoutes;
