// src/components/header/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import RightTools from "./RightTools";

export default function Navbar() {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Link href="/" className="logo" aria-label="EV Market home">
                    <Image src="/thunder-logo.svg" alt="EV Market" width={40} height={40} priority />
                </Link>
                <Link href="/" className="logo-text" style={{ textDecoration: "none" }}>
                    <span style={{ fontWeight: 700, color: "#0570de", fontSize: 18 }}>EV Market</span>
                </Link>
            </div>

            <nav style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <NavLinks />
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <RightTools />
            </div>
        </>
    );
}
