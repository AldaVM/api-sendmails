const { validationResult } = require("express-validator");

function validateResponseBody(controller) {
  return (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: 422,
        message: "Datos incorrectos",
        detail: errors.array(),
      });
    } else {
      return controller(req, res, next);
    }
  };
}

module.exports = validateResponseBody;
