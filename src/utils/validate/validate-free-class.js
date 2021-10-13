const { checkSchema } = require("express-validator");

const freeClassSchema = checkSchema({
  names: {
    isLength: {
      errorMessage: "El nombre tiene un formato no valido",
      options: { min: 4, max: 250 },
    },
  },
  telephone: {
    isLength: {
      errorMessage: "Correo con formato no valido",
      options: { min: 9, max: 15 },
    },
  },
  dni: {
    isLength: {
      errorMessage: "El company tiene un formato no valido",
      options: { min: 8, max: 8 },
    },
  },
});

module.exports = freeClassSchema;
