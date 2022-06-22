const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

//Lot Parking
db.lotEntry = require("./parkDB/lot_entry.model.js")(mongoose);
db.lotParking = require("./parkDB/lot_parking.model.js")(mongoose);

module.exports = db;
