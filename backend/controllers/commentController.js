import Comment from '../models/Comment.js';

export const addComment = async (req, res) => {
    try {
        const { videoId, text } = req.body;
        const userId = req.user.id;

        const newComment = new Comment({ videoId, userId, text });
        await newComment.save();

        res.status(201).json({ message: "Comment added", comment: newComment });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId }).populate('userId', 'username avatar');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
