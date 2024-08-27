const { constants } = require("../constants");

 const errorHandler = (err, req, res, next) => {

  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        tittle: "validation  error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constants.UNAUTHORIZED:
        res.json({
          tittle: "unauthorized person",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
        case constants.FORBIDDEN:
          res.json({
            tittle: "forbidden error",
            message: err.message,
            stackTrace: err.stack,
          });
          break;
          case constants.SERVER_ERROR:
          res.json({
            tittle: "server error",
            message: err.message,
            stackTrace: err.stack,
          });
          break;
    case constants.NOT_FOUND:
      res.json({
        tittle: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
      default:
        console.log("no error , all are goods ");
      break;
  }
};

module.exports = errorHandler;
