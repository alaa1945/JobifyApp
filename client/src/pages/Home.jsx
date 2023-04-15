import React from "react";
import Job from "../components/Job";
import hero from "../assets/images/hero.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="description">
                <h1 className="hero-title">
                  Find the perfect job with <span>Jobify</span>
                </h1>
                <p className="hero-about">
                  Looking for your dream job? Our job listing and posting
                  website has got you covered. With thousands of job
                  opportunities updated daily, you're sure to find your perfect
                  fit.
                </p>
                <button className="commonBtn hero-btn">
                  <Link className="btnLink hero-link" to="login">
                    Explore
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img">
                <img src={hero} className="hero" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="guide">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="guide-description">
                <h2 className="guide-title">How it works?</h2>
                <p className="guide-info">
                  Our website offers a user-friendly interface that makes it
                  easy for both job seekers and employers to find what they
                  need.
                </p>
              </div>
              <div className="row steps">
                <div className="col-lg-4 step">
                  <div className="icons-div">
                    <img
                      src="https://img.icons8.com/ios/50/FFFFFF/guest-male.png"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <h3 className="step-title">Register Your Account</h3>
                  <p className="step-description">
                    Job seekers and employers can register for a free account
                    our website to get started.
                  </p>
                </div>
                <div className="col-lg-4 step">
                  <div className="icons-div">
                    <img
                      src="https://img.icons8.com/ios/50/FFFFFF/reviewer-male.png"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <h3 className="step-title">Apply or Post a New Jobs</h3>
                  <p className="step-description">
                    Start searching for jobs that match your skills and apply on
                    the website or post a job.
                  </p>
                </div>
                <div className="col-lg-4 step">
                  <div className="icons-div">
                    <img
                      src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/FFFFFF/external-Hired-recruitment-nawicon-detailed-outline-nawicon.png"
                      alt="icon"
                      className="icon"
                    />
                  </div>
                  <h3 className="step-title">Get Hired Immediately</h3>
                  <p className="step-description">
                    Apply for the job and get hired immediately by the employer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="category-description">
                <h2 className="category-title">Explore by category</h2>
                <p className="category-info">
                  Explore job opportunities on our website. We offer a wide
                  range of categories to help job seekers find the right job for
                  their skills and experience.
                </p>
              </div>
              <div className="jobs-category">
                <div className="row mb-lg-4">
                  <div className="col-lg-3">
                    <Link to="Job" href="/job" className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div1">
                          <img
                            src={require(`../assets/images/business.png`)}
                            className="icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">Business development</h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div2">
                          <img
                            src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/FFFFFF/external-customer-service-testimonials-and-feedback-smashingstocks-glyph-smashing-stocks.png"
                            className="icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">Customer Service</h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div3">
                          <img
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/imac-settings.png"
                            className=" icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">Web Development</h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div4">
                          <img
                            src="https://img.icons8.com/external-justicon-lineal-justicon/64/FFFFFF/external-app-development-responsive-web-design-justicon-lineal-justicon.png"
                            className="icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">App Development</h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <Link className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div5">
                          <img
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/web-design.png"
                            className="icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">UI/UX Designer</h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div6">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/total-sales-1.png"
                            className="icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">
                          Sales & Communication
                        </h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div7">
                          <img
                            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-marketing-marketing-flatart-icons-outline-flatarticons.png"
                            className="icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">Marketing</h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-3">
                    <Link className="link">
                      <div className="category">
                        <div className="icons-div" id="icons-div8">
                          <img
                            src="https://img.icons8.com/dotty/80/FFFFFF/video-editing.png"
                            className="icon category-icon"
                            alt="category-icon"
                          />
                        </div>
                        <h3 className="category-title">Video Editing</h3>
                        <p className="vacency">
                          <span className="num-of-vacencies">120</span>{" "}
                          Vacencies
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <button className="commonBtn hero-btn">
                <Link className="btnLink hero-link" to="login">
                  Explore
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="offer-info job-offer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <img src={hero2} alt="person" className="influencer-image" />
                </div>
                <div className="col-lg-6 mt-5">
                  <h3 className="offer-info-title">
                    Help you get the best job that fits you
                  </h3>
                  <ul className="offer-info-list">
                    <li>
                      <div className="list-imgDiv">
                        <img
                          src="https://img.icons8.com/material-sharp/24/facf32/best-seller.png"
                          alt="icon"
                          className="list-icon"
                        />
                      </div>
                      <div className="offer-description">
                        <h3>Find the best Jobs</h3>
                        <p>
                          Find the best jobs that match your skillset and
                          interests.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="list-imgDiv">
                        <img
                          src={require(`../assets/images/search.png`)}
                          alt="icon"
                          className="list-icon"
                        />
                      </div>
                      <div className="offer-description">
                        <h3>Seamless searching</h3>
                        <p>
                          With our powerful search tools, you can quickly find
                          the job listings that match your criteria
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="list-imgDiv">
                        <img
                          src="https://img.icons8.com/ios/26/facf32/group-of-companies.png"
                          alt="icon"
                          className="list-icon"
                        />
                      </div>
                      <div className="offer-description">
                        <h3>Get Hired In Top Companies</h3>
                        <p>
                          We help you find a job in the best companies that
                          match your skills and aspirations.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-jobs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="featured-jobs-info">
                <h2 className="featured-jobs-title">Featured Jobs</h2>
                <p className="featured-jobs-description">
                  Find and search for jobs from all over the world.
                </p>
              </div>
              <div className="jobs-collection-div">
                <ul className="nav nav-tabs nav-pills">
                  <li>
                    <a data-bs-toggle="pill" className="active" href="#tab-1">
                      Recent Jobs
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="pill" href="#tab-2">
                      Featured Jobs
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="pill" href="#tab-3">
                      Freelancer
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="pill" href="#tab-4">
                      Full Time
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="pill" href="#tab-5">
                      Part Time
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div
                    className="jobs-collection tab-pane fade show p-0 active"
                    id="tab-1"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                    </div>
                    <div className="row mt-lg-5">
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Upwork" />
                      </div>
                    </div>
                  </div>

                  <div className="jobs-collection tab-pane fade p-0" id="tab-2">
                    <div className="row">
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                    </div>
                    <div className="row mt-lg-5">
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="Facebook" />
                      </div>
                    </div>
                  </div>

                  <div
                    className="jobs-collection tab-pane fade  p-0 "
                    id="tab-3"
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                    </div>
                    <div className="row mt-lg-5">
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="linkedIn" />
                      </div>
                    </div>
                  </div>

                  <div className="jobs-collection tab-pane fade p-0" id="tab-4">
                    <div className="row">
                      <div className="col-lg-3">
                        <Job name="freelance" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="freelance" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="freelance" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="freelance" />
                      </div>
                    </div>
                    <div className="row mt-lg-5">
                      <div className="col-lg-3">
                        <Job name="freelance" />
                      </div>
                      <div className="col-lg-3">
                        <Job />
                      </div>
                      <div className="col-lg-3">
                        <Job name="freelance" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="freelance" />
                      </div>
                    </div>
                  </div>

                  <div className="jobs-collection tab-pane fade p-0" id="tab-5">
                    <div className="row">
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                    </div>
                    <div className="row mt-lg-5">
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                      <div className="col-lg-3">
                        <Job name="fiver" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="view-more-div">
                  <Link className="view-more-link">See more jobs</Link>
                  <img
                    src={require(`../assets/images/arrow.png`)}
                    alt="arrow"
                    class="left-arrow-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offer-info job-talent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row job-talent">
                <div className="col-lg-6">
                  <img src={hero3} alt="person" className="influencer-image" />
                </div>
                <div className="col-lg-6 mt-5">
                  <h3 className="offer-info-title">
                    Help you to find the best freelancer for your job.
                  </h3>
                  <p className="offer-info-description">
                    We understand that finding the right freelancer for your
                    project can be time-consuming.That's why we created Jobify.
                  </p>
                  <ul className="offer-info-list">
                    <li>
                      <div className="offer-description">
                        <img
                          src={require(`../assets/images/rightTick.jpg`)}
                          alt="icon"
                          className="list-icon"
                        />
                        <p>
                          With just a few clicks, you can filter and browse
                          through a large pool of freelancers.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="offer-description">
                        <img
                          src={require(`../assets/images/rightTick.jpg`)}
                          alt="icon"
                          className="list-icon"
                        />
                        <p>
                          Our platform streamlines the hiring process, making it
                          easy for you to find and hire the best freelancers.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="offer-description">
                        <img
                          src={require(`../assets/images/rightTick.jpg`)}
                          alt="icon"
                          className="list-icon"
                        />
                        <p>
                          Our platform features a pool of expert freelancers
                          from various fields and industries.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <button className="commonBtn hero-btn">
                    <Link className="btnLink hero-link" to="login">
                      Explore
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
