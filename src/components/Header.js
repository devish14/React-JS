// Header Component which contains Logo and Navigation component

// IMPORTING named export LOGO_URL from config.js using {LOGO_URL}

import { useState } from "react";

import { LOGO_URL } from "../utils/config";

const HeaderComponent = () => {
  const [buttonName, setButtonName] =useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="img-align" src={LOGO_URL} />
      </div>
      <div className="nav-align">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
         <li>
         <button className="button1" onClick={()=> {
          // this is a toggle button which changes the button name from Login to Logout and vice versa
            buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login")
          }}>{buttonName}</button>
         </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
