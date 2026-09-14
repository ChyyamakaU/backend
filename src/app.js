/* eslint-disable no-undef */
const express = require("express");

const app = express ();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res)=> {
res.json({
    "status": "sucess",
    "message": "Welcome, API is running"
});

});

module.exports = app;