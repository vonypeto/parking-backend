module.exports = (app) => {
  const Lot = require("../../controllers/Lot-Controller/lot.controller");
  var router = require("express").Router();
  router.get("/entry", Lot.getEntry);
  router.post("/entry/create", Lot.createEntry);
  router.delete("/entry/:id", Lot.deleteEntry);
  router.post("/entry/:id", Lot.updateEntry);

  app.use("/api/", router);
};
