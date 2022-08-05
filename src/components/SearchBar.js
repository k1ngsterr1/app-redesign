import React from "react";

// Images
import searchSVG1 from "../images/search.svg";

// Styles
import "../styles/main_app_styles/main-app-styles.css";

// Hook
import { useState } from "react";

const SearchBar = () => {
  const [searchSVG, setSearchClass] = useState("icon-2");
  const [searchTextPad, setSearchTextPad] = useState("search-bar");

  return (
    <div
      className="forSearch"
      id="search-container"
      onInput={() => {
        let searchBar = document.getElementById("search-bar");
        let searchBarLength = searchBar.value;

        searchBarLength.length > 0
          ? setSearchClass("icon-2-invisible")
          : setSearchClass("icon-2");

        searchBarLength.length > 0
          ? setSearchTextPad("search-bar-after")
          : setSearchTextPad("search-bar");
      }}
    >
      <img id="search-icon" className={searchSVG} src={searchSVG1}></img>
      <input
        type="search"
        id="search-bar"
        className={searchTextPad}
        placeholder="Bots, Users, Friends..."
      ></input>
    </div>
  );
};

export default SearchBar;
