const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema(
  {
    locationid: { type: String, required: true },
    zonenumber: { type: String, required: true },
    muncipality: { type: String, required: true },
    Latitude: { type: String, required: true, unique: true },
    Longitude: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
