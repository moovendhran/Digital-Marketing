require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set("bufferCommands", false); // 🔥 IMPORTANT

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// ROUTES
app.use("/api/digital", require("./routes/digitalRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
