const { mailService } = require("../services");
const genereHTMLContentMail = require("../helpers/generehtml.helper");

let _mailService = null;

class Mail {
  constructor(mailService) {
    _mailService = mailService;
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

    const response = await _mailService.sendMailBySendgrid(optionsMail);
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
