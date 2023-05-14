import React, { useState } from "react";
import Logo2 from "../assets/images/Logo2.png";
import mobile_menu from "../assets/images/mobile_menu.svg";
import { Link } from "react-router-dom";

function ProfileHeader() {
  const [isMenuOpen, OpenMenu] = useState(false);
  const [isProfileOpen, ProfileCard] = useState(false);

  const handleMenuToggle = () => {
    OpenMenu(!isMenuOpen);
  };

  const hideProfileCard = () => {
    ProfileCard(!isProfileOpen);
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
                        Messages
                      </Link>
                    </button>
                  </li>
                  <hr />
                  <li className="nav-list-item">
                    <button className="list-btn-link">
                      <Link className="list-link" to="about-us">
                        Support
                      </Link>
                    </button>
                  </li>
                  <hr />
                </ul>
              </div>
              <div className="col-lg-3">
                <div className={`profile_info ${isMenuOpen ? "show" : ""}`}>
                  <button className="notificaton">
                    <img
                      src="https://img.icons8.com/material-sharp/26/null/bell.png"
                      alt="notification_bell"
                    />
                  </button>
                  <div className="profile">
                    <button className="profile_pic" onClick={hideProfileCard}>
                      <img
                        src="https://img.icons8.com/officel/50/null/person-male-skin-type-6.png"
                        alt="profile_pic"
                      />
                    </button>
                    <div
                      className={`profile_card ${
                        !isProfileOpen ? "hide" : null
                      }`}
                    >
                      <div className="profile_card_info">
                        <img
                          src="https://img.icons8.com/officel/50/null/person-male-skin-type-6.png"
                          alt="profile_pic"
                          className="profile_card_image"
                        />
                        <div>
                          {" "}
                          <h6 className="profile_name">Alaa Abi Ezzddine</h6>
                          <p className="profile_type">Freelancer</p>
                        </div>
                      </div>
                      <hr />
                      <div className="profile_links">
                      <Link to="profile" className="link-class">
                        <button className="profile_btn profile">                         
                          <img
                            src="https://img.icons8.com/ios/27/null/administrator-male--v1.png"
                            alt="icon"
                            className="profile_btn_image"
                          />
                          Profile
                        </button>
                        </Link>
                        <button className="profile_btn setting" >
                          <img
                            src="https://img.icons8.com/ios/26/null/settings--v1.png"
                            alt="icon"
                            className="profile_btn_image"
                          />
                          Settings
                        </button>
                        <button className="profile_btn log_out">
                          <img
                            src="https://img.icons8.com/ios/26/null/logout-rounded-left.png"
                            alt="icon"
                            className="profile_btn_image"
                          />
                          Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
