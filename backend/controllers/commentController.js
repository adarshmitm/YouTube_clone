const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  try {
    const newComment = new Comment({ ...req.body, user: req.user.id });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ video: req.params.videoId }).populate("user", "username");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });

    await comment.remove();
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
