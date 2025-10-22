// src/app/layout.tsx
import "./styles/globals.css";
import Navbar from "@/components/header/Navbar";
import React from "react";

export const metadata = {
  title: "EV Data Marketplace",
  description: "Demo clone homepage kiểu Kaggle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
