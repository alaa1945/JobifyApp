import React from "react";
import ProfileHeader from "./ProfileHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function JobDetails() {
  return (
    <div className="job-details-wrapper">
      <ProfileHeader></ProfileHeader>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 mb-4">
        <button class="go_backBtn">
          <Link to="/freelancer" class="class_Link">
            <div className="img-wrapper">
          <img width="16" height="16" src="https://img.icons8.com/fluency-systems-regular/16/less-than.png" alt="less-than"/>
          </div>
            Back To Job Board
          </Link>
        </button>
        </div>
          <div className="col-xl-9 col-lg-11 mb-8 job-details-container">
            <div className="jobs-details-div">
              <div className="jobs-details-header">
                <div className="job-header">
                  <div className="job-header-left">
                  <div className="company-img-div">
                    <img
                      src={require(`../assets/images/Vectorleaf (1).png`)}
                      alt="company-img"
                      className="company-image"
                    />
                  </div>
                  <div className="company-info-div">
                    <h3 className="company-job">Web Developer</h3>
                  <Link className="company-name"><p >Any</p></Link>
                  </div>
                  </div>
                  <div className="posted_date">
                    <p className="date">19 June 2023</p>
                  </div>
                
                </div>
                <div className="cta-section">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="commonBtn applyBtn"
                    >
                      Apply To This Job
                    </button>
                    <button className="commonBtn saveBtn">Save Job</button>
                  </div>
              </div>
              <hr />
              <div className="jobs-details-body">
                <div className="row job-description-1">
                  <div className="col-md-4 job-type">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48Zz48Zz48cGF0aCBmaWxsPSIjMDBiMDc0IiBkPSJNMTIgMTJhLjUuNSAwIDAgMCAwLTFIOGEyLjUgMi41IDAgMCAxIDAtNWgxVjRoMnYyaDIuNXYySDhhLjUuNSAwIDAgMCAwIDFoNGEyLjUgMi41IDAgMCAxIDAgNWgtMXYySDl2LTJINi41di0yem04LTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMwIDQuNDc3IDAgMTBzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTB6Ii8+PC9nPjwvZz48L3N2Zz4="
                      className="budget-icon"
                      alt="budget-icon"
                    />
                    <p>
                      80-90K<span> $</span>
                    </p>
                  </div>
                  <div className="col-md-4 job-type">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDE4IDIyIj48Zz48Zz48cGF0aCBmaWxsPSIjMDBiMDc0IiBkPSJNNyA5YTIgMiAwIDEgMSA0IDAgMiAyIDAgMCAxLTQgMHptOC4zNjQgNi4zNjRhOSA5IDAgMSAwLTEyLjcyOCAwTDkgMjEuNzI4bDYuMzY0LTYuMzY0eiIvPjwvZz48L2c+PC9zdmc+"
                      className="location-icon"
                      alt="location-icon"
                    />
                    <p className="country">London</p>
                  </div>
                  <div className="col-md-4 job-type">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48Zz48Zz48cGF0aCBmaWxsPSIjMDBiMDc0IiBkPSJNNyAydjJoNlYyek01IDRWMWExIDEgMCAwIDEgMS0xaDhhMSAxIDAgMCAxIDEgMXYzaDRhMSAxIDAgMCAxIDEgMXY1aC03VjhIN3YySDBWNWExIDEgMCAwIDEgMS0xem00IDZoMnYzSDl6bS0yIDJ2M2g2di0zaDd2N2ExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMXYtN3oiLz48L2c+PC9nPjwvc3ZnPg=="
                      className="type-icon"
                      alt="type-icon"
                    />
                    <p className="type">Fulltime</p>
                  </div>
                </div>
                <div className="row job-description">
                  <div className="col-md-4 detail">
                    <p className="detail-title">Career Level</p>
                    <h6 className="detail-description">Web Development</h6>
                  </div>
                  <div className="col-md-4 detail">
                    <p className="detail-title">Experience</p>
                    <h6 className="detail-description">Minimum 1 year</h6>
                  </div>
                  <div className="col-md-4 detail">
                    <p className="detail-title">Company Size</p>
                    <h6 className="detail-description">5-10 employees</h6>
                  </div>
                  </div>
                  <div className="row job-description mb-0">
                  <div className="col-md-4 detail">
                    <p className="detail-title">Soft Skills</p>
                    <ul className="soft-skills">
                      <li>English</li>
                      <li>Arabic</li>
                      <li>Well Organized</li>
                    </ul>
                  </div>
                  <div className="col-md-4 detail">
                    <p className="detail-title">Technical Skills</p>
                    <div className="tech-skills">
                      <p className="tech-skill">Html</p>
                      <p className="tech-skill">Css</p>
                      <p className="tech-skill">Js</p>
                      <p className="tech-skill">Bootstrap</p>
                      <p className="tech-skill">Figma</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="jobs-details-footer">
                <div className="job-description-3">
                  <div className="description-div">
                    <h6 className="description-title">Job Description</h6>
                    <p className="description-content">
                      Gubagoo is a fast growing provider of messaging and
                      commerce solutions for automotive dealers changing the
                      future of how people find, buy and service their vehicles.
                    </p>
                  </div>
                  <div className="description-div">
                    <h6 className="description-title">Your Role:</h6>
                    <p className="description-content">
                      We’re looking for a passionate individual to design
                      beautiful and functional products for our customers at
                      Gubagoo. We move very fast and you will be expected to
                      contribute to a cross-functional product development
                      squad, that includes product managers and developers, to
                      deliver the UX and UI for the team to bring to life. We
                      are serious about remote work. You can work for from
                      anywhere.
                    </p>
                  </div>
                  <div className="description-di mb-1">
                    <h6 className="description-title">
                      What will you be doing:
                    </h6>
                    <ul className="job-role">
                      <li>
                        Contribute new controls or design improvements to our
                      </li>
                      <li>
                        Take ownership of the successful delivery of features
                      </li>
                      <li>Help set and achieve quarterly goals</li>
                      <li>Ship a TON of product improvements and features</li>
                    </ul>
                  </div>
                </div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="commonBtn"
                >
                  Apply To This Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-5">
              <div class="text-center mb-4">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Apply For This Job
                </h5>
              </div>
              <div class="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="mb-3">
                <label for="nameControlInput" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nameControlInput"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="emailControlInput2" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailControlInput2"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="messageControlTextarea" class="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="messageControlTextarea"
                  rows="4"
                  placeholder="Enter your message"
                  style={{ height: `149px` }}
                ></textarea>
              </div>
              <div class="mb-4">
                <label class="form-label" for="inputGroupFile01">
                  Resume Upload
                </label>
                <input type="file" class="form-control" id="inputGroupFile01" />
              </div>
              <button type="submit" className="w-100 commonBtn">
                Send Application
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default JobDetails;
