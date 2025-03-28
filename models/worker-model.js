const mongoose = require("mongoose");

const WorkerSchema = mongoose.Schema(
  {
    vendorid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true }
);

const Worker = mongoose.model("Worker", WorkerSchema);
module.exports = Worker;
