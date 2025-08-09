import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lotus Blue - Web Development Company",
  description:
    "Professional web development services. We create stunning, modern websites and web applications that drive business growth.",
  keywords:
    "web development, website design, React, Next.js, TypeScript, frontend development",
  authors: [{ name: "Lotus Blue Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
