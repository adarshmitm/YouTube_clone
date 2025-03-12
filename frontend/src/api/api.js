import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchVideos = async () => {
  const response = await axios.get(`${API_BASE_URL}/videos`);
  return response.data;
};

export const fetchVideoById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/videos/${id}`);
  return response.data;
};

export const fetchChannels = async () => {
  const response = await axios.get(`${API_BASE_URL}/channels`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
  return response.data;
};

export const uploadVideo = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/videos/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const getVideos = async () => {
  const response = await axios.get(`${API_BASE_URL}/videos`);
  return response.data;
};

export const likeVideo = async (videoId, token) => {
  return await axios.put(`${API_BASE_URL}/videos/like/${videoId}`, {}, { headers: { Authorization: `Bearer ${token}` } });
};

export const dislikeVideo = async (videoId, token) => {
  return await axios.put(`${API_BASE_URL}/videos/dislike/${videoId}`, {}, { headers: { Authorization: `Bearer ${token}` } });
};

export const addComment = async (videoId, text, token) => {
  return await axios.post(`${API_BASE_URL}/comments/${videoId}`, { text }, { headers: { Authorization: `Bearer ${token}` } });
};

export const getComments = async (videoId) => {
  return await axios.get(`${API_BASE_URL}/comments/${videoId}`);
};

