  const express = require("express");
  const mongoose = require("mongoose");
  const User = require("./models/user-model.js");
  const Booking = require("./models/booking-schema.js");
  const Vendor = require("./models/vender-model.js");
  const Admin = require("./models/admin-model.js");

  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Root Route
  app.get("/", (req, res) => {
    res.send("Hello World from Node server");
  });

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