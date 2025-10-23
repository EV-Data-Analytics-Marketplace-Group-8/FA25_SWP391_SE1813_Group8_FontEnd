"use client";
import React, { useState } from "react";

export default function SignInFormEmail({ onBack }: { onBack: () => void }) {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: gọi API signin ở đây
        alert(`Demo Sign In: ${identifier}`);
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form" style={{ marginTop: 8 }}>
            <div className="form-group">
                <label className="field-label">EMAIL / USERNAME *</label>
                <input
                    className="input-field"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Enter your email address or username"
                />
            </div>

            <div className="form-group">
                <label className="field-label">PASSWORD *</label>
                <input
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </div>

            <div className="forgot-row" style={{ marginTop: 4 }}>
                <a className="link" href="#" onClick={(e) => e.preventDefault()}>Forgot Password</a>
            </div>

            <div className="auth-footer">
                <button type="button" className="btn-back" onClick={onBack}>⬅️ Back</button>
                <button type="submit" className="btn-primary">Sign In</button>
            </div>
        </form>
    );
}
