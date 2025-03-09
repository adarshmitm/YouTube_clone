const Video = require("../models/Video");

exports.addVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No video file uploaded" });
    }

    const newVideo = new Video({
      title: req.body.title,
      description: req.body.description,
      thumbnailUrl: req.body.thumbnailUrl, // Handle separately (optional)
      uploader: req.user.id,
      videoUrl: `/uploads/videos/${req.file.filename}`, // Store video path
      views: 0,
      likes: 0,
      dislikes: 0,
      uploadDate: new Date(),
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("uploader", "username");
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate("uploader", "username");
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    if (video.uploader.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });

    await video.remove();
    res.json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
