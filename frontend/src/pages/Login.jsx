import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            alert("Login successful!");
        } catch (error) {
            alert("Error: " + error.response.data.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-white text-2xl">Login</h2>
                <input type="email" name="email" placeholder="Email" className="p-2 w-full my-2" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" className="p-2 w-full my-2" onChange={handleChange} />
                <button type="submit" className="bg-red-500 px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
