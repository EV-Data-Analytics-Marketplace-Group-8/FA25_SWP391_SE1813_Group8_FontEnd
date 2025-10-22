"use client";
import React from "react";

export function GoogleIcon() {
    return (
        <svg viewBox="0 0 533.5 544.3" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.6-36.9-4.7-54.5H272v103.1h146.9c-6.3 34.4-25.7 63.6-54.9 83.1v68h88.6c51.9-47.9 82.9-118.4 82.9-199.7z" />
            <path fill="#34a853" d="M272 544.3c73.2 0 134.7-24.3 179.6-66.2l-88.6-68c-25.4 17.1-58 27.2-91 27.2-70.2 0-129.7-47.4-151-111.3h-90v69.8C80.9 479.2 168 544.3 272 544.3z" />
            <path fill="#fbbc04" d="M121 327.9c-10.4-30.9-10.4-64.5 0-95.4v-69.8h-90C7.1 219.6 0 246.8 0 278.4s7.1 58.8 31 115.7l90-66.2z" />
            <path fill="#ea4335" d="M272 109.9c38.7 0 73.7 13.3 101.2 39.4l75.7-75.7C399.1 28.7 336.4 0 272 0 168 0 80.9 65.1 31 162.6l90 69.8C142.3 157.3 201.8 109.9 272 109.9z" />
        </svg>
    );
}

export function EmailIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 6.5h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11z" />
            <path fill="none" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 6.5L12 13 3 6.5" />
        </svg>
    );
}

export default function AuthButtons({
    onGoogle,
    onEmail,
    googleLabel,
    emailLabel
}: {
    onGoogle?: () => void;
    onEmail?: () => void;
    googleLabel?: string;
    emailLabel?: string;
}) {
    return (
        <div className="auth-actions">
            <button className="btn-auth btn-google" onClick={onGoogle}>
                <GoogleIcon />
                <span style={{ flex: 1, textAlign: "center" }}>{googleLabel}</span>
            </button>

            <button className="btn-auth btn-email" onClick={onEmail}>
                <EmailIcon />
                <span style={{ flex: 1, textAlign: "center" }}>{emailLabel}</span>
            </button>
        </div>
    );
}
