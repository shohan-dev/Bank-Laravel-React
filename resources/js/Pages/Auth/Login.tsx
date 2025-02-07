import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(name as "email" | "password", value); // This updates the form data using Inertia's useForm method
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Send the data to the backend via POST
        post("/login"); // Replace with your actual route for login
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                    >
                        {processing ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="register" className="text-blue-600 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
