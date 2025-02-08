// Header Component which contains Logo and Navigation component

// IMPORTING named export LOGO_URL from config.js using {LOGO_URL}

import { LOGO_URL } from "../utils/config";
const HeaderComponent = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
