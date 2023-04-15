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
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      // submit form data to server
    } else {
      setErrors(errors);
    }
  };

 

  return (
    <div className="container signup-form">
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
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
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
                      <h2>Sign up to find work you love</h2>
                      <Form onSubmit={handleSubmit}>
                        
                        <div class="separator">
                          <div class="line"></div>
                          <div class="or">or</div>
                          <div class="line"></div>
                        </div>
                        <Row>
                          <Col>
                            <Form.Group controlId="firstName">
                              <Form.Label>First Name:</Form.Label>
                              <Form.Control
                                type="text"
                                value={firstName}
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
                          <Col>
                            <Form.Group controlId="lastName">
                              <Form.Label>Last Name:</Form.Label>
                              <Form.Control
                                type="text"
                                value={lastName}
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
                        <Form.Group controlId="email">
                          <Form.Label>Email:</Form.Label>
                          <Form.Control
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid   ">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="password">
                          <Form.Label>Password:</Form.Label>
                          <div className="input-group">
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                              isInvalid={!!errors.password}
                              required
                            />
                            <Button
                              variant="outline-secondary"
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

                        <Form.Group controlId="country">
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

                        <Form.Group controlId="termsAgreed">
                          <Form.Check
                            type="checkbox"
                            label="Yes, I understand and agree to the Jobify Terms of Service"
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

                        <Button type="submit">Submit</Button>
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
