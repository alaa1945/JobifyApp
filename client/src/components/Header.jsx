import React, { useState } from "react";
import Logo2 from "../assets/images/Logo2.png";
import mobile_menu from "../assets/images/mobile_menu.svg";
import {Link} from "react-router-dom";

function Header() {
  const [isMenuOpen, OpenMenu] = useState(false);

  const handleMenuToggle = () => {
    OpenMenu(!isMenuOpen);
  };

  return (
      <header className="header-navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 navigation">
              <div className="row">
                <div className="col-lg-2 col-sm-12 mobile-menu">
                  <Link to="/">
                    <img src={Logo2} alt="logo" className="logo" />
                  </Link>
                  <div class="menu-toggle" onClick={handleMenuToggle}>
                    <div class="hamburger">
                      <img src={mobile_menu} alt="ham-menu" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
                    <li className="nav-list-item">
                      <button className="list-btn-link">
                        <Link className="list-link" to="/">
                          Home
                        </Link>
                      </button>
                    </li>
                    <hr />
                    <li className="nav-list-item">
                      <button className="list-btn-link">
                        <Link className="list-link" to="jobs">
                          Search Jobs
                        </Link>
                      </button>
                    </li>
                    <hr />
                    <li className="nav-list-item">
                      <button className="list-btn-link">
                        <Link className="list-link" to="freelancers">
                          Find Talents
                        </Link>
                      </button>
                    </li>
                    <hr />
                    <li className="nav-list-item">
                      <button className="list-btn-link">
                        <Link className="list-link" to="about-us">
                          About Us
                        </Link>
                      </button>
                    </li>
                    <hr />
                  </ul>
                </div>
                <div className="col-lg-3">
                  <div className={`login-info ${isMenuOpen ? "show" : ""}`}>
                    <button className="list-btn-link login-info-btn login-btn">
                      <Link className="list-link" to="login">
                        Log In
                      </Link>
                    </button>
                    <button className="list-btn-link login-info-btn signup-btn commonBtn">
                      <Link className="btnLink list-link" to="newUser">
                        Sign Up
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
