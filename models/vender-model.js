const mongoose = require("mongoose");

const VendorModel = mongoose.Schema(
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
    services: {
      type: Array,
      required: true,
      default: ["Cleaning", "Washing", "Ironing"],
    },
    revenue: {
      type: Number,
      required: true,
      default: "0",
    },
    workers: {
      type: Number,
      required: true,
      default: "1",
    },
    priceprhour: {
      type: Number,
      required: true,
      default: "25",
    },
    membersince: {
      type: String,
      required: true,
    },
    maincategory: {
      type: Array,
      required: true,
      default: ['hourly'],
    },
    membersince: {
      type: String,
      required: true,
    },
    available: {
      type: String,
      required: false,
      default: "Monday - Sunday",
    },
    timingone: {
      type: String,
      required: true,
    },
    timingtwo: {
      type: String,
      required: true,
    },
    documentone: {
      type: String,
      required: false,
      default: "Not Provided Yet",
    },
    documenttwo: {
      type: String,
      required: false,
      default: "Not Provided Yet",
    },
    documentthree: {
      type: String,
      required: false,
      default: "Not Provided Yet",
    },
    Adminid: {
      type: String,
      required: true,
      default: "Random admin",
    },
    hasmaterial: {
      type: Boolean,
      required: true,
      default: true,
    },
    isactive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendor", VendorModel);
module.exports = Vendor;
