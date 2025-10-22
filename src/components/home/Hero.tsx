// src/components/home/Hero.tsx
import React from "react";

export default function Hero() {
    return (
        <section className="hero container">
            <div className="hero-left">
                <h1>Level up with the largest AI & ML community</h1>
                <p className="hero-sub">
                    Join over 26M+ machine learners to share, stress test, and stay up-to-date on all the latest ML techniques and technologies.
                    Discover a huge repository of community-published models, data & code for your next project.
                </p>
                <div className="hero-actions">
                    <button className="btn btn-ghost">Register with Google</button>
                    <button className="btn">Register with Email</button>
                </div>
            </div>

            <div className="hero-right">
                <img src="/hero-illustration.png" alt="hero" className="hero-img" />
            </div>
        </section>
    );
}
