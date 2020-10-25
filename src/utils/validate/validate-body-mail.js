const { checkSchema } = require("express-validator");

module.exports = checkSchema({
  names: {
    isLength: {
      errorMessage: "El nombre tiene un formato no valido",
      options: { min: 4, max: 150 },
    },
  },
  email: {
    isEmail: {
      errorMessage: "Correo con formato no valido",
    },
  },
  company: {
    isLength: {
      errorMessage: "El company tiene un formato no valido",
      options: { min: 2, max: 150 },
    },
  },
  subject: {
    isLength: {
      errorMessage: "El company tiene un formato no valido",
      options: { min: 6, max: 100 },
    },
  },
  text: {
    isLength: {
      errorMessage: "El text tiene un formato no valido",
      options: { min: 20, max: 600 },
    },
  },
});
