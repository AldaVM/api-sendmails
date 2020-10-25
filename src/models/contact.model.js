const { Schema, model } = require("mongoose");

const ContactSchema = new Schema({
  names: {
    type: String,
    required: [true, "El campo names es requerido"],
  },
  email: {
    type: String,
    required: [true, "El campo email es requerido"],
  },
  subject: {
    type: String,
    required: [true, "El campo subject es requerido"],
  },
  company: {
    type: String,
    required: [true, "El campo company es requerido"],
  },
  status_contact_mail: {
    type: String,
    required: [true, "El campo status_mail es requerido"],
  },
});

module.exports = model("contact", ContactSchema);
