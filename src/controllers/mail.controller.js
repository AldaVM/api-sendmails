const { mailService } = require("../services");
const {
  genereHTMLContentMail,
  genereHTMLContentFreeClass,
} = require("../helpers/generehtml.helper");

let _mailService = null;

class Mail {
  constructor(mailService) {
    _mailService = mailService;
  }

  async sendMailRegisterClass(req, res) {
    const { names, dni, telephone } = req.body;

    const html = genereHTMLContentFreeClass({
      names,
      telephone,
      dni,
    });

    const optionsMail = {
      recipient: process.env.RECIPIENT_MAIL_FREE_CLASS,
      sender: process.env.SENDER_MAIL_FREE_CLASS,
      subject: `SOLICITUD DE CLASE DE PRUEBA`,
      text: "Interesado para inscribirse a una clase de prueba",
      html,
    };

    const customAPIKey = process.env.API_KEY_SENDGRID_IMPERIUM;
    const response = await _mailService.sendMailBySendgrid(
      optionsMail,
      customAPIKey
    );

    return res.status(response.status).json({
      status: response.status,
      message: response.message,
      error: response.error,
      messageRegister: registerContact.message,
    });
  }

  async sendMail(req, res) {
    const { names, email, company, text, subject } = req.body;

    const html = genereHTMLContentMail({
      names,
      email,
      company,
      text,
    });

    const optionsMail = {
      recipient: process.env.RECIPIENT_MAIL,
      sender: process.env.SENDER_MAIL,
      subject: `Contacto MyProfile - ${subject}`,
      text,
      html,
    };
    const customAPIKey = process.env.API_KEY_SENDGRID;
    const response = await _mailService.sendMailBySendgrid(
      optionsMail,
      customAPIKey
    );
    const registerContact = await _mailService.toRegisterContactInDB(
      response.status,
      {
        names,
        email,
        subject,
        company,
      }
    );

    return res.status(response.status).json({
      status: response.status,
      message: response.message,
      error: response.error,
      messageRegister: registerContact.message,
    });
  }
}

module.exports = new Mail(mailService);
