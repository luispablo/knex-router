const handleError = function handleError (err, res) {
  console.error(err);
  res.status(500).json(err);
};

module.export = handleError;
