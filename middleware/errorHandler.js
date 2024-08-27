const { constants } = require("../constants");

 const errorHandler = (err, req, res, next) => {

  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants. VALIDATION_ERROR:
      res.json({
        tittle: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case 404:
      res.json({
        tittle: "validation errro",
        message: err.message,
        stackTrace: err.stack,
      });
      default:
      break;
  }
};

module.exports = errorHandler;
