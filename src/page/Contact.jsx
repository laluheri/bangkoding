import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Contact = () => {
  const userStr = localStorage.getItem("authenticated");
  let usrObj = JSON.parse(userStr, (key, value) => {
    return value;
  });
  if (!usrObj) return <Navigate replace to="/login" />;
  return (
    <div>
      welcome 👋 {usrObj.username} {localStorage.getItem("login")}
    </div>
  );
};

export default Contact;
