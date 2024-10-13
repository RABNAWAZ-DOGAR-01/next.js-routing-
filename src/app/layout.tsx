import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import navegation from "@/app/components/page";
import { Component } from "react";
import Navbar from "@/app/components/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
             <Navbar />
        {children}
      </body>
    </html>
  );
}
