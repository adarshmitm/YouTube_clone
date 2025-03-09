const express = require("express");
const { createChannel, getChannel, deleteChannel } = require("../controllers/channelController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createChannel);
router.get("/:id", getChannel);
router.delete("/:id", authMiddleware, deleteChannel);

module.exports = router;
