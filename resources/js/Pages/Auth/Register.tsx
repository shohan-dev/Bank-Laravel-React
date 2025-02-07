import { useForm } from "@inertiajs/react";
import React from "react";

const RegisterPage: React.FC = () => {
    const { data, setData, post, processing, errors } = useForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(name as "fullName" | "email" | "password" | "confirmPassword", value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/register");
        console.log("Submitted!");
    };

    return (
        <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", padding: "2rem 3rem", borderRadius: "0.375rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", width: "100%", maxWidth: "400px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''} />
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label htmlFor="fullName" style={{ display: "block", fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={data.fullName}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "0.375rem",
                                border: `1px solid ${errors.fullName ? "#ef4444" : "#d1d5db"}`,
                                fontSize: "1rem"
                            }}
                        />
                        {errors.fullName && (
                            <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.fullName}</p>
                        )}
                    </div>
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label htmlFor="email" style={{ display: "block", fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "0.375rem",
                                border: `1px solid ${errors.email ? "#ef4444" : "#d1d5db"}`,
                                fontSize: "1rem"
                            }}
                        />
                        {errors.email && (
                            <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.email}</p>
                        )}
                    </div>
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label htmlFor="password" style={{ display: "block", fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "0.375rem",
                                border: `1px solid ${errors.password ? "#ef4444" : "#d1d5db"}`,
                                fontSize: "1rem"
                            }}
                        />
                        {errors.password && (
                            <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.password}</p>
                        )}
                    </div>
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label htmlFor="confirmPassword" style={{ display: "block", fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={data.confirmPassword}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "0.375rem",
                                border: `1px solid ${errors.confirmPassword ? "#ef4444" : "#d1d5db"}`,
                                fontSize: "1rem"
                            }}
                        />
                        {errors.confirmPassword && (
                            <p style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.confirmPassword}</p>
                        )}
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
                        Register
                    </button>
                </form>
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Already have an account? <a href="/login" style={{ color: "#2563eb", textDecoration: "none" }}>Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
