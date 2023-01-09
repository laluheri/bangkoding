import React from "react";
import { Navigate } from "react-router-dom";
import SplitWithImage from "../components/SplitWithImage";
import CallToActionWithAnnotation from "./CallToActionWithAnnotation";

const Home = () => {
  return (
    <div>
      <CallToActionWithAnnotation />;
      <SplitWithImage />
    </div>
  );
};

export default Home;
