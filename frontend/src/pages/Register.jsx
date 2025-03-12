import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("Registration successful! You can now log in.");
        } catch (error) {
            alert("Error: " + error.response.data.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-white text-2xl">Register</h2>
                <input type="text" name="username" placeholder="Username" className="p-2 w-full my-2" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" className="p-2 w-full my-2" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" className="p-2 w-full my-2" onChange={handleChange} />
                <button type="submit" className="bg-red-500 px-4 py-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default Register;
