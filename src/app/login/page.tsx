import React from "react";
import AuthCard from "@/components/auth/AuthCard";
import "@/styles/auth.css";

export default function LoginPage() {
    return (
        <div className="auth-page">
            <AuthCard initialMode="signin" />
        </div>
    );
}
