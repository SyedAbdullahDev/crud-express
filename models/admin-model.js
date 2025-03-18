const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pease enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "Please enter phone number"],
    },
    image: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
      default: "Doha",
    },

    vender: {
      type: Array,
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
