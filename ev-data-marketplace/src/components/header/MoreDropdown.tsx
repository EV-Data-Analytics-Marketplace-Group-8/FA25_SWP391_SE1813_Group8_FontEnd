// src/components/header/MoreDropdown.tsx
"use client";
import React, { useState } from "react";

export default function MoreDropdown() {
    const [open, setOpen] = useState(false);
    return (
        <div className="more-dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="more-btn">⋯</button>
            {open && (
                <ul className="dropdown-list">
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            )}
        </div>
    );
}
