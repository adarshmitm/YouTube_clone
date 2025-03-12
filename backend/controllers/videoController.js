import Video from '../models/Video.js';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export const uploadVideo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user.id;

        if (!req.file) return res.status(400).json({ message: "No video file uploaded" });

        const videoId = uuidv4();
        const filePath = `uploads/${videoId}.mp4`;

        fs.writeFileSync(filePath, req.file.buffer);

        const newVideo = new Video({
            title,
            description,
            videoUrl: filePath,
            uploader: userId
        });

        await newVideo.save();
        res.status(201).json({ message: "Video uploaded successfully", video: newVideo });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const getVideos = async (req, res) => {
    try {
        const videos = await Video.find().sort({ createdAt: -1 });
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return res.status(404).json({ message: "Video not found" });

        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const likeVideo = async (req, res) => {
  try {
      const video = await Video.findById(req.params.videoId);
      if (!video.likes.includes(req.user.id)) {
          video.likes.push(req.user.id);
          await video.save();
          return res.status(200).json({ message: "Liked" });
      }
      res.status(400).json({ message: "Already liked" });
  } catch (error) {
      res.status(500).json({ message: "Server Error" });
  }
};

export const dislikeVideo = async (req, res) => {
  try {
      const video = await Video.findById(req.params.videoId);
      if (!video.dislikes.includes(req.user.id)) {
          video.dislikes.push(req.user.id);
          await video.save();
          return res.status(200).json({ message: "Disliked" });
      }
      res.status(400).json({ message: "Already disliked" });
  } catch (error) {
      res.status(500).json({ message: "Server Error" });
  }
};
