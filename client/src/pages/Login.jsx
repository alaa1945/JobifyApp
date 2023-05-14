import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  //const [result, setResult] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errors = {};

    if (!username) {
      errors.username = "This field can't be empty";
    }

    if (!password) {
      errors.password = "This field can't be empty";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    return errors;
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        const data = await response.json();
      return data;
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(errors);
    }
  };
  return (
    <div class="login_container">
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
                      <div className="signup_methods">
                        <div className="google-btn common_signupBtn">
                          <div className="google-icon-wrapper">
                            <img
                              className="google-icon"
                              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                              alt="google icon"
                            />
                          </div>
                          <p className="btn-text">Login with google</p>
                        </div>
                        <div className="linkedin-btn common_signupBtn">
                          <div className="google-icon-wrapper">
                            <img
                              className="google-icon"
                              src="https://www.svgrepo.com/show/475661/linkedin-color.svg"
                              loading="lazy"
                              alt="google icon"
                            />
                          </div>
                          <p className="btn-text">Login with LinkedIn</p>
                        </div>
                      </div>
                      <div class="separator">
                        <div class="line"></div>
                        <div class="or">or</div>
                        <div class="line"></div>
                      </div>
                      <Form className="mt-4">
                        <Form.Group controlId="username" className="mb-4">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Username or email address"
                            value={username}
                            onChange={(event) =>
                              setUsername(event.target.value)
                            }
                            isInvalid={!!errors.username}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.username}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="password">
                          <Form.Label>Password:</Form.Label>
                          <div className="input-group password_group">
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              value={password}
                              placeholder="Enter you password"
                              className="password_input"
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                              style={{
                                borderRight: errors.password
                                  ? "1px solid red"
                                  : "none",
                                borderRadius: errors.password ? "5px" : "0px",
                              }}
                              isInvalid={!!errors.password}
                            />

                            <Button
                              className="eye_btn"
                              variant="outline-secondary"
                              style={{
                                color: "black",
                                boxShadow: "none",
                                backgroundColor: "transparent",
                              }}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <i className="bi bi-eye-slash"></i>
                              ) : (
                                <i className="bi bi-eye"></i>
                              )}
                            </Button>

                            <Form.Control.Feedback type="invalid">
                              {errors.password}
                            </Form.Control.Feedback>
                          </div>
                        </Form.Group>

                        <div className="buttons_div text-center pt-1 mb-5 pb-1">
                          <Button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Log in
                          </Button>
                          <Link
                            className="text-muted class_Link"
                            to="resetPassword"
                          >
                            Forgot password?
                          </Link>
                        </div>

                        <div className="login_link d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link className="class_Link" to="/newUser">
                            Sign Up
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
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
