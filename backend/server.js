const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db"); // Import DB connection

// Import Routes
const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");
const commentRoutes = require("./routes/commentRoutes");
const channelRoutes = require("./routes/channelRoutes");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(cors({ origin: "*", credentials: true })); // Enable CORS
app.use(cookieParser()); // Parse cookies
app.use("/uploads", express.static("uploads")); // Serve uploaded videos

// Connect to MongoDB
connectDB();



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/channels", channelRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the YouTube Clone API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
