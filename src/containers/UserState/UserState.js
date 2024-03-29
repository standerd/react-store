import React from "react";
import logo from "../../images/logo.jpg";
import "../../App.css";

const userState = props => {
  // main landing/home component based on userLogin Status
  return (
    <div className="header">
      <img
        style={{ width: "200px", height: "150px", marginBottom: "30px" }}
        src={logo}
        alt="logo"
      />
      <h1>
        {props.isLoggedIn
          ? `Welcome to our site ${props.userName}`
          : "Please Login to Continue"}
      </h1>
    </div>
  );
};

export default userState;
