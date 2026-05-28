require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set("bufferCommands", false);

const app = express();

app.use(cors({
  origin: "https://digital-marketing-frontend-one.vercel.app"
}));

app.use(express.json());

// ROUTES
app.use("/api/digital", require("./routes/digitalRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {

    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );

  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
