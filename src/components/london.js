import React from "react";
import london from "../images/london.jpg";
import "./london.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

const London = () => {
  useEffect(() => {
    toast("Welcome To London");
  });
  return (
    <div className="london">
      <div className="centralize">
        <h1>London</h1>
        <img src={london} alt="london"></img>
      </div>
    </div>
  );
};

export default London;
