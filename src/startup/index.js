const app = require("./app");

function initServer() {
  app.listen(app.get("port"));
  console.log(`Aplicación corriendo en el puerto ${app.get("port")}`);
}

module.exports = initServer;
