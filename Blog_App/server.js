const express = require("express");
const cors = require("cors"); // for backend and frontend error to combine
const dotenv = require("dotenv");
const connectDB = require("./config/DB");

// dotenv config
dotenv.config();

// router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

// rest object
const app = express();

// middelewares
app.use(cors());
app.use(express.json()); // for get data by api in json

// mongodb connection
connectDB();

// routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", blogRoutes);

// server setting
app.listen(process.env.PORT || 8080, () => {
  console.log(` server is runing on port ${process.env.PORT}`);
});
