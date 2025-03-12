import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChannelPage = () => {
    const { id } = useParams();
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get(`http://localhost:5000/api/channels/${id}`);
            setChannel(res.data);
        };
        fetchChannel();
    }, [id]);

    if (!channel) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl">{channel.name}</h2>
            <p>{channel.description}</p>
            <button className="bg-red-500 px-4 py-2 rounded">Subscribe</button>
            <h3 className="mt-4">Videos</h3>
            {channel.videos.map(video => (
                <p key={video._id}>{video.title}</p>
            ))}
        </div>
    );
};

export default ChannelPage;
