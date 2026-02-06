import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BubbleCursor from "../components/BubbleCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iqfat Shaikh - Frontend Developer",
  description: "Professional portfolio of Iqfat Shaikh, a passionate Frontend Developer specializing in modern web technologies like React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ cursor: 'none' }}
      >
        <BubbleCursor />
        {children}
      </body>
    </html>
  );
}
