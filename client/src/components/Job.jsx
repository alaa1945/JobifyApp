import React from "react";

function Job(props) {
  return (
    <div>
      <div className="job">
        <div className="job-header">
          <div className="company-img-div">
            <img
              src={require(`../assets/images/Vectorleaf (1).png`)}
              alt="company-img"
              className="company-image"
            />
          </div>
          <div className="company-info-div">
            <p className="company-name">{props.name}</p>
            <h1 className="company-job">Web Developer</h1>
          </div>
        </div>
        <div className="job-footer">
          <div className="footer-left">
            <div className="job-location">
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
          <div className="footer-right">
            <img
              src={require(`../assets/images/saveIcon.png`)}
              alt="save-icon"
              className="save-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
