import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const UploadVideo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const navigate = useNavigate();

    const { getRootProps, getInputProps } = useDropzone({
        accept: "video/*",
        onDrop: (acceptedFiles) => setVideoFile(acceptedFiles[0]),
    });

    const handleUpload = async () => {
        if (!videoFile) return alert("Please select a video file.");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("video", videoFile);

        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:5000/api/videos/upload", formData, {
                headers: { Authorization: token, "Content-Type": "multipart/form-data" },
            });
            alert("Video uploaded successfully!");
            navigate("/");
        } catch (error) {
            alert("Error: " + error.response.data.message);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl">Upload Video</h2>
            <input type="text" placeholder="Title" className="p-2 w-full my-2" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" className="p-2 w-full my-2" onChange={(e) => setDescription(e.target.value)} />
            <div {...getRootProps()} className="border-2 p-4 cursor-pointer">
                <input {...getInputProps()} />
                {videoFile ? <p>{videoFile.name}</p> : <p>Drag & drop video file here</p>}
            </div>
            <button className="bg-red-500 px-4 py-2 rounded mt-2" onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadVideo;
