// src/components/header/NavLinks.tsx
import React from "react";
import MoreDropdown from "./MoreDropdown";

export default function NavLinks() {
    return (
        <ul className="nav-links">
            <li><a href="#">Competitions</a></li>
            <li><a href="#">Datasets</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">Discussions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Courses</a></li>
            <li><MoreDropdown /></li>
        </ul>
    );
}
