import React from "react";
import search from "../images/search.svg";

const StatusBar = ({ setcountryName, setregion }) => {
  function searchHandler(e) {
    setcountryName(e.target.value);
  }

  function selectHandler(e) {
    setregion(e.target.value);
  }

  return (
    <div className="statusBar">
      <div className="searchBar">
        <img src={search} alt="" />
        <input
          onChange={(e) => {
            searchHandler(e);
          }}
          type="search"
          placeholder="search..."
        />
      </div>

      <div className="selectBar">
        <select
          className="filter-by-region"
          name="region"
          id="region"
          onChange={(e) => {
            selectHandler(e);
          }}
        >
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="">All Region</option>
        </select>
      </div>
    </div>
  );
};

export default StatusBar;
