"uses strict";

module.exports = (req, res) => {
  res.status(404).send({
    statusCode: 404,
    path: req.path,
    message: `Not found`,
  });
};
