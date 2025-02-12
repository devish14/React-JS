// Header Component which contains Logo and Navigation component

// IMPORTING named export LOGO_URL from config.js using {LOGO_URL}

import { useState } from "react";

import { LOGO_URL } from "../utils/config";

import { Link } from "react-router";

const HeaderComponent = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="img-align" src={LOGO_URL} />
      </div>
      <div className="nav-align">
        <ul>
          <li>
            {/* Link is used for route navigation without refreshing or reloading the whole page */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="button1"
              onClick={() => {
                // this is a toggle button which changes the button name from Login to Logout and vice versa
                buttonName === "Login"
                  ? setButtonName("Logout")
                  : setButtonName("Login");
              }}
            >
              {buttonName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
