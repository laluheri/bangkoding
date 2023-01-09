import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, redirectPath = "/", children }) => {
  user = localStorage.getItem("login");
  console.log("user " + user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;
