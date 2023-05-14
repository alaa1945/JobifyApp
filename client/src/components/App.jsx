import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css.map";
import "../assets/styles.css";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Freelancer from "../pages/Freelancer";
import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import JobDetails from "./JobDetails";
function App() {
  // React.useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //     "X-RapidAPI-Key": "2155e38798mshedbc5d7b11e5b0cp1d19eajsnf9958846b2fe",
  //     "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
  //   },
  //   body: '{"search_terms":"python programmer","location":"Chicago, IL","page":"1"}',
  // };

  // fetch("https://linkedin-jobs-search.p.rapidapi.com/", options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response[0].job_title))
  //   .catch((err) => console.error(err));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newUser" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/client" element={<Signup />} />
        <Route path="/signup/freelancer" element={<Signup />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/freelancer/profile" element={<Profile />} />
        <Route path="/freelancer/job-details" element={<JobDetails />} />
      </Routes>

      {/* <p>{!data ? "Loading..." : data}</p> */}
    </div>
  );
}

export default App;
