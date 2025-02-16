// Header Component which contains Logo and Navigation component

// IMPORTING named export LOGO_URL from config.js using {LOGO_URL}

import { useContext, useState } from "react";

import { LOGO_URL } from "../utils/config";

// using Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";

const HeaderComponent = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);
  
  return (
    <div className="flex justify-between border border-black-600 items-center ">
      <div className="">
        <img className="size-26" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex justify-between text-lg font-serif">
          <li className="p-2 m-1">
            Online Status:{" "}
            <FontAwesomeIcon
              icon={onlineStatus ? faSquareCheck : faCircle}
              style={{ color: onlineStatus ? "green" : "red" }} // ✅ Changes color dynamically
            />
          </li>
          <li className="p-2 m-1">
            {/* Link is used for route navigation without refreshing or reloading the whole page */}
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-1">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-1">Cart</li>
          <li className="p-2 m-1">
            <button
              className="px-4 bg-[rgb(33,157,207)]"
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
          <li className="p-2 m-1">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
