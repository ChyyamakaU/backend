/* eslint-disable no-undef */
const express = require("express");

const app = express ();

// middleware
app.use(express.json());

// routes
app.get("/",  (req, res)=> {
res.status(200).json({
    "status": "sucess",
    "message": "Welcome, API is running"
});

});

app.get("/home", (req, res)=> {
res.status(201).json({
    "status": "sucess",
    "message": "Welcome to home"
});

});


app.get("/about", (req, res)=> {
res.status(200).json({
    "status": "sucess",
    "message": "Welcome to About"
});

});

app.get("/contact", (req, res)=> {
res.status().json({
    "status": "sucess",
    "message": "Welcome to contact"
});

});
module.exports = app;