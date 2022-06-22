exports.getEntry = (req, res) => {
  res.json("test");
};
exports.updateEntry = (req, res) => {
  const id = req.params.id;
  res.json(id);
};
exports.deleteEntry = (req, res) => {
  res.json("test");
};

exports.createEntry = (req, res) => {
  res.json("test");
};
