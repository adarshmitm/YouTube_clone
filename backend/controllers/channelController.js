import Channel from '../models/Channel.js';

export const createChannel = async (req, res) => {
    try {
        const { name, description, banner } = req.body;
        const owner = req.user.id;

        const newChannel = new Channel({ name, description, banner, owner });
        await newChannel.save();

        res.status(201).json({ message: "Channel created successfully", channel: newChannel });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const getChannel = async (req, res) => {
    try {
        const channel = await Channel.findById(req.params.id).populate('videos');
        res.status(200).json(channel);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export const subscribeChannel = async (req, res) => {
    try {
        const channel = await Channel.findById(req.params.id);
        if (!channel.subscribers.includes(req.user.id)) {
            channel.subscribers.push(req.user.id);
            await channel.save();
            return res.status(200).json({ message: "Subscribed" });
        }
        res.status(400).json({ message: "Already subscribed" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
