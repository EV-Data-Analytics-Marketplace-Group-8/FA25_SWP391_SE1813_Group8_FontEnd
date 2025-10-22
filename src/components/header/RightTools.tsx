// src/components/header/RightTools.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function RightTools() {
    return (
        <div className="right-tools">
            <input className="search" placeholder="Search" />
            <Link className="signin" href="/login">Sign In</Link>
            <Link className="register" href="/register">Register</Link>
        </div>
    );
}
