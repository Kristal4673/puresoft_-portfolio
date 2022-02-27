import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Resume from "./Resume/Crystal Resume 2022.pdf";

import "./Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className="section">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            PureSoft Portfollio
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                href="#me"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/resume"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                href={Resume}
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            MENU
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
