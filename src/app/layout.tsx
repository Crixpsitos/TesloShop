import type { Metadata } from "next";

import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Teslo | Shop",
  },
  description:
    "Tienda de ropa fictisia para pruebas y hecha con Next.js 15, Tailwind, Typescript y Prisma",
  authors: [{ name: "@Crixpsitos" }],
  keywords: [
    "Next.js",
    "Tailwind CSS",
    "Typescript",
    "Prisma",
    "React",
    "Shop",
    "E-commerce",
    "Fictional Store",
    "Online Store",
    "Web Development",
    "Frontend",
    "Backend",
    "Fullstack",
    "Web Design",
    "Web Application",
    "Web Development",
    "Web App",
    "Web Design",
    "Web Application",
  ],
  creator: "@Crixpsitos",
  publisher: "@Crixpsitos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
