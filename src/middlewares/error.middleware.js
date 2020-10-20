function handleGenericError(err, req, res, next) {
  let status = err.status || 500;

  res.status(status).json({
    status: status,
    message: err.message,
  });
}

module.exports = handleGenericError;
