import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbarM">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} style={{ height: "40px" }} alt="Logo"/>
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas FaBars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/fundraisers"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Browse Fundraisers
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Fundraise For <i className="fa fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/howitworks"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              How It Works
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/new/fundraiser"
              className="nav-links1"
              onClick={closeMobileMenu}
            >
              Start Fundraiser
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"https://api.whatsapp.com/send?phone=917700975559"}
              className="nav-links-chat"
              onClick={closeMobileMenu}
            >
              Chat
            </Link>
          </li>
          <li>
            <div  className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign In
            </div>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
