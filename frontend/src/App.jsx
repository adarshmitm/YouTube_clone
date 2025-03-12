import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import UploadVideo from './pages/UploadVideo';
import ChannelPage from './pages/ChannelPage';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            {/* <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> */}
             <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="flex flex-1 mt-[68px]">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                    <Routes>
                        <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />} />
                        <Route path="/video/:id" element={<VideoPage />} />
                        <Route path="/upload" element={<UploadVideo />} />
                        <Route path="/channel/:id" element={<ChannelPage />} />
                        <Route path="/search/:query" element={<SearchResults />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
