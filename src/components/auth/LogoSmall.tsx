import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoSmall({ name = "EV Market" }: { name?: string }) {
    return (
        <Link href="/" className="auth-logo" aria-label={name}>
            <Image src="/thunder-logo.svg" alt={name} width={36} height={36} />
            <span style={{ fontWeight: 800, fontSize: 20 }}>{name}</span>
        </Link>
    );
}
