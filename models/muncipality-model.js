const mongoose = require("mongoose");

const MuncipalitySchema = mongoose.Schema(
  {
    muncipalityid: { type: String, required: true },
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Muncipality = mongoose.model("Muncipality", MuncipalitySchema);
module.exports = Muncipality;
