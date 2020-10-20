const { Router } = require("express");
const homeRoute = require("./home.route");
const router = Router();

router.use("/home", homeRoute);

module.exports = router;
