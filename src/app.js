/* eslint-disable no-undef */
const express = require("express");

const app = express ();
const logger = require("./middleware/logger");
const userRoutes = require ("./routes/user.route");

// middleware
app.use(express.json());
app.use(logger);

// routes
app.get("/", logger,  (req, res)=> {
res.status(200).json({
    "status": "sucess",
    "message": "Welcome, API is running"
});

});

app.use("/", logger, userRoutes)

// app.get("/home", (req, res)=> {
// res.status(201).json({
//     "status": "sucess",
//     "message": "Welcome to home"
// });

// });


// app.get("/about", (req, res)=> {
// res.status(200).json({
//     "status": "sucess",
//     "message": "Welcome to About"
// });

// });

// app.get("/contact", (req, res)=> {
// res.status().json({
//     "status": "sucess",
//     "message": "Welcome to contact"
// });

// });
module.exports = app;