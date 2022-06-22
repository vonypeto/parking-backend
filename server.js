require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(cors());

const http = require("http");
const server = http.createServer(app);

//simple route
app.get("/", (_, res) => {
  res.json({ message: "Welcome to my application." });
});

//routes
require("./app/routes/")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";
server.listen(PORT, () => {
  console.log(`Server is running on port http://${HOSTNAME}:${PORT}/.`);
});
