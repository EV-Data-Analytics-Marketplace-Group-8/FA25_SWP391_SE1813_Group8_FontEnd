"use client";
import React, { useState } from "react";
import LogoSmall from "./LogoSmall";
import AuthButtons from "./AuthButtons";

type Mode = "signin" | "register";

export default function AuthCard({ initialMode = "signin" }: { initialMode?: Mode }) {
    const [mode, setMode] = useState<Mode>(initialMode);

    const handleGoogle = () => alert(`${mode === "signin" ? "Sign in" : "Register"} with Google`);
    const handleEmail = () => alert(`${mode === "signin" ? "Sign in" : "Register"} with Email`);

    return (
        <div className="auth-card">
            {/* Logo + tiêu đề */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <LogoSmall />
                <h2 className="auth-title">Welcome!</h2>
            </div>

            {/* Tabs */}
            <div
                className="auth-tabs"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    marginTop: "1.2rem",
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "0.5rem",
                }}
            >
                <button
                    onClick={() => setMode("signin")}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: mode === "signin" ? 700 : 400,
                        color: mode === "signin" ? "#111827" : "#6b7280",
                        transition: "color 0.2s ease",
                    }}
                >
                    Sign In
                </button>
                <button
                    onClick={() => setMode("register")}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: mode === "register" ? 700 : 400,
                        color: mode === "register" ? "#111827" : "#6b7280",
                        transition: "color 0.2s ease",
                    }}
                >
                    Register
                </button>
            </div>

            {/* Nút Google / Email */}
            <AuthButtons
                onGoogle={handleGoogle}
                onEmail={handleEmail}
                googleLabel={mode === "signin" ? "Sign in with Google" : "Register with Google"}
                emailLabel={mode === "signin" ? "Sign in with Email" : "Register with Email"}
            />

            {/* Footer */}
            <div className="auth-footer" style={{ marginTop: "1rem", textAlign: "center" }}>
                {mode === "signin" ? (
                    <>
                        Don’t have an account?{" "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setMode("register");
                            }}
                            style={{ fontWeight: 600 }}
                        >
                            Create one
                        </a>
                    </>
                ) : (
                    <>
                        Have an account?{" "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setMode("signin");
                            }}
                            style={{ fontWeight: 600 }}
                        >
                            Sign in
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}
