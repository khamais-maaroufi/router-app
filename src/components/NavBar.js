import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {HomeOutlined } from "@ant-design/icons"

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/" style={{ textDecoration: "none", color: "white", marginRight:"30px" }}>
      <HomeOutlined />
      </Link>
      <Link to="/tunisia" style={{ textDecoration: "none", color: "white", marginRight:"30px" }}>
        Tunisia
      </Link>
      <Link to="/belgium" style={{ textDecoration: "none", color: "white", marginRight:"30px" }}>
        Belgium
      </Link>
      <Link to="/london" style={{ textDecoration: "none", color: "white", marginRight:"30px" }}>
        London
      </Link>
    </div>
  );
};

export default NavBar;
