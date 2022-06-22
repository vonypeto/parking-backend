module.exports = (app) => {
  require("./Test-Routes/test.routes")(app);
  require("./Lot-Routes/lot.routes")(app);
};
