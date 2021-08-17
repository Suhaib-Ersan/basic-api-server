"use strict";

module.exports = (error, req, res, next) => {
  res.status(500).send({
    statusCode: 500,
    path: req.path,
    message: `internal server error: ${error}`,
  });
};
