import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { Form, Button } from "react-bootstrap";

function Users() {
  const [accountType, setAccountType] = useState("");

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (accountType === "freelancer") {
      window.location.href = "/signup/freelancer";
    } else if (accountType === "client") {
      window.location.href = "/signup/client";
    } else {
      alert("Please select an account type.");
    }
  };

  return (
    <div class="newUser_container">
      <section class="gradient-form">
        <div class="container py-5">
          <button class="go_backBtn">
            <Link to="/" class="class_Link">
              <img
                src="https://img.icons8.com/ios-filled/16/00b074/back.png"
                alt="back_arrow"
              />
              Back
            </Link>
          </button>
          <div class="row d-flex justify-content-center align-items-center mt-md-3 h-100">
            <div class="col-xl-7">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-12">
                    <div class="card-body p-md-3 mx-md-4">
                      <div class="text-center">
                        <img
                          src={require(`../assets/images/Logo2.png`)}
                          alt="logo"
                          class="login-logo"
                        />
                      </div>
                      <div className="option">
                        <form onSubmit={handleSubmit}>
                          <fieldset className="account-type-fieldset">
                            <div className="account-type">
                            <div className="account-type-option freelancer-option">
                             <div>
                              <input
                                type="radio"
                                id="freelancer"
                                name="accountType"
                                value="freelancer"
                                checked={accountType === "freelancer"}
                                onChange={handleAccountTypeChange}
                                data-qa="freelancer-radio"
                              />
                               <span className="account-type-icon fas fa-user-tie"></span>
                              </div>
                              <label htmlFor="freelancer">                               
                              Sign up as a freelancer
                              </label>
                            </div>
                            <div className="account-type-option client-option">
                                    <div>
                              <input
                                type="radio"
                                id="client"
                                name="accountType"
                                value="client"
                                checked={accountType === "client"}
                                onChange={handleAccountTypeChange}
                                data-qa="client-radio"
                              />
                               <span className="account-type-icon fas fa-building"></span>
                              </div>
                              <label htmlFor="client">                    
                                Sign up as an employer
                              </label>
                            </div>
                            </div>
                          </fieldset>
                          <button
                            type="submit"
                            className="commonBtn btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            data-qa="submit-button"
                          >
                            Create Account
                          </button>
                        </form>
                        <div className="login_link d-flex align-items-center justify-content-center mt-3 pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <Link className="class_Link" to="/login">
                            Log in
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Users;
