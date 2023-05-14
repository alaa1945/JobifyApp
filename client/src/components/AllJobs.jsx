import React from "react";

function AllJobs() {
  return (
    <div className="AllJobs">
      <div className="jobs-top">
        <div className="job-header">
          <div className="company-img-div">
            <img
              src={require(`../assets/images/Vectorleaf (1).png`)}
              alt="company-img"
              className="company-image"
            />
          </div>
          <div className="company-info-div">
            <h3 className="company-job">Web Developer</h3>
            <p className="company-name">Any</p>
          </div>
        </div>
        <div className="job-budget">
          <img
            src={require(`../assets/images/budget-icon.png`)}
            className="budget-icon"
            alt="budget-icon"
          />
          <h6>
            80-90K<span> $</span>
          </h6>
        </div>
      </div>
      <p className="job-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className="jobs-bottom">
      <div className="jobs-bottom-left">
          <div className="job-type">
            <p className="country">HTML</p>
          </div>
          <div className="job-type">
            <p className="type">CSS</p>
          </div>
        </div>
        <div className="jobs-bottom-right">
          <div className="job-type">
            <img
              src={require(`../assets/images/locationIcon.png`)}
              className="location-icon"
              alt="location-icon"
            />
            <p className="country">London</p>
          </div>
          <div className="job-type">
            <img
              src={require(`../assets/images/jobIcon.png`)}
              className="type-icon"
              alt="type-icon"
            />
            <p className="type">fulltime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllJobs;
