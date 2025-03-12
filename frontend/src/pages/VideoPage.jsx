import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
      setVideo(res.data);
    };

    const fetchComments = async () => {
      const res = await axios.get(`http://localhost:5000/api/comments/${id}`);
      setComments(res.data);
    };

    fetchVideo();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/comments/add",
      { videoId: id, text: newComment },
      {
        headers: { Authorization: token },
      }
    );
    setNewComment("");
  };

  const handleLike = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      `http://localhost:5000/api/videos/like/${id}`,
      {},
      {
        headers: { Authorization: token },
      }
    );
  };

  const handleDislike = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      `http://localhost:5000/api/videos/dislike/${id}`,
      {},
      {
        headers: { Authorization: token },
      }
    );
  };

  if (!video) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl">{video.title}</h2>
      <video
        src={`http://localhost:5000/${video.videoUrl}`}
        controls
        className="w-full mt-4"
      ></video>
      <button onClick={handleLike}>👍 {video.likes.length}</button>
      <button onClick={handleDislike}>👎 {video.dislikes.length}</button>
      <div>
        <h3>Comments</h3>
        {comments.map((comment) => (
          <p key={comment._id}>
            <strong>{comment.userId.username}:</strong> {comment.text}
          </p>
        ))}

        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleCommentSubmit}>Comment</button>
      </div>
    </div>
  );
};

export default VideoPage;
