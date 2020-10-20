class HomeController {
  get(req, res) {
    res.status(200).json({
      status: 200,
      message: "Aplicación para enviar correos",
    });
  }
}

module.exports = new HomeController();
