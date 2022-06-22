module.exports = (app) => {
  const Test = require("../../controllers/Test-Controller/test.controller");
  var router = require("express").Router();
  router.get("/test", Test.getTest);

  app.use("/api/", router);
};
