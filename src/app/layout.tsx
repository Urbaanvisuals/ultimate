import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ultimate Real Estate Marketing Package in Phuket",
  description: "Premium property marketing package including photos, videos, website, and more for luxury real estate in Phuket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
