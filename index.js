const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const User = require("./models/user-model.js");
const Booking = require("./models/booking-schema.js");
const crypto = require("crypto");
const Vendor = require("./models/vender-model.js");
const Admin = require("./models/admin-model.js");
const Worker = require("./models/worker-model.js");
const Location = require("./models/location-model.js");
const Muncipality = require("./models/muncipality-model.js");
const app = express();

///////////////////// 🛡️ Security Middlewares 🛡️ /////////////////////
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// CORS Configuration
const corsOptions = {
  origin: [
    "http://localhost:5001",
    "https://a2mvendor.vercel.app",
    "https://vendor.a2mserve.com",
    "https://admin.a2mserve.com",
    "https://a2madmin-ikbx-git-master-a2m-serves-projects.vercel.app",
    "https://crud-express-six.vercel.app",
    "https://a2m-admin.vercel.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
});
app.use("/api/", limiter);
///////////////////// ✅ USER ROUTES ✅ /////////////////////

// Read All Users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single User
app.get("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create User
app.post("/api/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User
app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete User
app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///////////////////// ✅ Vendor ROUTES ✅ /////////////////////

// Read All Vendor
app.get("/api/vendors", async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Vendor
app.get("/api/vendors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findById(id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Vendor
app.post("/api/vendors", async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.status(201).json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update User
app.put("/api/vendors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findByIdAndUpdate(id, req.body, { new: true });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Vendor
app.delete("/api/vendors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vendor = await Vendor.findByIdAndDelete(id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.status(200).json({ message: "Vendor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///////////////////// ✅ Admin ROUTES ✅ /////////////////////

// Read All Users
app.get("/api/admins", async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Admin
app.get("/api/admins/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Admin
app.post("/api/admins", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Admin
app.put("/api/admins/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndUpdate(id, req.body, { new: true });
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Admin
app.delete("/api/admins/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///////////////////// ✅ BOOKING ROUTES ✅ /////////////////////

// Read All Bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Booking
app.get("/api/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Booking
app.post("/api/bookings", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Booking
app.put("/api/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Booking
app.delete("/api/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
///////////////////// ✅ WORKER ROUTES ✅ /////////////////////

// Read All Workers
app.get("/api/workers", async (req, res) => {
  try {
    const workers = await Worker.find({});
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Worker
app.get("/api/workers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await Worker.findById(id);
    if (!worker) return res.status(404).json({ message: "Worker not found" });
    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Worker
app.post("/api/workers", async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.status(201).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Worker
app.put("/api/workers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await Worker.findByIdAndUpdate(id, req.body, { new: true });
    if (!worker) return res.status(404).json({ message: "Worker not found" });
    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Worker
app.delete("/api/workers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await Worker.findByIdAndDelete(id);
    if (!worker) return res.status(404).json({ message: "Worker not found" });
    res.status(200).json({ message: "Worker deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///////////////////// ✅ LOCATION ROUTES ✅ /////////////////////

// Read All Locations
app.get("/api/locations", async (req, res) => {
  try {
    const locations = await Location.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Location
app.get("/api/locations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    if (!location)
      return res.status(404).json({ message: "Location not found" });
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Location
app.post("/api/locations", async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Location
app.put("/api/locations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!location)
      return res.status(404).json({ message: "Location not found" });
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Location
app.delete("/api/locations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByIdAndDelete(id);
    if (!location)
      return res.status(404).json({ message: "Location not found" });
    res.status(200).json({ message: "Location deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
///////////////////// ✅ MUNCIPALITY ROUTES ✅ /////////////////////

// Read All Muncipalities
app.get("/api/muncipalities", async (req, res) => {
  try {
    const muncipalities = await Muncipality.find({});
    res.status(200).json(muncipalities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read Single Muncipality
app.get("/api/muncipalities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const muncipality = await Muncipality.findById(id);
    if (!muncipality)
      return res.status(404).json({ message: "Muncipality not found" });
    res.status(200).json(muncipality);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Muncipality
app.post("/api/muncipalities", async (req, res) => {
  try {
    const muncipality = await Muncipality.create(req.body);
    res.status(201).json(muncipality);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Muncipality
app.put("/api/muncipalities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const muncipality = await Muncipality.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!muncipality)
      return res.status(404).json({ message: "Muncipality not found" });
    res.status(200).json(muncipality);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Muncipality
app.delete("/api/muncipalities/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const muncipality = await Muncipality.findByIdAndDelete(id);
    if (!muncipality)
      return res.status(404).json({ message: "Muncipality not found" });
    res.status(200).json({ message: "Muncipality deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///////////////////// ✅ PAYMENT CALLBACK ✅ /////////////////////
// ✅ Payment Callback (Sadad will call this via POST)
app.post("/api/payment/callback", async (req, res) => {
  try {
    const {
      website_ref_no, // booking/order ID
      transaction_status, // 1=in progress, 2=failed, 3=success
      transaction_number, // Sadad transaction ID
      RESPCODE, // Response code (1 = success)
      RESPMSG, // Response message
      ORDERID, // Booking/order ID again
      STATUS, // TXN_SUCCESS | TXN_FAILED
      TXNAMOUNT, // Amount paid
    } = req.body;

    console.log("Callback received:", req.body);

    ///////////////////// ✅ PROCESS BOOKING /////////////////////
    if (
      (transaction_status == 3 || STATUS === "TXN_SUCCESS") &&
      RESPCODE == "1"
    ) {
      // Success → confirm booking
      const booking = await Booking.findByIdAndUpdate(
        website_ref_no || ORDERID,
        {
          status: "Confirmed",
          paymentMethod: "Card/Online",
          transactionId: transaction_number,
          paymentResponse: req.body,
        },
        { new: true }
      );

      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      console.log("Booking confirmed:", booking._id);
      return res.status(200).json({ message: "Booking confirmed", booking });
    } else {
      // Failed → mark as failed/cancelled
      await Booking.findByIdAndUpdate(website_ref_no || ORDERID, {
        status: "Cancelled",
        paymentResponse: req.body,
      });

      return res.status(200).json({ message: "Payment failed" });
    }
  } catch (error) {
    console.error("Callback error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ New GET route for testing / manual lookup
app.get("/api/payment/callback", async (req, res) => {
  try {
    const { bookingId } = req.query; // ?bookingId=xxxx

    if (!bookingId) {
      return res
        .status(200)
        .json({ message: "No bookingId provided", booking: null });
    }

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    return res.status(200).json({ message: "Booking found", booking });
  } catch (error) {
    console.error("GET callback error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

///////////////////// ✅ MONGO DB CONNECTION ✅ /////////////////////
const mongooseConnection = mongoose.connect(
  "mongodb+srv://a2muser:a2m786%40md@cluster0.xziea.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
);

mongooseConnection
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

module.exports = app;
