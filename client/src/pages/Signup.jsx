import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeUrl, setActiveUrl] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setActiveUrl(window.location.href);
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const [countryList, setCountryList] = useState([]);

  const validate = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "This field can't be empty";
    }
    if (!lastName) {
      errors.lastName = "This field can't be empty";
    }
    if (!email) {
      errors.email = "This field can't be empty";
    }
    if (!password) {
      errors.password = "This field can't be empty";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!country) {
      errors.country = "Please select your country";
    }
    if (!termsAgreed) {
      errors.termsAgreed = "You must agree to the terms of service";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    console.log(activeUrl);
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch(activeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            country: country,
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
    <div className="container signup_container">
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
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-12">
                    <div class="card-body px-md-3 py-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src={require(`../assets/images/Logo2.png`)}
                          alt="logo"
                          class="login-logo"
                        />
                      </div>
                      <Form onSubmit={handleSubmit}>
                        <div className="signup_methods">
                          <div className="google-btn common_signupBtn">
                            <div className="google-icon-wrapper">
                              <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google icon"
                              />
                            </div>
                            <p className="btn-text">Sign up with google</p>
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
                            <p className="btn-text">Sign up with LinkedIn</p>
                          </div>
                        </div>
                        <div class="separator">
                          <div class="line"></div>
                          <div class="or">or</div>
                          <div class="line"></div>
                        </div>
                        <Row>
                          <Col className="mb-4">
                            <Form.Group controlId="firstName">
                              <Form.Label>First Name:</Form.Label>
                              <Form.Control
                                type="text"
                                value={firstName}
                                placeholder="Enter you first name"
                                onChange={(event) =>
                                  setFirstName(event.target.value)
                                }
                                isInvalid={!!errors.firstName}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col className="mb-4">
                            <Form.Group controlId="lastName">
                              <Form.Label>Last Name:</Form.Label>
                              <Form.Control
                                type="text"
                                value={lastName}
                                placeholder="Enter you last name"
                                onChange={(event) =>
                                  setLastName(event.target.value)
                                }
                                isInvalid={!!errors.lastName}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-4" controlId="email">
                          <Form.Label>Email:</Form.Label>
                          <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter you best email"
                            onChange={(event) => setEmail(event.target.value)}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
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

                        <Form.Group className="mb-4" controlId="country">
                          <Form.Label>Country:</Form.Label>
                          <Form.Control
                            as="select"
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                            isInvalid={!!errors.country}
                          >
                            <option value="">Select your country...</option>
                            {countryList.map((country) => (
                              <option
                                key={country.alpha2Code}
                                value={country.name}
                              >
                                {country.name}
                              </option>
                            ))}
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            {errors.country}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="termsAgreed">
                          <Form.Check
                            type="checkbox"
                            label={
                              <span>
                                I have read and agree to the{" "}
                                <a href="/terms-of-service">Terms of Service</a>
                              </span>
                            }
                            className="terms_services"
                            checked={termsAgreed}
                            onChange={(event) =>
                              setTermsAgreed(event.target.checked)
                            }
                            isInvalid={!!errors.termsAgreed}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.termsAgreed}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" className="commonBtn">
                          Submit
                        </Button>
                        <div className="login_link d-flex align-items-center justify-content-center mt-3 pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <Link className="class_Link" to="/login">
                            Log in
                          </Link>
                        </div>
                      </Form>
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

export default Signup;
