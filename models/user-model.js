const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  title: String,
  isDefault: Boolean,
  buildingNo: String,
  streetNo: String,
  floorNo: String,
  apartmentNo: String,
  locationName: String,
});

const bookingSchema = new mongoose.Schema({
  id: String,
  selectedTime: Date,
  status: String,
  serviceType: String,
  vendorName: String,
  numberOfHours: Number,
  numberOfCleaners: Number,
});

const paymentSchema = new mongoose.Schema({
  transactionId: String,
  amount: Number,
  status: String,
  date: Date,
});

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    mobile: {
      type: String,
      unique: true,
      required: [true, "Please enter mobile number"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default: "active",
    },
    wallet: {
      type: Number,
      default: 0,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    accountType: {
      type: String,
      default: "Standard",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    addresses: {
      type: [addressSchema],
      default: [],
    },
    bookings: {
      type: [bookingSchema],
      default: [],
    },
    payments: {
      type: [paymentSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
