const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema(
  {
    adminid: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    subarea: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
