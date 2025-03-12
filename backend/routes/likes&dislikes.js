const express = require("express");
const { likeVideo, dislikeVideo } = require("../controllers/videoController");
const { verifyToken } = require("../middlewares/auth");

const router = express.Router();

router.put("/like/:id", verifyToken, likeVideo);
router.put("/dislike/:id", verifyToken, dislikeVideo);

module.exports = router;
