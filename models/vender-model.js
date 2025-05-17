const mongoose = require("mongoose");

const VendorModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
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
      default: 0,
    },
    workers: {
      type: Number,
      required: true,
      default: 1,
    },
    priceprhour: {
      type: Number,
      required: true,
      default: 25,
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
    // New fields added below
    crNumber: {
      type: String,
      required: false,
      default: "Not Provided Yet",
    },
    crExpiryDate: {
      type: Date,
      required: false,
    },
    vatNumber: {
      type: String,
      required: false,
      default: "Not Provided Yet",
    },
    area: {
      type: String,
      required: false,
      default: "Not Specified",
    },
    municipality: {
      type: String,
      required: false,
      default: "Not Specified",
    },
    zoneNumber: {
      type: String,
      required: false,
      default: "Not Specified",
    },
    paymentMethod: {
      type: String,
      required: false,
      default: "Not Specified",
    },
    lastPaymentDate: {
      type: Date,
      required: false,
    },
    documentOneExpiry: {
      type: Date,
      required: false,
    },
    documentTwoExpiry: {
      type: Date,
      required: false,
    },
    documentThreeExpiry: {
      type: Date,
      required: false,
    },
    companyDescription: {
      type: String,
      required: false,
      default: "No description provided",
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
      min: 0,
      max: 5,
    },
    numberOfJobsCompleted: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendor", VendorModel);
module.exports = Vendor;