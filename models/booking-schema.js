const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: String,
    isPrimary: Boolean,
  },
  { _id: false }
);

const bookingSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    serviceType: {
      type: String,
      enum: ["Hourly Cleaning", "Sofa and Carpet Cleaning"],
      required: true,
    },
    details: {
      hourlyCleaning: {
        numberOfCleaners: Number,
        numberOfHours: Number,
        services: [String],
      },
      sofaCarpetCleaning: {
        oneSeater: Number,
        twoSeater: Number,
        threeSeater: Number,
        carpetSqft: Number,
      },
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Card/Online", "Wallet", "Wallet + Cash", "Wallet + Card"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending Approval", "Approved", "Confirmed", "Cancelled"],
      default: "Pending Approval",
    },
    total: {
      type: Number,
      required: true,
    },
    address: {
      type: addressSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
