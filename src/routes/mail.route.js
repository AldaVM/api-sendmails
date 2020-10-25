const { Router } = require("express");
const { mailController } = require("../controllers");
const handleAsyncFunctions = require("../helpers/handleAsyncFunctions");
const { validateResponseBody } = require("../middlewares");
const { validateBodyMail } = require("../utils/validate");
const router = Router();

router.post(
  "/send-contact",
  [validateBodyMail],
  validateResponseBody(handleAsyncFunctions(mailController.sendMail))
);

module.exports = router;
