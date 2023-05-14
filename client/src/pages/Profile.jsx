import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="profile-wrapper">
      <ProfileHeader></ProfileHeader>
      <div className="profile_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 mt-4 ">
              <button class="go_backBtn">
                <Link to="/freelancer" class="class_Link">
                  <div className="img-wrapper">
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/fluency-systems-regular/16/less-than.png"
                      alt="less-than"
                    />
                  </div>
                  Back To Job Board
                </Link>
              </button>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="profile_sidebar">
                    <div className="sidebar_header">
                      <img
                        src="https://img.icons8.com/ios/27/null/administrator-male--v1.png"
                        alt="icon"
                        className="profile_btn_image"
                      />
                      <div>
                        <h6 className="profile_name">Alaa Abi Ezzddine</h6>
                        <p className="profile_type">Freelancer</p>
                      </div>

                      <div className="profile_socials">
                        <a href="https://www.linkedIn.com" className="social_media">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.facebook.com" className="social_media">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" className="social_media">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="sidebar_body">
                      <h5>Contact info</h5>

                      <div className="contact_info">
                        <p className="contact-title">Location</p>
                        <h6 className="contact-description">Beirut,Lebanon</h6>
                      </div>

                      <div className="contact_info">
                        <p className="contact-title">E-mail</p>
                        <h6 className="contact-description">
                          alaa@smartvisionlb.com
                        </h6>
                      </div>

                      <div className="contact_info">
                        <p className="contact-title">Phone</p>
                        <h6 className="contact-description">+961-70299063</h6>
                      </div>

                      <div className="contact_info">
                        <p className="contact-title">Website</p>
                        <h6 className="contact-description">
                          <a href="https://www.alaaezdine.me" target="_blank" rel="noreferrer">
                            alaaezdine.me
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 profile_info">
                  <ul class="nav nav-tabs nav-pills">
                    <li class="nav-item">
                      <a
                        class="active"
                        data-bs-toggle="pill"
                        href="#tab-1"
                      >
                        Overview
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-bs-toggle="pill"
                        href="#tab-2"
                      >
                        History
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        Setting
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="tab-1" class="tab-pane fade p-0 active show">
                      <div className="description-div">
                        <h6 className="description-title">About</h6>
                        <p className="description-content">
                          Developer with over 5 years' experience working in
                          both the public and private sectors. Diplomatic,
                          personable, and adept at managing sensitive
                          situations. Highly organized, self-motivated, and
                          proficient with computers. Looking to boost students’
                          satisfactions scores for International University.
                          Bachelor's degree in communications. It describes the
                          candidate's relevant experience, skills, and
                          achievements. The purpose of this career summary is to
                          explain your qualifications for the job in 3-5
                          sentences and convince the manager to read the whole
                          resume document.
                        </p>
                      </div>
                      <div className="description-div">
                        <h6 className="description-title">Education</h6>
                        <ul className="exp-description">
                          <li>
                            <h6 className="exp-title">
                              BCA - Bachelor of Computer Applications
                            </h6>
                            <p className="exp-description">
                              International University - (2004 - 2010)
                            </p>
                            <p className="exp-description">
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </li>
                          <li>
                            <h6 className="exp-title">
                              BCA - Bachelor of Computer Applications
                            </h6>
                            <p className="exp-description">
                              International University - (2004 - 2010)
                            </p>
                            <p className="exp-description">
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="description-div">
                        <h6 className="description-title">Experience</h6>
                        <ul className="exp-description">
                          <li>
                            <h6 className="exp-title">
                              Web Design & Development Team Leader
                            </h6>
                            <p className="exp-description">
                              Smart Vision Agency - (2013 - 2016)
                            </p>
                            <p className="exp-description">
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </li>
                          <li>
                            <h6 className="education-title">
                              BCA - Bachelor of Computer Applications
                            </h6>
                            <p className="education-description">
                              International University - (2004 - 2010)
                            </p>
                            <p className="education-description">
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div className="description-div">
                        <h6 className="description-title">Skills</h6>
                        <div className="tech-skills">
                          <p className="tech-skill">Html</p>
                          <p className="tech-skill">Css</p>
                          <p className="tech-skill">Js</p>
                          <p className="tech-skill">Bootstrap</p>
                          <p className="tech-skill">Figma</p>
                        </div>
                      </div>

                      <div className="description-div">
                        <h6 className="description-title">Spoken Language</h6>
                        <ul className="soft-skills">
                          <li>English</li>
                          <li>Arabic</li>
                          <li>Well Organized</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      id="tab-3" class="tab-pane fade p-0 ">
                      <form action="#">
                        <div>
                          <h5 class="fs-17 fw-semibold mb-3 mb-0">
                            My Account
                          </h5>
                          <div class="text-center">
                            <div class="mb-4 profile-user">
                              <img
                                src="assets/images/user/img-02.jpg"
                                class="rounded-circle img-thumbnail profile-img"
                                id="profile-img"
                                alt="profile"
                              />
                              <div class="p-0 rounded-circle profile-photo-edit">
                                <input
                                  id="profile-img-file-input"
                                  type="file"
                                  class="profile-img-file-input"
                                  onchange="previewImg()"
                                />
                                <label
                                  for="profile-img-file-input"
                                  class="profile-photo-edit avatar-xs"
                                >
                                  <i class="uil uil-edit"></i>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="firstName" class="form-label">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="firstName"
                                  value="Jansh"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="lastName" class="form-label">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="lastName"
                                  value="Dickens"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="choices-single-categories"
                                  class="form-label"
                                >
                                  Account Type
                                </label>

                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="email" class="form-label">
                                  Email
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="email"
                                  value="Jansh@gmail.com"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mt-4">
                          <h5 class="fs-17 fw-semibold mb-3">Profile</h5>
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="mb-3">
                                <label
                                  for="exampleFormControlTextarea1"
                                  class="form-label"
                                >
                                  Introduce Yourself
                                </label>
                                <textarea
                                  class="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="5"
                                >
                                  Developer with over 5 years' experience
                                  working in both the public and private
                                  sectors. Diplomatic, personable, and adept at
                                  managing sensitive situations. Highly
                                  organized, self-motivated, and proficient with
                                  computers. Looking to boost students’
                                  satisfactions scores for International
                                  University. Bachelor's degree in
                                  communications.
                                </textarea>
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="languages" class="form-label">
                                  Languages
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="languages"
                                  value="English, German, French"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="choices-single-location"
                                  class="form-label"
                                >
                                  Location
                                </label>

                              </div>
                            </div>

                            <div class="col-lg-12">
                              <div class="mb-3">
                                <label for="attachmentscv" class="form-label">
                                  Attachments CV
                                </label>
                                <input
                                  class="form-control"
                                  type="file"
                                  id="attachmentscv"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mt-4">
                          <h5 class="fs-17 fw-semibold mb-3">Social Media</h5>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="facebook" class="form-label">
                                  Facebook
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="facebook"
                                  value="https://www.facebook.com"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="twitter" class="form-label">
                                  Twitter
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="twitter"
                                  value="https://www.twitter.com"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="linkedin" class="form-label">
                                  Linkedin
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="linkedin"
                                  value="https://www.linkedin.com"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="whatsapp" class="form-label">
                                  Whatsapp
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="whatsapp"
                                  value="https://www.whatsapp.com"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mt-4">
                          <h5 class="fs-17 fw-semibold mb-3 mb-3">
                            Change Password
                          </h5>
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="mb-3">
                                <label
                                  for="current-password-input"
                                  class="form-label"
                                >
                                  Current password
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  placeholder="Enter Current password"
                                  id="current-password-input"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="new-password-input"
                                  class="form-label"
                                >
                                  New password
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  placeholder="Enter new password"
                                  id="new-password-input"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="confirm-password-input"
                                  class="form-label"
                                >
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  class="form-control"
                                  placeholder="Confirm Password"
                                  id="confirm-password-input"
                                />
                              </div>
                            </div>

                            <div class="col-lg-12">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="verification"
                                />
                                <label
                                  class="form-check-label"
                                  for="verification"
                                >
                                  Enable Two-Step Verification via email
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mt-4 text-end">
                          <a href="https://www.any.com" class="btn btn-primary">
                            Update
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
