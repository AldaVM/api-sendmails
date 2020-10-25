const { connect } = require("mongoose");
const initServer = require("./startup");

const mongoURI = process.env.MONGO_URI;

connect(mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Conectado a la DB");
    initServer();
  })
  .catch(console.log);
