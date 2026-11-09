import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar({ brandName }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{brandName}</a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" type="button" aria-expanded="false">
                  Menu
                </button>
                <div className="menu">
                  <a className="menu-item" href="/">Action</a>
                  <a className="menu-item" href="/">Another action</a>
                  <hr className="menu-divider" />
                  <a className="menu-item" href="/">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
Navbar.propTypes={
    brandName: PropTypes.string
};
Navbar.defaultProps={
    brandName: "Brand Name"
}