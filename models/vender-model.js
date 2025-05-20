const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    // Company Information
    companyName: {
      type: String,
      required: [true, "Company name is required"],
    },
    commissionPercentage: {
      type: Number,
      default: 0
    },

    // Contact Information
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true
    },
    whatsappNumber: {
      type: String,
      required: [true, "WhatsApp number is required"]
    },

    // Services Information
    servicesCategory: {
      type: [String],
      required: [true, "At least one service category is required"],
      enum: ["Hourly Clean", "Sofa and Carpet Cleaning"]
    },
    servicesHourly: {
      type: [String],
      required: [true, "At least one hourly service is required"],
      enum: ["Cleaning", "Ironing", "Washing Dishes", "Baby Sitting"]
    },
    pricePerHour: {
      type: Number,
      required: [true, "Price per hour is required"],
      min: 0
    },
    numberOfWorkers: {
      type: Number,
      required: [true, "Number of workers is required"],
      min: 1
    },

    // Working Hours
    openingTime: {
      type: String,
      required: [true, "Opening time is required"]
    },
    closingTime: {
      type: String,
      required: [true, "Closing time is required"]
    },

    // Address Information
    companyLocation: {
      type: String,
      required: [true, "Company location is required"],
      enum: ["Najma - Zone 26", "Al Mansoura - Zone 15", "Al Sadd - Zone 18"]
    },
    buildingNumber: {
      type: String,
      required: [true, "Building number is required"]
    },
    streetNumber: {
      type: String,
      required: [true, "Street number is required"]
    },
    poBoxNumber: {
      type: String,
      required: [true, "PO Box number is required"]
    },
    serviceLocations: {
      type: [String],
      required: [true, "At least one service location is required"]
    },

    // CR Details
    crNumber: {
      type: String,
      required: [true, "CR number is required"]
    },
    crExpiryDate: {
      type: Date,
      required: [true, "CR expiry date is required"]
    },
    crDocument: {
      type: String,
      required: [true, "CR document is required"]
    },

    // Owner ID Details
    ownerIdNumber: {
      type: String,
      required: [true, "Owner ID number is required"]
    },
    ownerIdExpiryDate: {
      type: Date,
      required: [true, "Owner ID expiry date is required"]
    },
    ownerIdDocument: {
      type: String,
      required: [true, "Owner ID document is required"]
    },

    // Settings
    cleaningMaterialRequired: {
      type: Boolean,
      default: false
    },
    vacuum: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["Pending Approval", "Active", "Suspended", "Blocked"],
      default: "Pending Approval"
    }
  },
  {
    timestamps: true
  }
);

const Vendor = mongoose.model("Vendor", VendorSchema);
module.exports = Vendor;