import React, { useState } from "react";

const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password) {
            alert("Please fill in both fields!");
        } else {
            alert("Login Successful!");
            // Handle login logic here (e.g., sending the data to an API)
        }
    };

    return (
        <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", padding: "2rem 3rem", borderRadius: "0.375rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "100%", maxWidth: "400px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label htmlFor="email" style={{ display: "block", fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #d1d5db", fontSize: "1rem" }}
                        />
                    </div>
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label htmlFor="password" style={{ display: "block", fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #d1d5db", fontSize: "1rem" }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            backgroundColor: "#2563eb",
                            color: "white",
                            padding: "0.75rem",
                            borderRadius: "0.375rem",
                            border: "none",
                            fontSize: "1rem",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                        onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#1d4ed8")}
                        onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#2563eb")}
                    >
                        Login
                    </button>
                </form>
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                        Don't have an account?{" "}
                        <a href="register" style={{ color: "#2563eb", textDecoration: "none" }}>
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
