import React from "react";
import { FaSearch, FaFeather } from "react-icons/fa";
import { GiBroadsword } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";
import "./headerStyles.css";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">Condimentum consectetur</h1>
      <div className="header-filters">
        <div className="select-game">
          <GiBroadsword className="icon-left" />
          <span>Select a game</span>
          <div className="icon-dropdown"></div>
        </div>
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input type="text" className="search-input" placeholder="Search" />
        </div>
        <div className="price-filter">
          <div className="filter-icon-text">
            <BsBagFill className="filter-icon" />
            <div className="filter-text">
              <span className="filter-title">Price</span>
              <span className="filter-value">All</span>
            </div>
          </div>
          <div className="icon-dropdown"></div>
        </div>
        <div className="item-type-filter">
          <div className="filter-icon-text">
            <FaFeather className="filter-icon" />
            <div className="filter-text">
              <span className="filter-title">Item Type</span>
              <span className="filter-value">All</span>
            </div>
          </div>
          <div className="icon-dropdown"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
