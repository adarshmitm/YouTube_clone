const Channel = require("../models/Channel");

exports.createChannel = async (req, res) => {
  try {
    const newChannel = new Channel({ ...req.body, owner: req.user.id });
    await newChannel.save();
    res.status(201).json(newChannel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id).populate("owner", "username");
    if (!channel) return res.status(404).json({ message: "Channel not found" });
    res.json(channel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) return res.status(404).json({ message: "Channel not found" });

    if (channel.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });

    await channel.remove();
    res.json({ message: "Channel deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
