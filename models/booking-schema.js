const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema(
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
    address: {
      type: String,
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
        numberOfCleaners: {
          type: Number,
          default: 1,
        },
        numberOfHours: {
          type: Number,
          default: 1,
        },
        services: [String],
      },
      sofaCarpetCleaning: {
        oneSeater: {
          type: Number,
          default: 0,
        },
        twoSeater: {
          type: Number,
          default: 0,
        },
        threeSeater: {
          type: Number,
          default: 0,
        },
        carpetSqft: {
          type: Number,
          default: 0,
        },
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Add virtual population
BookingSchema.virtual("user", {
  ref: "User",
  localField: "customer",
  foreignField: "_id",
  justOne: true,
});

BookingSchema.virtual("vendorDetails", {
  ref: "Vendor",
  localField: "vendor",
  foreignField: "_id",
  justOne: true,
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
