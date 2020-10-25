function handleAsyncFunctions(ftn) {
  return (req, res, next) => {
    return ftn(req, res, next).catch((error) => {
      const err = new Error(error.message);
      err.status = err.status || 500;

      next(err);
    })
  }
}

module.exports = handleAsyncFunctions;