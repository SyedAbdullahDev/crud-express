const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema(
  {
    vendorname: { type: String, required: true },
    vendorid: { type: String, required: true },
    isapprove: { type: Boolean, required: true },

    price: { type: Number, required: true },
    username: { type: String, required: true },
    usermail: { type: String, required: true },
    adminmail: { type: String, required: true },
    adminid: { type: String, required: true },

    orderno: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    note: { type: String, required: false },
    requiretool: { type: Boolean, required: true, default: false },
    address: { type: String, required: true },
    worker: { type: Number, required: true, default: 1 },
    city: { type: String, required: true },
    paymentmethod: { type: String, required: true },
    date: { type: Date, required: true },
    durationinminutes: { type: Number, required: true },
    services: { type: [String], required: true },
    usernumber: { type: String, required: true },
    noofonesofa: { type: Number, default: 0 },
    nooftwosofa: { type: Number, default: 0 },
    noofthreesofa: { type: Number, default: 0 },
    carpets: [
      {
        carpetlength: { type: Number },
        carpetwidth: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
