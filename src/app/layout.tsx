// src/app/layout.tsx
import React from "react";
import "@/styles/globals.css"; // Nếu không dùng alias @, đổi thành "../../styles/globals.css" tùy vị trí

import Navbar from "@/components/header/Navbar";

export const metadata = {
  title: "EV Market",
  description: "Clone Kaggle-like homepage",
  icons: {
    icon: "/thunder-logo.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Navbar />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
