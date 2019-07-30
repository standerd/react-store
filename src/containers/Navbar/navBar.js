import React from "react";
import "./navBar.css";
import { NavLink, withRouter } from "react-router-dom";

const navBar = props => {
  let navState = props.nav;
  let products = (
    <li>
      <NavLink
        onClick={() => (navState = "products")}
        className="link"
        to="/products"
      >
        PRODUCTS
      </NavLink>
    </li>
  );
  let about = (
    <li>
      <NavLink
        onClick={() => (navState = "about")}
        className="link"
        to="/about"
      >
        ABOUT
      </NavLink>
    </li>
  );
  let profile = (
    <li>
      <NavLink
        onClick={() => (navState = "profile")}
        className="link"
        to="/profile"
      >
        YOUR PROFILE
      </NavLink>
    </li>
  );

  if (navState === "/about") {
    return (
      <div>
        <ul>
          <li>
            <NavLink
              onClick={() => (navState = "home")}
              className="link"
              to="/"
            >
              HOME
            </NavLink>
          </li>
          {products}
          {profile}
        </ul>
      </div>
    );
  } else if (navState === "/products") {
    return (
      <div>
        <ul>
          <li>
            <NavLink
              onClick={() => (navState = "home")}
              className="link"
              to="/"
            >
              HOME
            </NavLink>
          </li>
          {about}
          {profile}
        </ul>
      </div>
    );
  } else if (navState === "/profile") {
    return (
      <div>
        <ul>
          <li>
            <NavLink
              onClick={() => (navState = "home")}
              className="link"
              to="/"
            >
              HOME
            </NavLink>
          </li>
          {products}
          {about}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li>
            <NavLink
              onClick={() => (navState = "home")}
              className="link"
              to="/"
            >
              HOME
            </NavLink>
          </li>
          {products}
          {about}
          {profile}
        </ul>
      </div>
    );
  }
};

export default withRouter(navBar);
