import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      {loading === false && (
        <>{isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />}</>
      )}
    </>
  );
};

export default AdminProtectedRoutes;
