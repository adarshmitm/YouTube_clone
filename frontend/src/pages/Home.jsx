import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ isSidebarOpen }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get("http://localhost:5000/api/videos");
            setVideos(res.data);
        };
        fetchVideos();
    }, []);

    return (
        <div className={`transition-all p-6 ${isSidebarOpen ? "ml-64 w-[calc(100%-16rem)]" : "ml-0 w-full"}`}>
            <h2 className="text-2xl mb-4 pb-2">🎬 Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {videos.map((video) => (
                    <Link to={`/video/${video._id}`} key={video._id} className="p-2 border rounded">
                        <img src={`http://localhost:5000/${video.thumbnailUrl}`} alt={video.title} className="w-full h-40 object-cover"/>
                        <p className="font-bold">{video.title}</p>
                        <p>{video.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
