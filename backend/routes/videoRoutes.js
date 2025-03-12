import express from 'express';
import multer from 'multer';
import { uploadVideo, getVideos, getVideoById, likeVideo, dislikeVideo } from '../controllers/videoController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', authMiddleware, upload.single('video'), uploadVideo);
router.get('/', getVideos);
router.get('/:id', getVideoById);
router.post('/like/:videoId', authMiddleware, likeVideo);
router.post('/dislike/:videoId', authMiddleware, dislikeVideo);
router.get('/search/:query', async (req, res) => {
  try {
      const query = req.params.query;
      const videos = await Video.find({ title: { $regex: query, $options: 'i' } });
      res.status(200).json(videos);
  } catch (error) {
      res.status(500).json({ message: "Server Error" });
  }
});


export default router;
