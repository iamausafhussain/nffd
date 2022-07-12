import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const OrderProtectedRoutes = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      {loading === false && (
        <>
          {isAuthenticated === true ? <Outlet /> : <Navigate to="/account" />}
        </>
      )}
    </>
  );
};

export default OrderProtectedRoutes;
