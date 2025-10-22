import React from "react";
import AuthCard from "../../components/auth/AuthCard";


import "../../styles/auth.css";

export const metadata = {
    title: "Sign In - EV Market",
};

export default function LoginPage() {
    return (
        <div className="auth-page">
            <AuthCard initialMode="signin" />
        </div>
    );
}
