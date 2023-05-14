import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Footer from "../components/Footer";
import AllJobs from "../components/AllJobs";

function Freelancer() {
  // create state for each filter group
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [search, setPageSearch] = useState("");

  const handlePageSearch = (e) => {
    setPageSearch(e.target.value);
  };
  const handleLocationSearch = (e) => {
    setLocation(e.target.value);
  };

  const handleCategorySearch = (e) => {
    setCategory(e.target.value);
  };
  
  const hideSideBar=(e)=>{
    
  }
  return (
    <div className="freelancer_page_wrapper">
      <ProfileHeader></ProfileHeader>
      <div className="freelancer_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3">
                  
                  <div className="side_filter">
                    <div className="sidenavbar">
                    <img src="https://img.icons8.com/ios/24/000000/collapse-arrow--v2.png" alt="arrow" className="arrow-down" onClick={hideSideBar}/>
                      <div className="filter-group">
                        <h3>Location</h3>
                       
                          <div className="options">
                            <input
                              type="text"
                              placeholder="Search locations"
                              value={location}
                              className="search_sidebar location_option"
                              onChange={handleLocationSearch}
                            />
                          </div>
                        
                      </div>
                      <hr/>
                      <div className="filter-group">
                        <h3>Job Type</h3>
                        <div className="dropdown">
                          <div className="options">
                            <ul className="jobtype_list">
                              <li onClick={() => setType("Full Time")}>
                                <input
                                  type="checkbox"
                                  className="checkbox-sidebar"
                                />
                                <p>Full Time</p>
                              </li>
                              <li onClick={() => setType("Part Time")}>
                                <input
                                  type="checkbox"
                                  className="checkbox-sidebar"
                                />
                                <p>Part Time</p>
                              </li>
                              <li onClick={() => setType("Freelancer")}>
                                <input
                                  type="checkbox"
                                  className="checkbox-sidebar"
                                />
                                <p>Freelancer</p>
                              </li>
                              <li onClick={() => setType("Internship")}>
                                <input
                                  type="checkbox"
                                  className="checkbox-sidebar"
                                />
                                <p>Internship</p>
                              </li>
                              <li onClick={() => setType("Full Time")}>
                                <input
                                  type="checkbox"
                                  className="checkbox-sidebar"
                                />
                                <p>Contract</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="filter-group">
                        <h3>Job Category</h3>
                        <div className="dropdown">
                          <div className="options">
                            <input
                              type="text"
                              placeholder="Search categories"
                              value={category}
                              className="search_sidebar category_option"
                              onChange={handleCategorySearch}
                            />
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="filter-group">
                        <h3>Salary</h3>
                        <div className="options">
                          <ul className="salary_list">
                            <li onClick={() => setSalary("Less than $50k")}>
                              <input
                                type="checkbox"
                                className="checkbox-sidebar"
                              />
                              <p>Less than $50k</p>
                            </li>
                            <li onClick={() => setSalary("$50k - $100k")}>
                              <input
                                type="checkbox"
                                className="checkbox-sidebar"
                              />
                              <p className="salary_range">$50k - $100k</p>
                            </li>
                            <li onClick={() => setSalary("$100k - $150k")}>
                              <input
                                type="checkbox"
                                className="checkbox-sidebar"
                              />

                              <p className="salary_range">$100k - $150k</p>
                            </li>
                            <li onClick={() => setSalary("More than $150k")}>
                              <input
                                type="checkbox"
                                className="checkbox-sidebar"
                              />
                              <p className="salary_range">More than $150k</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 jobs_list">
                  <div class="page_searchbar">
                    <input class="search_input" type="text" value={search}
                      onChange={handlePageSearch} placeholder="Search" />
                  </div>
                  {/* <div className="sorting">
                  <img src="https://img.icons8.com/dotty/32/00b074/mail-filter.png" alt="sorting-filter-icon" class="sorting-icon"/>
                  </div> */}
                  <div className="jobs_list">
                    <AllJobs />
                    <AllJobs />
                    <AllJobs />
                    <AllJobs />
                    <AllJobs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Freelancer;
