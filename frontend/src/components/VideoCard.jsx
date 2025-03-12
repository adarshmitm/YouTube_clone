import React, { useState } from "react";


const VideoCard = ({ video }) => {
    return (
        <div className="p-2">
            <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                className="rounded-lg"
            ></iframe>
            <h3 className="mt-2 text-sm font-semibold">{video.snippet.title}</h3>
            <p className="text-xs text-gray-500">{video.snippet.channelTitle}</p>
        </div>
    );
};

export default VideoCard;
