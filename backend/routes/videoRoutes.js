const express = require("express");
const multer = require("multer");
const path = require("path");
const { addVideo, getVideos, getVideoById, deleteVideo } = require("../controllers/videoController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/videos/"); // Folder where videos will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

// File Filter to accept only videos
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["video/mp4", "video/mkv", "video/avi", "video/mov"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only video files are allowed!"), false);
  }
};

// Multer Upload Middleware
const upload = multer({ storage, fileFilter });

// Routes
router.post("/", authMiddleware, upload.single("video"), addVideo);
router.get("/", getVideos);
router.get("/:id", getVideoById);
router.delete("/:id", authMiddleware, deleteVideo);

module.exports = router;
