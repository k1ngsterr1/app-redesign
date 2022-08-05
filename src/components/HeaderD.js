import React from "react";

// Images
import logo from "../images/LOGO.svg";
import user from "../images/profile.png";
import gear from "../images/gear.svg";

import SearchBar from "./SearchBar";

const header = () => {
  return (
    <header className="header">
      <div className="upper-header">
        <img className="logo" src={logo} />
        <SearchBar />
        <span className="user">
          <img className="user-photo" src={user}></img>
          <a className="user-text">John Doe</a>
        </span>
        <span className="settings">
          <img className="gear" src={gear}></img>
          <a className="settings-text">Settings</a>
        </span>
      </div>
    </header>
  );
};

export default header;
