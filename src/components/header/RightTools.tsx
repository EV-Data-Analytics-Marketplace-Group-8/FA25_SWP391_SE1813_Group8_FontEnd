// src/components/header/RightTools.tsx
import React from "react";

export default function RightTools() {
    return (
        <div className="right-tools">
            <input className="search" placeholder="Search" />
            <a className="signin" href="/login">Sign In</a>
            <a className="register" href="/register">Register</a>
        </div>
    );
}
