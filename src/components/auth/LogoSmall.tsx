import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoSmall({ name = "EV Market" }: { name?: string }) {
    return (
        <Link href="/" className="auth-header" aria-label={name}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Image src="/thunder-logo.svg" alt={name} width={36} height={36} />
                <span style={{ fontWeight: 800, fontSize: 18, color: "#0f1724" }}>{name}</span>
            </div>
        </Link>
    );
}
