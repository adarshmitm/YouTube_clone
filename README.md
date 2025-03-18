# 📺 YouTube Clone (MERN Stack)

A full-stack YouTube clone built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite, Tailwind CSS, and the YouTube Data API v3 for fetching videos.

🚀 Features

🔍 Search YouTube Videos via API

🎥 Embed & Display Videos dynamically

📄 Responsive Sidebar & Header

🌙 Dark & Light Mode Support (Coming Soon)

# 🏗 Tech Stack

Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js, MongoDB

API: YouTube Data API v3

State Management: React Hooks

# 📂 Folder Structure

YouTube_Clone/
│── backend/
│   ├── node_modules/
│   ├── routes/
│   │   ├── youtube.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── VideoCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── UploadVideo.jsx
│   │   ├── App.js
│   ├── package.json
│   ├── index.html

🔧 Installation

# 1️⃣ Clone the Repository

git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone

2️⃣ Backend Setup

cd backend
npm install

Create a .env file in backend/ and add:

MONGO_URI=YOUR_MONGODB_ADDRESS

JWT_SECRET=SECERATE_KEY

PORT=PORT

Start the backend server:

node server.js

3️⃣ Frontend Setup

cd ../frontend
npm install
npm run dev

🌐 API Endpoints

Method

Endpoint

Description

GET

/api/youtube/videos

Fetch trending YouTube videos

📸 Screenshots

Header & Search

Sidebar

Video Grid







🚀 Future Improvements

✅ Add video upload feature

✅ Implement authentication (JWT-based)

✅ Create watch history & likes

🛠 Contributors

Your Name - GitHub

📝 License

This project is licensed under the MIT License.

💡 Feel free to fork, contribute, and star the repo! 🌟

