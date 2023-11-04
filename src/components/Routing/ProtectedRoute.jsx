import React from "react";
import { getUser } from "../../services/userServices";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
  console.log(getUser);
  return getUser() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
