import React, { useEffect } from "react";
import tunisia from "../images/tunisia.jpg";
import "./tunisia.css";
import { toast } from "react-toastify";

const Tunisia = () => {
  useEffect(() => {
    toast("Welcome To Tunisia");
  });
  return (
    <div className="belgium">
      <div className="centralize">
        <h1>Tunisia</h1>
        <img src={tunisia} alt="tunisia"></img>
      </div>
    </div>
  );
};

export default Tunisia;
