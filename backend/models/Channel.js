import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String },
    banner: { type: String },
    subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }]
}, { timestamps: true });

export default mongoose.model('Channel', ChannelSchema);
