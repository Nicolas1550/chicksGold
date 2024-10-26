import React, { useState } from "react";
import { FaChevronDown, FaUser, FaBars } from "react-icons/fa";
import "./navbarStyles.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img
            src="/chicks-logo-large.svg"
            alt="Chicks Gold Logo"
            className="logo"
          />
        </div>
        <div className="separator"></div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <FaBars className="hamburger-icon" />
        </div>

        <ul className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>
          <li>
            <button className="link-button">
              Currency <FaChevronDown className="icon" />
            </button>
          </li>
          <li>
            <button className="link-button">
              Items <FaChevronDown className="icon" />
            </button>
          </li>
          <li>
            <button className="link-button">
              Accounts <FaChevronDown className="icon" />
            </button>
          </li>
          <li>
            <button className="link-button">
              Services <FaChevronDown className="icon" />
            </button>
          </li>
          <li>
            <button className="link-button">
              Swap <FaChevronDown className="icon" />
            </button>
          </li>
          <li>
            <button className="link-button">
              Sell <FaChevronDown className="icon" />
            </button>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul className="navbar-actions">
          <li>
            <a href="/">
              USD <FaChevronDown className="icon" />
            </a>
          </li>
          <li>
            <a href="/">
              Cart (5) <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li>
            <button className="btn-signin">
              Sign In <FaUser className="icon-user" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
