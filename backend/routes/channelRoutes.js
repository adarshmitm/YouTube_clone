import express from 'express';
import { createChannel, getChannel, subscribeChannel } from '../controllers/channelController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createChannel);
router.get('/:id', getChannel);
router.post('/subscribe/:id', authMiddleware, subscribeChannel);

export default router;
