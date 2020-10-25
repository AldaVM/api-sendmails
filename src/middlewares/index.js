const handleGenericError = require("./error.middleware");
const handleRouteNotFound = require("./route-not-found.middleware");
const validateResponseBody = require("./validate-response.middleware");

module.exports = {
  handleGenericError,
  handleRouteNotFound,
  validateResponseBody,
};
