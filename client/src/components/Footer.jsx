import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12 footer-header">
                    <div className="footer-info">
                      <h2 className="footer-title">
                      The ultimate job portal for your career.
                      </h2>
                      <p className="footer-paragraph">
                      W have the most comprehensive platform to help you achieve your career goals.
                      </p>
                    </div>
                    <div className="cta-section">
                      <button className="list-btn-link commonBtn login-btn ">
                        <Link className="btnLink list-link" to="login">
                          Log In
                        </Link>
                      </button>
                      <button className="list-btn-link login-info-btn signup-btn commonBtn">
                        <Link className="btnLink list-link" to="signup">
                          Sign Up
                        </Link>
                      </button>
                    </div>
                  </div>
                  
                </div>
                <div className="line"></div>
                <div class="row footer-bottom">
                  <div class="col-lg-4 col-md-6 mb-4 col-sm-6 mb-lg-0 ">
                   <img src={require(`../assets/images/Logo2.png`)} className="footer-logo" alt="footer-logo"/>
                   <div className="contact-info">
                    <img src={require(`../assets/images/message-icon.png`)} alt="message-icon"/>
                    <p class="contact-email footer-links">
                      Contact Us at:
                      <span>
                           <a href="https://liverpoolfc.com" className="company-email">support@jobify.com</a>
                      </span>
                    </p>
                    </div>
                    <ul class="list-inline mt-4">
                      <li class="list-inline-item">
                        <img src="https://img.icons8.com/material/24/FFFFFF/instagram-new--v1.png" alt="insta" class="social-icon" />
                      </li>
                      <li class="list-inline-item">
                        <img src="https://img.icons8.com/material-outlined/24/FFFFFF/facebook-f.png" alt="facebook" class="social-icon" />
                      </li>
                      <li class="list-inline-item">
                        <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/linkedin-2--v1.png" alt="linkedIn" class="social-icon" />
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0">
                    <h6 class="footer-links-title mb-4">Links</h6>
                    <ul class="list-unstyled mb-0">
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Home
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          About
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Team
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0 ">
                    <h6 class="footer-links-title mb-4">Resources</h6>
                    <ul class="list-unstyled mb-0">
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          How to hire
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          How to find work
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Freelancers
                        </a>
                      </li>
                       <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Projects
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0 ">
                    <h6 class="footer-links-title mb-4">Resources</h6>
                    <ul class="list-unstyled mb-0">
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                         Careers
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Help
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Support
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Community
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0 ">
                    <h6 class="footer-links-title mb-4">Company</h6>
                    <ul class="list-unstyled mb-0">
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Terms & Conditions
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Privacy
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Help & Support
                        </a>
                      </li>
                      <li class="mb-2">
                        <a href="https://liverpoolfc.com" class="footer-links">
                          Cookie Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Footer;
