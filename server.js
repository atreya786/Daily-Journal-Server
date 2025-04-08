const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const journalRoutes = require("./routes/journal");
const todoRoutes = require("./routes/todos");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/journal", journalRoutes);
app.use("/api/todos", todoRoutes);

// Database connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error(`${error} did not connect`));
