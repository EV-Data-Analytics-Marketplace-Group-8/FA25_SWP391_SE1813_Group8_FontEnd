"use client";
import React, { useState } from "react";

export default function RegisterFormEmail({ onBack }: { onBack: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: gọi API register ở đây
        alert(`Demo Register: ${email} / ${fullname}`);
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form" style={{ marginTop: 8 }}>
            <div className="form-group">
                <label className="field-label">EMAIL</label>
                <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </div>

            <div className="form-group">
                <label className="field-label">PASSWORD</label>
                <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" />
                <div className="helper">Minimum of 7 characters</div>
            </div>

            <div className="form-group">
                <label className="field-label">FULL NAME</label>
                <input className="input-field" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Will be displayed on your profile" />
            </div>

            {/* captcha placeholder */}
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                <input type="checkbox" disabled />
                <span className="helper">[reCAPTCHA placeholder] Tôi không phải là người máy</span>
            </div>

            <div className="auth-footer">
                <button type="button" className="btn-back" onClick={onBack}>⬅️ Back</button>
                <button type="submit" className="btn-primary">Next</button>
            </div>
        </form>
    );
}
