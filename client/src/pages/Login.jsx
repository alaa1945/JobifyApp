import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div class="login_container">
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <button class="go_backBtn">
            <Link to="/" class="class_Link">
              <img
                src="https://img.icons8.com/ios-filled/16/00b074/back.png"
                alt="back_arrow"
              />
              Back
            </Link>
          </button>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-3 mx-md-4">
                      <div class="text-center">
                        <img
                          src={require(`../assets/images/Logo2.png`)}
                          alt="logo"
                          class="login-logo"
                        />
                      </div>

                      <form>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example11">
                            Username
                          </label>
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Username or email address"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                          <input
                            type="password"
                            id=""
                            class="form-control"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div class="buttons_div text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Log in
                          </button>
                          <Link
                            class="text-muted class_Link"
                            to="resetPassword"
                          >
                            Forgot password?
                          </Link>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <Link class="signup_link class_Link" to="/signup">
                            Sign Up
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
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

export default Login;
