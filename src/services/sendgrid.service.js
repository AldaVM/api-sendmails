const sendgrid = require("@sendgrid/mail");
const { ContactRepository } = require("../repositories");

let _contactRepository = null;

class MailService {
  constructor(repository) {
    _contactRepository = repository;
  }

  async toRegisterContactInDB(
    statusMail,
    contactFields = {
      names: "test",
      email: "test@test.com",
      subject: "Test Subject",
      company: "Test Company",
    }
  ) {
    try {
      const statusContact = statusMail === 200 ? "completed" : "fail";

      const newContact = {
        ...contactFields,
        status_contact_mail: statusContact,
      };

      const { message, error } = await _contactRepository.toRegister(
        newContact
      );

      if (error) {
        return {
          status: 500,
          message,
          error,
        };
      }

      return {
        status: 201,
        message: "Nuevo contacto registrado",
        error: null,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Error toRegisterContactInDB()",
        error,
      };
    }
  }

  async sendMailBySendgrid(
    options = {
      recipient: "test@test.com",
      sender: "test@test.com",
      subject: "test subject",
      text: "text by test",
      html: "<span>Test</span>",
    }
  ) {
    try {
      const { recipient, sender, subject, text, html } = options;
      const apiKey = process.env.API_KEY_SENDGRID;
      sendgrid.setApiKey(apiKey);

      const msg = {
        to: recipient,
        from: sender,
        subject,
        text,
        html,
      };

      await sendgrid.send(msg);

      return {
        status: 200,
        message:
          "Gracias por escribirme, en un plazo de 24 horas como máximo me contactaré contigo",
        error: null,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Error con el servicio sendMailBySendgrid()",
        error,
      };
    }
  }
}

module.exports = new MailService(ContactRepository);
