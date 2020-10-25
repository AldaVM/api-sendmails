const { Router } = require("express");
const homeRoute = require("./home.route");
const mailRoute = require("./mail.route");
const router = Router();

router.use("/home", homeRoute);
router.use("/mail", mailRoute);

module.exports = router;
