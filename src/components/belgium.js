import React from "react";
import belgium from "../images/belgium.jpg";
import "./belgium.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Belgium = () => {
  useEffect(() => {
    toast("Welcome To Belgium");
  });
  return (
    <div className="belgium">
      <div className="centralize">
        <h1>belgium</h1>
        <img src={belgium} alt="belgium"></img>
      </div>
    </div>
  );
};

export default Belgium;
