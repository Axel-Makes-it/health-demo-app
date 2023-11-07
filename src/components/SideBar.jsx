import React from "react";
import "../styles/SideBar.css";
import USER from "../images/users-2.svg";
import TSHIRT from "../images/shirt.svg";
import NEWSPAPER from "../images/newspaper.svg";
import CHECK from "../images/check-check.svg";
import UP from "../images/arrow-big-up-dash.svg";
import DOWN from "../images/arrow-big-down-dash.svg";
import BOOK from "../images/book-user.svg";
import SOUP from "../images/soup.svg";
import userCircle from "../images/user-circle.svg";
import LOGO from "../images/logo.png";
import PROFILE from "../images/profile.jpg";

function SideBar() {
  return (
    <div className="sideBar__container">
      <div className="sideBar__menu">
        <ul>
          <div className="sideBar__logo-wrapper">
            <img src={LOGO} alt="LOGO" />
          </div>
          <li>
            <img src={USER} alt="USERS" width={30} />
            <img src={TSHIRT} alt="TSHIRT" width={30} />
            <img src={NEWSPAPER} alt="NEWSPAPER" width={30} />
            <img src={CHECK} alt="CHECK" width={33.569} />
            <img src={UP} alt="UP" width={32.789} />
            <img src={DOWN} alt="DOWN" width={32.789} />
            <img src={BOOK} alt="BOOK" width={32.789} />
            <img src={SOUP} alt="SOUP" width={32.789} />
            <img src={userCircle} alt="USER-CIRCLE" width={32.789} />
          </li>
        </ul>

        <div className="sideBar__profile-wrapper">
          <img src={PROFILE} alt="PROFILE" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
