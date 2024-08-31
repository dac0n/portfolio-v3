import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen cursor-default [view-transition-name:body-transition-left]">
        {children}
      </body>
    </html>
  );
}
