/* eslint-disable no-undef */
const express = require("express");
const router =express.Router();

const {admin, } = require("../controllers/roler");
const register = require("../middleware/validation");



router.post("/register", register, emailSent)


module.exports = router;