const handleGenericError = require("./error.middleware");
const handleRouteNotFound = require("./route-not-found.middleware");

module.exports = {
  handleGenericError,
  handleRouteNotFound,
};
