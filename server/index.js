const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
mongoose.set("strictQuery", false);

//serve static files the client-side React application.
//"__dirname" represents the current directory
app.use(express.static(path.resolve(__dirname, "../client/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//connects to a MongoDB database
//mongoose.connect("mongodb://127.0.0.1:27017/JobifyDataBase");
var connection = mongoose.createConnection("mongodb+srv://aae17:newcluster77@cluster0.gwrw9au.mongodb.net/Jobify_DataBase?retryWrites=true&w=majority");

// mongoose.connect(
//   "mongodb+srv://aae17:newcluster77@cluster0.gwrw9au.mongodb.net/Jobify_DataBase?retryWrites=true&w=majority"
// );
// Define the schema for the companies table
// const ClientSchema = new mongoose.Schema({
//   id: { type: mongoose.Schema.Types.ObjectId,unique:true },
//   name: { type: String, required: true },
//   email: { type: String, required: true,unique:true },
//   password: { type: String, required: true },
//   phone: { type: String, required: true,unique:true },
//   created_at: { type: Date, default: Date.now },
// });

// const ClientProfile_Schema = new mongoose.Schema({
//   client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
//   website: { type: String, required: true },
//   bio: { type: String, required: true },
//   photo: { type: String, required: false },
//   links: { type: [String], required: false },
//   location: { type: String, required: true },
// });

// // Define the schema for the freelancers table
// const FreelancerSchema = new mongoose.Schema({
//   id: { type: mongoose.Schema.Types.ObjectId,unique:true },
//   name: { type: String,required:true },
//   email: { type: String,required:true,unique:true },
//   password: { type: String,required:true },
//   phone: { type: String,required:true , unique:true },
//   created_at: { type: Date ,default: Date.now},
// });
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  created_at: { type: Date },
});


// const FreelancerProfile_Schema = new mongoose.Schema({
//   freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer" },
//   skills: { type: [String], required: true },
//   experience: { type: [String], required: true },
//   bio: { type: String, required: true },
//   photo: { type: String, required: false },
//   links: { type: [String], required: false },
//   location: { type: String, required: true },
// });

// const LandedJobSchema = new mongoose.Schema({
//   job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
//   freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer" },
//   id: { type: mongoose.Schema.Types.ObjectId },
// });

// const PaymentSchema = new mongoose.Schema({
//   job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
//   freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer" },
//   id: { type: mongoose.Schema.Types.ObjectId },
//   amount: { type: String, required: true },
//   paid_at: { type: Date, default: Date.now },
// });
// Define the schema for the jobs table
// const JobSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   location: { type: String, required: true },
//   client_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Client",
//   },
//   category: { type: String, required: true },
//   duration: { type: String, required: true },
//   budget: { type: Number, required: true },
//   posted_date: { type: Date, required: true },
// });

// Define the schema for the job_applications table
// const JobApplicationSchema = new mongoose.Schema({
//   job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
//   freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Freelancer" },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   title: { type: String, required: true },
//   cover_letter: { type: String, required: true },
//   date_applied: { type: Date, default: Date.now },
// });

// Create the models for each table
const Client = connection.model("Client", UserSchema);
// const ClientProfile = mongoose.model("Client_Profile", ClientProfile_Schema);
// const Job = mongoose.model("Job", JobSchema);
// const JobApplication = mongoose.model("Job_Application", JobApplicationSchema);
const Freelancer = connection.model("Freelancer", UserSchema);
// const FreelancerProfile = mongoose.model(
//   "Freelancer_Profile",
//   FreelancerProfile_Schema
// );
// const Landed_Job = mongoose.model("Landed_Job", LandedJobSchema);
// const Payment = mongoose.model("Payment", PaymentSchema);

// Create the tables in the database
// FreelancerProfile.createCollection();
Client.createCollection();
// ClientProfile.createCollection();
Freelancer.createCollection();
// JobApplication.createCollection();
// Job.createCollection();
// Landed_Job.createCollection();
// Payment.createCollection();

//Defines an endpoint at "/api"
app.get("/api", (req, res) => {
  console.log("logged");
  res.json({ message: "Hello from server!" });
});

//get a specific freelancer
app.get("/api/freelancer/:id", (req, res) => {
  //read this parameter
  // const freelancer = freelancers.find((f) => f.id === parseInt(req.params.id));
  // if (!freelancer) {
  //   res.status(404).send("Freelancer not found");
  // }
  // res.send(freelancer);
});

//add new freelancers
app.post("/api/freelancer", (req, res) => {
  // const schema = {
  //   name: Joi.string().min(3).required(),
  // };
  // const result = Joi.validate(req.body, schema);
  // if (result.error) {
  //   res.status(400).send(result.error.details[0].message);
  //   return;
  // }
  // const freelancer = { id: 4, name: req.body.name };
  // freelancers.push(freelancer);
  // res.send(freelancer);
});

app.post("/signup/:id", (req, res) => {
  const urlId = req.params.id;
  console.log(urlId);
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const country = req.body.country;
  const created_at = new Date().toLocaleString("en-US", { hour12: false });
  if (urlId == "freelancer") {
    const newUser = new Freelancer({
      name: name,
      email: email,
      password: password,
      country: country,
      created_at: created_at,
    });

    newUser
      .save()
      .then((savedFreelancer) => {
        console.log("Freelancer saved to database:", savedFreelancer);
        res.render("/login");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Failed to save freelancer to database");
      });
  } else {
    const newUser = new Client({
      name: name,
      email: email,
      password: password,
      country: country,
      created_at: created_at,
    });

    newUser
      .save()
      .then((savedClient) => {
        console.log("Client saved to database:", savedClient);
        res.redirect('/login');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Failed to save client to database");
      });
  }
});

app.post("/login/:id", (req, res) => {
 const userId=req.params.id;

 if(userId=="freelancer"){
  console.log("freelancer");
  window.location.href="/";
 }else{
  res.redirect("/newUser");
 }
});

//update
app.put("/api/freelancer/:id", (req, res) => {
  // const freelancer = freelancers.find((f) => f.id === parseInt(req.params.id));
  // if (!freelancer) {
  //   res.status(404).send("Freelancer not found");
  // }
  // const schema = {
  //   name: Joi.string().min(3).required(),
  // };
  // const result = Joi.validate(req.body, schema);
  // if (result.error) {
  //   res.status(400).send(result.error.details[0].message);
  //   return;
  // }
  // freelancer.name = req.body.name;
  // res.send(freelancer);
});

app.delete("/api/freelancers/:id", (req, res) => {
  // const freelancer = freelancers.find((f) => f.id === parseInt(req.params.id));
  // if (!freelancer) {
  //   res.status(404).send("Freelancer not found");
  // }
  // const index = freelancers.indexOf(freelancer);
  // freelancers.splice(index, 1);
  // res.send(freelancer);
});
//Serves the "index.html" file from the React application.
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});
//Set the port the server will listen on.
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
