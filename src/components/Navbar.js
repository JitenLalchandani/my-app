import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ brandName, mode, toggleMode }) {
  const isDarkMode = mode === "dark";

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {brandName}
        </Link>
        <button
          className="btn-icon navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <div className="drawer-body">
          <ul className="nav navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className={`theme-switch ${isDarkMode ? "theme-switch-on" : ""}`}
          onClick={toggleMode}
          aria-label={isDarkMode ? "Disable dark mode" : "Enable dark mode"}
        >
          <span className="theme-switch-track">
            <span className="theme-switch-thumb" />
          </span>
          <span className="theme-switch-label">
            {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
          </span>
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string,
  mode: PropTypes.oneOf(["light", "dark"]),
  toggleMode: PropTypes.func,
};

Navbar.defaultProps = {
  brandName: "Brand Name",
  mode: "light",
  toggleMode: () => {},
};
