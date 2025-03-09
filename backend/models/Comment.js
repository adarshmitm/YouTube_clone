const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", CommentSchema);
