import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import "../../styles/auth.css";

export const metadata = {
    title: "Register - EV Market",
};

export default function RegisterPage() {
    return (
        <div className="auth-page">
            <AuthCard initialMode="register" />
        </div>
    );
}
