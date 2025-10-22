// src/components/header/NavLinks.tsx
import React from "react";
import Link from "next/link";

export default function NavLinks() {
    const links = ["Competitions", "Datasets", "Models", "Code", "Discussions", "Blog", "Courses"];
    return (
        <ul className="nav-links">
            {links.map((t) => (
                <li key={t}><Link href={`/${t.toLowerCase()}`}>{t}</Link></li>
            ))}
            <li><a href="#" onClick={(e) => e.preventDefault()}>⋯</a></li>
        </ul>
    );
}
