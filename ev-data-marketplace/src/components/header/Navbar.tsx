// src/components/header/Navbar.tsx
"use client";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import RightTools from "./RightTools";

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <div className="left">
                    <Logo />
                </div>

                <nav className="center">
                    <NavLinks />
                </nav>

                <div className="right">
                    <RightTools />
                </div>
            </div>
        </header>
    );
}
