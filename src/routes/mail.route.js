const { Router } = require("express");
const { mailController } = require("../controllers");
const handleAsyncFunctions = require("../helpers/handleAsyncFunctions");
const { validateResponseBody } = require("../middlewares");
const { validateBodyMail, freeClassSchema } = require("../utils/validate");
const router = Router();

router.post(
  "/send-contact",
  [validateBodyMail],
  validateResponseBody(handleAsyncFunctions(mailController.sendMail))
);

router.post(
  "/send-class-free",
  [freeClassSchema],
  validateResponseBody(handleAsyncFunctions(mailController.sendMailRegisterClass))
);

module.exports = router;
