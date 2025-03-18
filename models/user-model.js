const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
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
    address: {
      type: Array,
      required: true,
      default: [],
    },
    wallet: {
      type: Number,
      required: true,
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
