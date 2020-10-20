const { Router } = require("express");
const { homeController } = require("../controllers");

const router = Router();

router.get("/", homeController.get);

module.exports = router;
