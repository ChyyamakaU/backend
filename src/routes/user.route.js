/* eslint-disable no-undef */
const express = require("express");
const router =express.Router();
const {emailSent} = require("../controllers/user");
const register = require("../middleware/validation");



router.post("/register", register, emailSent)


module.exports = router;