import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Vista - Your Guide to Amazing Adventures",
  description: "Discover travel tips, guides, and insights to make your journeys unforgettable with Travel Vista.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
