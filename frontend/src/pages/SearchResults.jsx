import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const res = await axios.get(`http://localhost:5000/api/videos/search/${query}`);
            setResults(res.data);
        };
        fetchResults();
    }, [query]);

    return (
        <div className="p-6">
            <h2 className="text-2xl">Search Results for "{query}"</h2>
            {results.map(video => (
                <p key={video._id}>{video.title}</p>
            ))}
        </div>
    );
};

export default SearchResults;
